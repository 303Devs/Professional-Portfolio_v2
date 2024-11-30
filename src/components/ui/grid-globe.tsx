'use client';
import { useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { arcs } from '@/data/arcs';

// Dynamically import the World component with SSR disabled
const World = dynamic(() => import('./globe').then((m) => m.World), {
  ssr: true,
});

// Pseudo-random color generator
const getPseudoRandomColor = (index: number, colors: string[]) =>
  colors[index % colors.length];

const GridGlobe = () => {
  const colors = useMemo(() => ['#06b6d4', '#3b82f6', '#6366f1'], []);

  const sampleArcs = useMemo(() => {
    return arcs.map((arc, index) => ({
      ...arc,
      color: getPseudoRandomColor(index, colors), // Deterministic color
    }));
  }, [colors]);

  const globeConfig = {
    pointSize: 4,
    globeColor: '#062056',
    showAtmosphere: true,
    atmosphereColor: '#FFFFFF',
    atmosphereAltitude: 0.1,
    emissive: '#062056',
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: 'rgba(255,255,255,0.7)',
    ambientLight: '#38bdf8',
    directionalLeftLight: '#ffffff',
    directionalTopLight: '#ffffff',
    pointLight: '#ffffff',
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  return (
    <div className='flex items-center justify-center absolute -left-5 top-36 md:top-40 w-full h-full'>
      <div className='max-w-7xl mx-auto w-full relative overflow-hidden px-4 h-96'>
        {/* Background gradient */}
        <div className='absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40' />

        {/* Globe container */}
        <div className='absolute w-full h-72 md:h-full z-10'>
          {/* Render the dynamically imported World component */}
          <World
            data={sampleArcs}
            globeConfig={globeConfig}
          />
        </div>
      </div>
    </div>
  );
};

export default GridGlobe;
