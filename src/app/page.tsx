import React from 'react';
import Hero from '../components/Hero';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/data';

const Home = () => {
  return (
    <main className='relative bg-purple-900 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
    </main>
  );
};

export default Home;
