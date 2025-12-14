import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin } from 'react-icons/fi';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        reason: 'Job Opportunity',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/contact`, formData);
            setStatus('success');
            setFormData({ name: '', email: '', reason: 'Job Opportunity', message: '' });
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <div className="py-10 grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
                <h2 className="text-4xl font-bold">Get In Touch</h2>
                <p className="text-gray-300 text-lg">
                    Interested in working together or have a question? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>

                <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                        <div className="mt-1 bg-blue-500/20 p-3 rounded-full text-blue-400">
                            <FiMapPin size={24} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white">Location</h4>
                            <p className="text-gray-400">A-1201, Suryam Ananta<br />Ahmedabad, Gujarat</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="mt-1 bg-purple-500/20 p-3 rounded-full text-purple-400">
                            <FiMail size={24} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white">Email</h4>
                            <p className="text-gray-400">ankush@example.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md"
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Reason</label>
                        <select
                            name="reason"
                            value={formData.reason}
                            onChange={handleChange}
                            className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        >
                            <option value="Job Opportunity">Job Opportunity</option>
                            <option value="Freelance Project">Freelance Project</option>
                            <option value="Mentorship">Mentorship</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                        <textarea
                            name="message"
                            required
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>

                    {status === 'success' && <p className="text-green-400 text-center">Message sent successfully!</p>}
                    {status === 'error' && <p className="text-red-400 text-center">Something went wrong. Please try again.</p>}
                </form>
            </motion.div>
        </div>
    );
};

export default Contact;
