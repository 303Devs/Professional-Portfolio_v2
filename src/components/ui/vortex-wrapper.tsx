'use client';

import dynamic from 'next/dynamic';

const Vortex = dynamic(() => import('./vortex'), { ssr: false });

interface VortexWrapperProps {
  children: React.ReactElement;
  backgroundColor?: string;
  rangeY?: number;
  particleCount?: number;
  className?: string;
}

const VortexWrapper: React.FC<VortexWrapperProps> = ({
  children,
  backgroundColor = 'transparent',
  rangeY = 800,
  particleCount = 500,
  className = '',
}) => {
  return (
    <Vortex
      backgroundColor={backgroundColor}
      rangeY={rangeY}
      particleCount={particleCount}
      className={`flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full ${className}`}>
      {children}
    </Vortex>
  );
};

export default VortexWrapper;
