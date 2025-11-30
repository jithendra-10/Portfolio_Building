import React from 'react';
import { ThreeDPhotoCarousel, CertificateInfo } from '../ui/ThreeDPhotoCarousel';

const Certifications: React.FC = () => {
  // Replace this with your actual certification data
  const certificates: CertificateInfo[] = [
    {
      image: "https://images.pexels.com/photos/2228562/pexels-photo-2228562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Full Stack Web Development",
      description: "A comprehensive course covering modern web development technologies including HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
      credentialUrl: "https://example.com/credential/123"
    },
    {
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Machine Learning Specialization",
      description: "An in-depth study of machine learning algorithms, neural networks, and practical applications of AI.",
      credentialUrl: "https://example.com/credential/456"
    },
    {
      image: "https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "AWS Certified Solutions Architect",
      description: "Professional certification validating expertise in designing and deploying scalable, secure, and robust applications on AWS.",
      credentialUrl: "https://example.com/credential/789"
    },
    {
      image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Advanced React Patterns",
      description: "An advanced course on React design patterns, performance optimization, and state management techniques.",
      credentialUrl: "https://example.com/credential/101"
    },
    {
      image: "https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Task Management App",
      description: "A productivity app for managing tasks and collaborating with teams, featuring real-time updates.",
      credentialUrl: "https://example.com/credential/112"
    },
    {
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Weather Forecast App",
      description: "A weather application that displays current weather conditions and forecasts using geolocation and weather APIs.",
      credentialUrl: "https://example.com/credential/113"
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Certifications & Learning</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            I believe in continuous learning. Here's a gallery of my recent certifications and areas of study. Drag the carousel to explore, and click any certificate for more details.
          </p>
        </div>
        
        <div className="rounded-2xl bg-white dark:bg-slate-900/70 dark:backdrop-blur-sm dark:border dark:border-slate-700/50 dark:shadow-2xl dark:shadow-purple-700/20 p-4">
          <ThreeDPhotoCarousel certificates={certificates} />
        </div>
      </div>
    </section>
  );
};

export default Certifications;
