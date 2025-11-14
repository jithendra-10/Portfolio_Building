import React from 'react';

const skills = {
  languages: {
    icon: '🧑‍💻', // You can replace with an SVG or image later
    label: 'Languages',
    items: [
      'C', 'C++', 'Java', 'Python', 'SQL', 'LaTeX', 'x86 Assembly', 'HTML', 'SCSS', 'JavaScript'
    ]
  },
  frameworks: {
    icon: '🧬',
    label: 'Frameworks & Libraries',
    items: [
      'Node.js', 'Express.js', 'Bootstrap', 'Tensorflow', 'Keras', 'Sci-Kit Learn', 'Matplotlib', 'NLTK'
    ]
  },
  tools: {
    icon: '🛠️',
    label: 'Software Tools',
    items: [
      'Git', 'Docker', 'AWS', 'VS Code', 'JIRA', 'Postman', 'Figma'
    ]
  },
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-transparent">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2 text-gray-900 dark:text-white">
            Technical Skills <span className="text-blue-600 dark:text-blue-400">▸</span>
          </h2>
        </div>
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900/70 dark:backdrop-blur-sm dark:border dark:border-slate-700/50 dark:shadow-2xl dark:shadow-purple-700/20">
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Languages Card */}
            <div className="flex-1 bg-white dark:bg-transparent rounded-2xl p-6 shadow-lg dark:shadow-none">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block text-3xl bg-blue-100 dark:bg-blue-900/50 rounded-xl p-2">{skills.languages.icon}</span>
                <span className="text-xl font-bold text-gray-900 dark:text-white">{skills.languages.label}</span>
              </div>
              <div className="text-gray-700 dark:text-gray-200 text-base">
                {skills.languages.items.join(', ')}
              </div>
            </div>
            {/* Frameworks Card */}
            <div className="flex-1 bg-white dark:bg-transparent rounded-2xl p-6 shadow-lg dark:shadow-none">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block text-3xl bg-blue-100 dark:bg-blue-900/50 rounded-xl p-2">{skills.frameworks.icon}</span>
                <span className="text-xl font-bold text-gray-900 dark:text-white">{skills.frameworks.label}</span>
              </div>
              <div className="text-gray-700 dark:text-gray-200 text-base">
                {skills.frameworks.items.join(', ')}
              </div>
            </div>
            {/* Software Tools Card */}
            <div className="flex-1 bg-white dark:bg-transparent rounded-2xl p-6 shadow-lg dark:shadow-none">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block text-3xl bg-blue-100 dark:bg-blue-900/50 rounded-xl p-2">{skills.tools.icon}</span>
                <span className="text-xl font-bold text-gray-900 dark:text-white">{skills.tools.label}</span>
              </div>
              <div className="text-gray-700 dark:text-gray-200 text-base">
                {skills.tools.items.join(', ')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
