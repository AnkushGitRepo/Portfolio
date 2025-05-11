'use client';

import { useState, FormEvent, useEffect } from 'react';
import { submitContactForm } from '@/lib/apiWithFallback';
import { ContactFormData, ContactReason } from '@/types';
import { useThemeColor, getColorClasses } from '@/components/theme-color-context';
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const { currentColor } = useThemeColor();
  const colors = getColorClasses(currentColor);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define styles matching HeroSection.tsx
  const styles = [
    {
      bg: 'from-blue-50 to-blue-100',
      text: 'text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700',
      profileBg: 'bg-blue-200',
      profileText: 'text-blue-800'
    },
    {
      bg: 'from-green-50 to-green-100',
      text: 'text-green-600',
      button: 'bg-green-600 hover:bg-green-700',
      profileBg: 'bg-green-200',
      profileText: 'text-green-800'
    },
    {
      bg: 'from-purple-50 to-purple-100',
      text: 'text-purple-600',
      button: 'bg-purple-600 hover:bg-purple-700',
      profileBg: 'bg-purple-200',
      profileText: 'text-purple-800'
    },
    {
      bg: 'from-orange-50 to-orange-100',
      text: 'text-orange-600',
      button: 'bg-orange-600 hover:bg-orange-700',
      profileBg: 'bg-orange-200',
      profileText: 'text-orange-800'
    }
  ];

  // Set up color cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % styles.length);
    }, 3000); // Change color every 3 seconds

    return () => clearInterval(interval);
  }, [styles.length]);

  // Get current style
  const currentStyle = styles[currentIndex];

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    contactReason: ContactReason.JOB_OPPORTUNITY,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
        message: response.message || 'Your message has been sent successfully!',
      });
      setFormData({
        name: '',
        email: '',
        contactReason: ContactReason.JOB_OPPORTUNITY,
        message: '',
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later.',
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col p-0 m-0" id="contact">
      <div className="flex flex-col lg:flex-row w-full h-full p-0 m-0">
        {/* Left Column - Contact Information */}
        <div className={`bg-gradient-to-r ${currentStyle.bg} p-8 transition-colors duration-300 relative overflow-hidden text-left lg:w-1/2 flex flex-col justify-start m-0`}>
          <h3 className={`text-2xl font-bold ${currentStyle.text} mb-6 text-center`}>
            Contact Information
          </h3>
          <div className={`space-y-6 relative z-10 ${currentStyle.text} text-left`}>
            <div className="flex items-start group">
              <div className={`flex-shrink-0 ${currentStyle.profileBg} p-3 rounded-full transition-all duration-300 group-hover:scale-110`}>
                <Mail className={`h-6 w-6 ${currentStyle.profileText}`} />
              </div>
              <div className="ml-4">
                <h4 className={`text-lg font-semibold ${currentStyle.profileText}`}>Email</h4>
                <a href="mailto:ankushgupta1806@gmail.com" className={`${currentStyle.text} hover:${currentStyle.profileText} transition-colors duration-300`}>
                  ankushgupta1806@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start group">
              <div className={`flex-shrink-0 ${currentStyle.profileBg} p-3 rounded-full transition-all duration-300 group-hover:scale-110`}>
                <Phone className={`h-6 w-6 ${currentStyle.profileText}`} />
              </div>
              <div className="ml-4">
                <h4 className={`text-lg font-semibold ${currentStyle.profileText}`}>Phone</h4>
                <a href="tel:+917202906881" className={`${currentStyle.text} hover:${currentStyle.profileText} transition-colors duration-300`}>
                  +91 7202906881
                </a>
              </div>
            </div>
            <div className="flex items-start group">
              <div className={`flex-shrink-0 ${currentStyle.profileBg} p-3 rounded-full transition-all duration-300 group-hover:scale-110`}>
                <div className="h-6 w-6 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${currentStyle.profileText}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className={`text-lg font-semibold ${currentStyle.profileText}`}>Social</h4>
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://github.com/AnkushGitRepo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${currentStyle.text} hover:${currentStyle.profileText} transition-colors duration-300 transform hover:scale-110`}
                    aria-label="GitHub"
                  >
                    <Github className={`h-6 w-6 ${currentStyle.profileText}`} />
                  </a>
                  <a
                    href="https://linkedin.com/in/ankushgupta18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${currentStyle.text} hover:${currentStyle.profileText} transition-colors duration-300 transform hover:scale-110`}
                    aria-label="LinkedIn"
                  >
                    <Linkedin className={`h-6 w-6 ${currentStyle.profileText}`} />
                  </a>
                  <a
                    href="https://instagram.com/_ankushg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${currentStyle.text} hover:${currentStyle.profileText} transition-colors duration-300 transform hover:scale-110`}
                    aria-label="Instagram"
                  >
                    <Instagram className={`h-6 w-6 ${currentStyle.profileText}`} />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start group mt-8">
              <div className={`flex-shrink-0 ${currentStyle.profileBg} p-3 rounded-full transition-all duration-300 group-hover:scale-110`}>
                <MapPin className={`h-6 w-6 ${currentStyle.profileText}`} />
              </div>
              <div className="ml-4">
                <h4 className={`text-lg font-semibold ${currentStyle.profileText}`}>Location</h4>
                <p className={`${currentStyle.text}`}>A-1201, Suryam Ananta, Vastral</p>
                <p className={`${currentStyle.text}`}>Ahmedabad, Gujarat, India 382418</p>

                <div className="mt-4 relative h-48 w-full rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.70717963153!2d72.43965535!3d23.0201716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>

                <a
                  href="https://maps.google.com/?q=A-1201,+Suryam+Ananta,+Vastral,+Ahmedabad,+Gujarat,+India+382418"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 inline-flex items-center text-sm ${currentStyle.text} hover:${currentStyle.profileText} hover:underline`}
                >
                  <ExternalLink className={`h-4 w-4 mr-1 ${currentStyle.profileText}`} /> View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Send Message Form */}
        <div className="bg-white p-8 transition-all duration-500 relative overflow-y-auto lg:w-1/2 flex flex-col">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600">
              Have a question or want to work together? Feel free to contact me!
            </p>
            <div className={`w-20 h-1 ${currentStyle.button} mt-4 mx-auto`}></div>
          </div>
          <h3 className={`text-2xl font-bold ${currentStyle.text} mb-6 text-left`}>Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="group">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors duration-200 text-left"
              >
                Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:${colors.border} focus:ring-2 focus:ring-opacity-50 focus:border-transparent bg-white text-gray-900 transition-all duration-300`}
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors duration-200 text-left"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:${colors.border} focus:ring-2 focus:ring-opacity-50 focus:border-transparent bg-white text-gray-900 transition-all duration-300`}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div className="group">
              <label
                htmlFor="contactReason"
                className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors duration-200 text-left"
              >
                Reason for Contact
              </label>
              <div className="relative">
                <select
                  id="contactReason"
                  name="contactReason"
                  value={formData.contactReason}
                  onChange={handleReasonChange}
                  required
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:${colors.border} focus:ring-2 focus:ring-opacity-50 focus:border-transparent bg-white text-gray-900 transition-all duration-300 appearance-none`}
                >
                  {Object.values(ContactReason).map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="group">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors duration-200 text-left"
              >
                Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:${colors.border} focus:ring-2 focus:ring-opacity-50 focus:border-transparent bg-white text-gray-900 transition-all duration-300`}
                  placeholder="Your message here..."
                ></textarea>
              </div>
            </div>

            {submitStatus && (
              <div
                className={`p-4 rounded-lg ${
                  submitStatus.success
                    ? `${colors.light}`
                    : 'bg-red-100 text-red-800'
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
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
