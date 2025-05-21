"use client";

import { useState, FormEvent } from "react";
import { submitContactForm } from "@/lib/apiWithFallback";
import { ContactFormData, ContactReason } from "@/types";
import { useThemeColor } from "@/components/theme-color-context";
import { Github, Linkedin, Instagram, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const { currentColor } = useThemeColor();

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    contactReason: ContactReason.JOB_OPPORTUNITY,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as ContactReason;
    setFormData((prev) => ({ ...prev, contactReason: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await submitContactForm(formData);
      setSubmitStatus({
        success: true,
        message: response.message || "Your message has been sent successfully!",
      });
      setFormData({
        name: "",
        email: "",
        contactReason: ContactReason.JOB_OPPORTUNITY,
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Color style logic matching header/footer
  const styles = [
    {
      bg: "from-blue-50 to-blue-100",
      solidBg: "bg-blue-50",
      leftBg: "bg-blue-100",
      text: "text-blue-600",
      button: "bg-blue-600 hover:bg-blue-700",
    },
    {
      bg: "from-green-50 to-green-100",
      solidBg: "bg-green-50",
      leftBg: "bg-green-100",
      text: "text-green-600",
      button: "bg-green-600 hover:bg-green-700",
    },
    {
      bg: "from-purple-50 to-purple-100",
      solidBg: "bg-purple-50",
      leftBg: "bg-purple-100",
      text: "text-purple-600",
      button: "bg-purple-600 hover:bg-purple-700",
    },
    {
      bg: "from-orange-50 to-orange-100",
      solidBg: "bg-orange-50",
      leftBg: "bg-orange-100",
      text: "text-orange-600",
      button: "bg-orange-600 hover:bg-orange-700",
    },
  ];
  const colorMap = ["blue", "green", "purple", "orange"];
  const styleIndex = colorMap.indexOf(currentColor);
  const currentStyle = styles[styleIndex === -1 ? 0 : styleIndex];

  return (
    <section
      id="contact"
      className={`min-h-screen w-full flex items-stretch justify-stretch ${currentStyle.solidBg} p-0 m-0 transition-colors duration-500`}
    >
      <div className="flex flex-row w-full h-full p-0 m-0">
        {/* Left: Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className={`w-[30vw] min-w-[300px] max-w-[500px] flex flex-col justify-center items-start px-8 py-0 border-r border-gray-200 h-full m-0 ${currentStyle.leftBg} transition-colors duration-500`}
          style={{ minHeight: "100vh" }}
        >
          <h2
            className={`font-extrabold leading-tight mb-6 text-left ${currentStyle.text}`}
            style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}
          >
            REACH OUT
            <br />
            TO ME
          </h2>
          <p className={`text-base mb-2 text-gray-900`}>
            Contact me at{" "}
            <a
              href="mailto:ankushgupta1806@gmail.com"
              className={`${currentStyle.text} font-medium hover:underline transition-colors`}
            >
              ankushgupta1806@gmail.com
            </a>
          </p>
          <div
            className="mb-2"
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "#bdbdbd",
              lineHeight: 1,
            }}
          >
            OR
          </div>
          <p className={`text-base mb-8 text-gray-900`}>
            Fill in the form and I will reach out to you shortly.
          </p>
          <div className="flex space-x-4 mt-4">
            <motion.a
              href="https://github.com/AnkushGitRepo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              className={`${currentStyle.text} transition-colors`}
              aria-label="GitHub"
            >
              <Github className="h-7 w-7" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/ankushgupta18"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              className={`${currentStyle.text} transition-colors`}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-7 w-7" />
            </motion.a>
            <motion.a
              href="https://instagram.com/_ankushg"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              className={`${currentStyle.text} transition-colors`}
              aria-label="Instagram"
            >
              <Instagram className="h-7 w-7" />
            </motion.a>
          </div>
        </motion.div>
        {/* Right: Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`w-[70vw] flex flex-col justify-center items-center px-0 py-0 bg-white h-full m-0 transition-colors duration-500`}
          style={{ minHeight: "100vh" }}
        >
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl mx-auto space-y-6 p-12"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1 text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-current focus:border-transparent bg-white text-gray-900 transition-all duration-300"
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1 text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-current focus:border-transparent bg-white text-gray-900 transition-all duration-300"
                placeholder="Enter Email"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="contactReason"
                className="block text-sm font-medium mb-1 text-gray-900"
              >
                Reason to Connect
              </label>
              <select
                id="contactReason"
                name="contactReason"
                value={formData.contactReason}
                onChange={handleReasonChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-current focus:border-transparent bg-white text-gray-900 transition-all duration-300 appearance-none pr-10"
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  appearance: "none",
                }}
              >
                {Object.values(ContactReason).map((reason) => (
                  <option key={reason} value={reason}>
                    {reason}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 flex items-center h-full">
                <ChevronDown className="text-gray-400 w-5 h-5" />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1 text-gray-900"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-current focus:border-transparent bg-white text-gray-900 transition-all duration-300"
                placeholder="Type your message here."
              ></textarea>
            </div>
            {submitStatus && (
              <div
                className={`p-4 rounded-lg text-center ${
                  submitStatus.success
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                } transition-all duration-300 animate-fadeIn`}
              >
                {submitStatus.message}
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 ${currentStyle.button} text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-md hover:shadow-lg text-center`}
            >
              {isSubmitting ? "Sending..." : "SEND MESSAGE"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
