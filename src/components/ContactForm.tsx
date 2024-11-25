import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'ducatimondani@gmail.com'
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus({ submitting: false, submitted: false, error: true });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <div className="mb-8 text-center">
        <p className="text-gray-300 mb-2">Feel free to reach out directly at:</p>
        <a 
          href="mailto:ducatimondani@gmail.com" 
          className="text-blue-500 hover:text-blue-400 text-lg font-medium flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          ducatimondani@gmail.com
        </a>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={formData.subject}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={formData.message}
          />
        </div>

        {status.error && (
          <div className="text-red-500 text-sm">
            Failed to send message. Please try again later.
          </div>
        )}

        {status.submitted && (
          <div className="text-green-500 text-sm">
            Message sent successfully!
          </div>
        )}

        <button
          type="submit"
          disabled={status.submitting}
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>{status.submitting ? 'Sending...' : 'Send Message'}</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}