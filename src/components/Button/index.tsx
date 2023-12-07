// src/components/Button/index.tsx

import React, { MouseEventHandler, ReactNode } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export type ButtonType = 'primary' | 'secondary' | 'link';

export interface ButtonProps {
  type?: ButtonType;
  color?: string;
  children?: ReactNode;
  htmlType?: 'submit' | 'button';
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  children,
  htmlType = 'button',
  className,
  disabled,
  onClick,
  href,
}) => {
  const baseClasses = 'focus:outline-none font-medium transition ease-in-out duration-150 rounded-t rounded-r';

  const typeClasses = {
    primary: clsx('bg-primary', 'text-white', 'hover:bg-primary-dark'),
    secondary: clsx('border', 'border-primary', 'text-primary', 'hover:bg-primary-light', 'bg-transparent'),
    link: 'text-primary hover:underline',
  };

  const buttonClasses = twMerge(
    clsx(
      baseClasses,
      typeClasses[type],
      { 'opacity-50 cursor-not-allowed': disabled },
      className
    )
  );

  const handleClick: React.MouseEventHandler<HTMLElement> = (event) => {
    if (onClick) {
      onClick(event as React.MouseEvent<HTMLButtonElement>);
    }
  };

  const ButtonElement = href ? 'a' : 'button';
  const linkProps = href ? { href, role: 'button' } : {};

  return (
    <ButtonElement
      type={href ? undefined : htmlType}
      className={buttonClasses}
      disabled={ButtonElement === 'button' && disabled}
      onClick={handleClick}
      {...linkProps}
    >
      {children}
    </ButtonElement>
  );
};