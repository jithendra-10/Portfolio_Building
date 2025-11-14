import React from 'react';

// Define the props for the component to ensure type safety
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, className, loading = 'lazy' }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      // You can add more optimization attributes here if needed, such as `decoding`
      // decoding="async"
    />
  );
};

export default OptimizedImage;
