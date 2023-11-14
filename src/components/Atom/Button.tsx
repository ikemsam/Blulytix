import React from 'react';

type ButtonProps = {
  variant?: 'small' | 'large' | 'default';
  rounded?: boolean;
  disabled?: boolean;
  outline?: boolean;
  bgColor?: string;
  textStyle?: string;
  hoverEffect?: boolean;
  children: React.ReactNode;
  onClick?: () => any;
  customBtnStyle?: string; // Added this line
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  rounded = true,
  outline = false,
  bgColor = 'bg-blue-500',
  hoverEffect = true,
  textStyle,
  children,
  onClick,
  customBtnStyle = '',

  disabled,
}) => {
  let paddingClass;
  let textClass;

  switch (variant) {
    case 'small':
      paddingClass = 'px-2 py-1';
      textClass = 'text-sm';
      break;
    case 'large':
      paddingClass = 'px-6 py-3';
      textClass = 'text-xl';
      break;
    case 'default':
    default:
      paddingClass = 'px-4 py-2';
      textClass = 'text-base';
      break;
  }

  const roundedClass = rounded ? 'rounded-lg' : 'rounded-none';
  const outlineClass = outline
    ? 'border border-blue-500 bg-transparent'
    : bgColor;
  const hoverClass = hoverEffect ? 'hover:opacity-80' : '';

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${paddingClass} ${textClass} ${roundedClass} ${outlineClass} ${hoverClass} ${textStyle} ${customBtnStyle}`}
    >
      {children}
    </button>
  );
};
