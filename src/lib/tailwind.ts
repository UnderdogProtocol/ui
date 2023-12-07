// src/lib/tailwind.ts

export type TailwindSize = 'sm' | 'md' | 'lg' | 'xl';

const sizeConfig = {
  sm: { fontSize: 'text-sm', padding: 'p-2' },
  md: { fontSize: 'text-base', padding: 'p-4' },
  lg: { fontSize: 'text-lg', padding: 'p-6' },
  xl: { fontSize: 'text-xl', padding: 'p-8' },
};

export const getTailwindClassNames = (size: TailwindSize) => {
  return {
    fontSizeClassName: sizeConfig[size].fontSize,
    paddingClassName: sizeConfig[size].padding,
  };
};