import React from 'react';

// Define the props for the button to ensure type safety
interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  ariaLabel: string;
}

const AccessibleButton: React.FC<AccessibleButtonProps> = ({ children, ariaLabel, ...props }) => {
  return (
    <button aria-label={ariaLabel} {...props}>
      {children}
    </button>
  );
};

export default AccessibleButton;
