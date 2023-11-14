import React, { ReactNode } from 'react';

interface AppTextProps {
  type: 'header' | 'subheader' | 'text';
  style?: string;
  children: ReactNode;
  textStyle?: string;
}

const AppText: React.FC<AppTextProps> = ({
  type,
  style,
  children,
  textStyle = 'text-base font-normal dark:text-secondary text-dark',
}) => {
  // let textStyle = ''; // Default style for uniformity

  if (type === 'header') {
    textStyle = 'text-2xl font-bold dark:text-secondary text-dark';
  } else if (type === 'subheader') {
    textStyle = 'text-lg font-semibold dark:text-secondary text-dark';
  }

  return <div className={`${textStyle} ${style}`}>{children}</div>;
};

export default AppText;
