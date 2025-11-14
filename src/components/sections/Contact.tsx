'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail, 
  Send, 
  Loader2, 
  CheckCircle, 
  AlertTriangle, 
  Github, 
  Linkedin, 
  Instagram 
} from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/Jithendra-G-S',
    hoverColor: 'group-hover:bg-[#333]',
    shadowColor: 'group-hover:shadow-[0_0_20px_rgba(51,51,51,0.6)]'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/jithendra-g-s-198115259/',
    hoverColor: 'group-hover:bg-[#0077b5]',
    shadowColor: 'group-hover:shadow-[0_0_20px_rgba(0,119,181,0.6)]'
  },
  {
    name: 'Mail',
    icon: Mail,
    url: 'mailto:jithendrags.dev@gmail.com',
    hoverColor: 'group-hover:bg-red-600',
    shadowColor: 'group-hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: '#', // Add your Instagram URL
    hoverColor: 'group-hover:bg-radial-instagram',
    shadowColor: 'group-hover:shadow-[0_0_20px_rgba(225,48,108,0.6)]'
  }
];

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceID = 'service_h9b7m2f';
    const templateID = 'template_zmvj4il';
    const publicKey = '354aLtkp8Hnp4J2VI';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        form.current?.reset();
      }, () => {
        setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 6000);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out to me.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900/70 dark:backdrop-blur-sm dark:border dark:border-slate-700/50 dark:shadow-2xl dark:shadow-purple-700/20">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Form fields... */}
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input type="text" name="user_name" id="user_name" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input type="email" name="user_email" id="user_email" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <input type="text" name="subject" id="subject" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea name="message" id="message" required rows={4} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-300 disabled:bg-blue-400">
                {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : <Send className="mr-2" />}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {submitStatus && (
              <div className={`mt-4 p-4 rounded-lg flex items-center ${submitStatus.type === 'success' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'}`}>
                {submitStatus.type === 'success' ? <CheckCircle className="mr-3" /> : <AlertTriangle className="mr-3" />}
                {submitStatus.message}
              </div>
            )}
          </div>
          
          {/* Social Connect */}
          <div className="flex flex-col justify-center items-center">
             <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">Connect With Me</h3>
            <div 
              className="w-full p-8 rounded-2xl bg-white dark:bg-slate-900/70 dark:backdrop-blur-sm dark:border dark:border-slate-700/50 dark:shadow-2xl dark:shadow-purple-700/20"
            >
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {socialLinks.map(link => (
                  <a 
                    key={link.name} 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center text-decoration-none transition-all duration-300 ease-in-out z-10"
                  >
                    <div className={`icon-container flex justify-center items-center w-16 h-16 rounded-full transition-all duration-300 ease-in-out relative bg-gray-200 dark:bg-white/5 shadow-lg border border-white/10 group-hover:transform group-hover:-translate-y-2 group-hover:scale-110 ${link.hoverColor} ${link.shadowColor}`}>
                      <link.icon className="h-7 w-7 text-gray-800 dark:text-white" />
                    </div>
                    <span className="mt-3 text-sm text-gray-700 dark:text-white font-medium opacity-70 transition-all duration-300 ease-in-out group-hover:opacity-100">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
