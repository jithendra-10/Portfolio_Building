import React from 'react';

const ProjectCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
      <div className="p-6">
        <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-4 animate-pulse"></div>
        <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>
        <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded mb-4 animate-pulse"></div>
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
          <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
          <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
          <div className="h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
