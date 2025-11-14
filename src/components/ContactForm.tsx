import React, { useState, FormEvent } from 'react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState('Submit');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    const form = e.target as HTMLFormElement;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE', // Replace with your actual access key
          ...data,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('Submitted!');
        form.reset();
      } else {
        setStatus('Error!');
      }
    } catch (error) {
      setStatus('Error!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-blue-500 focus:ring-blue-500 shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-blue-500 focus:ring-blue-500 shadow-sm"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-blue-500 focus:ring-blue-500 shadow-sm"
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors shadow-lg"
        >
          {status}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
