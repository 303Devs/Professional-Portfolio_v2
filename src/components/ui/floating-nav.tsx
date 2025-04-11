'use client';
import { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'flex justify-center items-center max-w-fit min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-8 py-5 rounded-xl border border-neutral-950/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-transparent backdrop-blur-lg backdrop-saturate-150 text-neutral-50 space-x-4',
          className
        )}>
        
        <Image
          src="/emblem.svg"
          alt="303Devs Logo"
          width={40}
          height={40}
          className="px-1 hidden sm:block bg-transparent"
        />

        {navItems.map(
          (
            navItem: { name: string; link: string; icon?: JSX.Element },
            idx: number
          ) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                'relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500'
              )}>
              <span className='block sm:hidden'>{navItem.icon}</span>
              <span className=' text-sm !cursor-pointer'>{navItem.name}</span>
            </Link>
          )
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNav;
