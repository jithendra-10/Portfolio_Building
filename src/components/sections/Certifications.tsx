import React, { useState } from 'react';
import { Award, ExternalLink, ChevronDown } from 'lucide-react';

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credential: string;
  image: string;
};

const certificationsData: Certificate[] = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    date: 'December 2022',
    description: 'Comprehensive course covering modern web development technologies including HTML, CSS, JavaScript, React, Node.js, and MongoDB.',
    credential: 'https://example.com/credential/123',
    image: 'https://images.pexels.com/photos/2228562/pexels-photo-2228562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    title: 'Machine Learning Specialization',
    issuer: 'Coursera',
    date: 'June 2022',
    description: 'In-depth study of machine learning algorithms, neural networks, and practical applications of AI in various domains.',
    credential: 'https://example.com/credential/456',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'March 2023',
    description: 'Professional certification validating expertise in designing distributed systems on AWS, including deployment, management, and security.',
    credential: 'https://example.com/credential/789',
    image: 'https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    title: 'Advanced React Patterns',
    issuer: 'Frontend Masters',
    date: 'September 2022',
    description: 'Advanced course covering React design patterns, performance optimization, and state management techniques.',
    credential: 'https://example.com/credential/101',
    image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const AccordionItem: React.FC<{ cert: Certificate; isOpen: boolean; onClick: () => void; }> = ({ cert, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700/50">
      <button
        className="w-full flex justify-between items-center text-left py-4 px-6 focus:outline-none"
        onClick={onClick}
      >
        <div className="flex items-center">
          <Award size={20} className="text-blue-600 dark:text-blue-400 mr-4" />
          <span className="font-semibold text-gray-800 dark:text-white">{cert.title}</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 mr-4 hidden md:block">{cert.issuer}</span>
          <ChevronDown 
            size={20} 
            className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="p-6 bg-gray-100 dark:bg-transparent">
          <div className="flex flex-col md:flex-row items-center">
            <img 
              src={cert.image} 
              alt={cert.title}
              className="w-24 h-24 object-cover rounded-lg mb-4 md:mb-0 md:mr-6 flex-shrink-0"
            />
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{cert.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Issued: {cert.date}</p>
              <a 
                href={cert.credential} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-semibold text-sm"
              >
                View Credential <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Certifications: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-transparent">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Learning</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="rounded-2xl bg-white dark:bg-slate-900/70 dark:backdrop-blur-sm dark:border dark:border-slate-700/50 dark:shadow-2xl dark:shadow-purple-700/20">
          {certificationsData.map((cert, index) => (
            <AccordionItem 
              key={cert.id}
              cert={cert}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
