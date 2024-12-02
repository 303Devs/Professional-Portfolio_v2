'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
// import { GridGlobe } from '@/components/ui';
import Image from 'next/image';
import Lottie from 'react-lottie';
import animationData from '@/data/confetti.json';
import {
  BackgroundBeams,
  BackgroundGradient,
  EvervaultCard,
  GlowingStars,
  MagicButton,
} from './';
import { IoCopyOutline } from 'react-icons/io5';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto',
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const leftStackList = ['Typescript', 'Python', 'Swift'];
  const rightStackList = ['Solidity', 'Rust', 'Javascript'];

  const confettiOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleCopy = () => {
    const email = 'anthony.merino@icloud.com';
    navigator.clipboard.writeText(email);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        'row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-neutral-800',
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor: 'linear-gradient(145deg, #4A3B87, #1E1648)',
        // 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}>
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className='w-full h-full absolute'>
          {img && (
            <Image
              src={img}
              alt={img}
              width={200}
              height={200}
              className={cn(imgClassName, 'object-cover object-center')}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              width={200}
              height={200}
              className='object-cover object-center w-full h-full'
            />
          )}
        </div>
        {id === 3 && <EvervaultCard className='absolute' />}
        {id === 4 && <GlowingStars className='absolute z-10' />}
        {id === 5 && (
          <BackgroundBeams className='absolute max-h-full bg-transparent'>
            {''}
          </BackgroundBeams>
        )}
        {id === 6 && (
          <BackgroundGradient>
            <div className='absolute z-50 inset-0 flex items-center justify-center font-bold lg:font-semibold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-6xl'></div>
          </BackgroundGradient>
        )}
        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 pg-purple-900'
          )}>
          <div className='font-sans font-extralight text-neutral-50 text-sm md:text-xs lg:text-base z-10 md:max-w-32'>
            {description}
          </div>
          <div className='font-sans font-bold lg:font-semibold text-lg lg:text-3xl max-w-96 z-10'>
            {title}
          </div>
          {/* {id === 2 && <GridGlobe />} */}

          {id === 3 && (
            <div className='flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2'>
              {/* tech stack lists */}
              <div className='flex flex-col gap-3 md:gap-3 lg:gap-8 overflow-scroll'>
                {leftStackList.map((item, i) => (
                  <span
                    key={i}
                    className='inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-neutral-800 bg-[linear-gradient(110deg,#0C081D,45%,#1A1F2E,55%,#0C081D)] bg-[length:200%_100%] px-6 font-medium text-neutral-400 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-50'>
                    {item}
                  </span>
                ))}
                <span className='lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-purple-900'></span>
              </div>
              <div className='flex flex-col gap-3 md:gap-3 lg:gap-8 overflow-scroll'>
                <span className='lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-purple-900'></span>
                {rightStackList.map((item, i) => (
                  <span
                    key={`${item}-${i}`}
                    className='inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-neutral-800 bg-[linear-gradient(110deg,#0C081D,45%,#1A1F2E,55%,#0C081D)] bg-[length:200%_100%] px-6 font-medium text-neutral-400 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-50'>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className={'mt-5 relative'}>
              <div className={`absolute -bottom-5 right-0 block`}>
                <Lottie
                  options={confettiOptions}
                  height={200}
                  width={400}
                />
              </div>
              <MagicButton
                title={copied ? 'You Got It!' : 'Grab My Email'}
                icon={<IoCopyOutline />}
                position='left'
                otherClasses='bg-purple-900'
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
        x
      </div>
    </div>
  );
};
