'use client';

import { useState, FormEvent } from 'react';
import { submitContactForm } from '@/lib/apiWithFallback';
import { ContactFormData, ContactReason } from '@/types';
import { useThemeColor, getColorClasses } from '@/components/theme-color-context';
import { Mail, MapPin, Phone, Github, Linkedin, Instagram } from 'lucide-react';

const HomeContactSection = () => {
  const { currentColor } = useThemeColor();
  const colors = getColorClasses(currentColor);

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    contactReason: ContactReason.JOB_OPPORTUNITY,
    message: '',
  });

  // Validation states
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // Validation functions
  const validateName = (name: string): string => {
    if (!name.trim()) return 'Name is required';
    if (name.trim().length < 2) return 'Name must be at least 2 characters';
    if (!/^[a-zA-Z\s]+$/.test(name)) return 'Name should only contain letters and spaces';
    return '';
  };

  const validateEmail = (email: string): string => {
    if (!email.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address';
    return '';
  };

  const validateMessage = (message: string): string => {
    if (!message.trim()) return 'Message is required';
    if (message.trim().length < 10) return 'Message must be at least 10 characters';
    return '';
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate on change if the field has been touched
    if (touched[name as keyof typeof touched]) {
      let errorMessage = '';

      if (name === 'name') {
        errorMessage = validateName(value);
      } else if (name === 'email') {
        errorMessage = validateEmail(value);
      } else if (name === 'message') {
        errorMessage = validateMessage(value);
      }

      setErrors(prev => ({ ...prev, [name]: errorMessage }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Mark field as touched
    setTouched(prev => ({ ...prev, [name]: true }));

    // Validate on blur
    let errorMessage = '';

    if (name === 'name') {
      errorMessage = validateName(value);
    } else if (name === 'email') {
      errorMessage = validateEmail(value);
    } else if (name === 'message') {
      errorMessage = validateMessage(value);
    }

    setErrors(prev => ({ ...prev, [name]: errorMessage }));
  };

  const handleReasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as ContactReason;
    setFormData((prev) => ({ ...prev, contactReason: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      message: true
    });

    // Validate all fields
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);

    // Update error states
    setErrors({
      name: nameError,
      email: emailError,
      message: messageError
    });

    // If there are any errors, don't submit
    if (nameError || emailError || messageError) {
      setSubmitStatus({
        success: false,
        message: 'Please fix the errors in the form before submitting.',
      });
      return;
    }

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
      // Reset touched and errors states
      setTouched({
        name: false,
        email: false,
        message: false
      });
      setErrors({
        name: '',
        email: '',
        message: ''
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
    <section id="home-contact">
      {/* Section Title */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
            <div className={`w-20 h-1 ${colors.bg} mx-auto mt-4`}></div>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Contact Information Section */}
        <div className={`lg:w-1/3 py-16 px-8 relative ${colors.light}`}>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="container mx-auto h-full flex items-center justify-center">
            <div className="relative z-10 max-w-md mx-auto">
              <h3 className={`text-2xl font-bold mb-8 ${colors.text}`}>Contact Information</h3>

              <div className="space-y-8">
                <div className="flex items-center">
                  <div className={`flex-shrink-0 ${colors.bg} p-3 rounded-full shadow-md`}>
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-semibold text-gray-900">Email</h4>
                    <a href="mailto:ankushgupta1806@gmail.com" className="text-gray-700">
                      ankushgupta1806@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className={`flex-shrink-0 ${colors.bg} p-3 rounded-full shadow-md`}>
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-700">A-1201, Suryam Ananta, Vastral</p>
                    <p className="text-gray-700">Ahmedabad, Gujarat, India 382418</p>
                    <a
                      href="https://maps.google.com/?q=A-1201,+Suryam+Ananta,+Vastral,+Ahmedabad,+Gujarat,+India+382418"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-2 inline-flex items-center text-sm ${colors.text}`}
                    >
                      <MapPin className="h-4 w-4 mr-1" /> View on Map
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className={`flex-shrink-0 ${colors.bg} p-3 rounded-full shadow-md`}>
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-semibold text-gray-900">Phone</h4>
                    <a href="tel:+917202906881" className="text-gray-700">+91 7202906881</a>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-base font-semibold text-gray-900 mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/AnkushGitRepo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${colors.bg} p-3 rounded-full shadow-md transition-transform hover:scale-110`}
                    >
                      <Github className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href="https://linkedin.com/in/ankushgupta18"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${colors.bg} p-3 rounded-full shadow-md transition-transform hover:scale-110`}
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href="https://instagram.com/_ankushg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${colors.bg} p-3 rounded-full shadow-md transition-transform hover:scale-110`}
                    >
                      <Instagram className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:w-2/3 py-16 px-8 bg-gray-50 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          <div className="container mx-auto h-full flex items-center justify-center">
            <div className="w-full max-w-2xl mx-auto">
              <h3 className={`text-2xl font-bold mb-8 ${colors.text} text-center lg:text-left`}>Send a Message</h3>
              <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl p-8 transition-all duration-300 hover:shadow-2xl transform hover:scale-[1.01] relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full px-4 py-2 border ${errors.name && touched.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:border-transparent bg-white text-gray-900`}
                />
                {errors.name && touched.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full px-4 py-2 border ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:border-transparent bg-white text-gray-900`}
                />
                {errors.email && touched.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="contactReason"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Reason for Contact
              </label>
              <select
                id="contactReason"
                name="contactReason"
                value={formData.contactReason}
                onChange={handleReasonChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent bg-white text-gray-900"
              >
                {Object.values(ContactReason).map((reason) => (
                  <option key={reason} value={reason}>
                    {reason}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                rows={4}
                className={`w-full px-4 py-2 border ${errors.message && touched.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:border-transparent bg-white text-gray-900`}
              ></textarea>
              {errors.message && touched.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            {submitStatus && (
              <div
                className={`p-4 rounded-lg mb-6 ${
                  submitStatus.success
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 ${colors.bg} ${colors.hover} text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-md hover:shadow-lg`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContactSection;
