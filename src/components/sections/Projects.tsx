'use client';

import React, { useState, useEffect } from 'react';
import projectsData from '../../projects.json';
import ProjectGrid from '../ui/ProjectGrid';
import { Project } from '../ui/ProjectGrid';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'api', label: 'API' },
    { id: 'design', label: 'Design' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category.includes(activeCategory));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-transparent">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            A selection of my work. Filter by category to see more.
          </p>
        </div>
        <div className="container mx-auto px-4 p-12 rounded-2xl bg-white dark:bg-slate-900/70 dark:backdrop-blur-sm dark:border dark:border-slate-700/50 dark:shadow-2xl dark:shadow-purple-700/20">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 px-4">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            
            <div>
              {filteredProjects.length > 0 && <ProjectGrid projects={filteredProjects} />}
            </div>
        </div>
    </section>
  );
};

export default Projects;
