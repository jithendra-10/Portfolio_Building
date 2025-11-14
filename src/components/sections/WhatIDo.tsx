import React from 'react';
import { Code, Server, BrainCircuit, Cloud } from 'lucide-react';

const whatIAmDoingData = [
  {
    icon: <Code size={20} className="text-blue-500 dark:text-blue-400" />,
    title: 'Frontend Development',
    description: 'I build responsive, and user-friendly web interfaces using modern frameworks like React and Vue, ensuring a seamless user experience across all devices.'
  },
  {
    icon: <Server size={20} className="text-green-500 dark:text-green-400" />,
    title: 'Backend Development',
    description: 'I specialize in creating robust and scalable backend systems with Node.js and Express, designing and managing databases to power applications.'
  },
  {
    icon: <BrainCircuit size={20} className="text-yellow-500 dark:text-yellow-400" />,
    title: 'AI & Machine Learning',
    description: 'I have hands-on experience in developing AI-powered applications and intelligent agents, with a strong foundation in machine learning and data analysis.'
  },
  {
    icon: <Cloud size={20} className="text-purple-500 dark:text-purple-400" />,
    title: 'Cloud',
    description: 'I have experience with cloud platforms like AWS and Firebase, and I am proficient in deploying and managing applications in the cloud.'
  }
];

const WhatIDo: React.FC = () => {
  return (
    <section id="what-i-do" className="py-16 bg-gray-50 dark:bg-transparent">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">What I am doing</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900/70 dark:backdrop-blur-sm dark:border dark:border-slate-700/50 dark:shadow-2xl dark:shadow-purple-700/20">
            <div className="grid gap-6 sm:grid-cols-2">
              {whatIAmDoingData.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-white dark:bg-transparent rounded-xl shadow hover:shadow-lg dark:shadow-none transition-shadow p-5 group"
                >
                  <span className="flex-shrink-0 animate-bounce-slow group-hover:animate-bounce">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-1">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
