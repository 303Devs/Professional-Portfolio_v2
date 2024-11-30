'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
// import { GridGlobe } from '@/components/ui';
import Image from 'next/image';
import Lottie from 'react-lottie';
import animationData from '@/data/confetti.json';
import {
  BackgroundGradientAnimation,
  GlowingStarsBackgroundCard,
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
        'row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]',
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
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
        {id === 4 && <GlowingStarsBackgroundCard className='absolute z-10' />}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className='absolute z-50 inset-0 flex items-center justify-center text-white font-bold lg:font-semibold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-6xl'></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
          )}>
          <div className='font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 md:max-w-32'>
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
                    className='py-2 px-3 text-xs lg:text-base opacity-50
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]'>
                    {item}
                  </span>
                ))}
                <span className='lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]'></span>
              </div>
              <div className='flex flex-col gap-3 md:gap-3 lg:gap-8 overflow-scroll'>
                <span className='lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]'></span>
                {rightStackList.map((item, i) => (
                  <span
                    key={`${item}-${i}`}
                    className='py-2 px-3 text-xs lg:text-base opacity-50
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]'>
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
                otherClasses='!bg-[#161a31]'
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
