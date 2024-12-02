import Spotlight from './ui/spotlight';
import VortexWrapper from './ui/vortex-wrapper';
import { TextGenerate } from './ui/text-generate.tsx';
import MagicButton from './ui/magic-button';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='pb-20 pt-36 h-screen'>
      <div>
        <Spotlight
          className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
          fill='#E0B3FF'
        />
        <Spotlight
          className='left-80 top-28 h-[80vh] w-[50vw]'
          fill='#A5E1FF'
        />
        <Spotlight
          className='h-[80vh] w-[50vw] top-10 left-full'
          fill='#62D0FF'
        />
      </div>

      <div className='h-screen w-full dark:bg-purple-900 bg-neutral-50 dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0'>
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-purple-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
      </div>
      <VortexWrapper>
        <div className='flex justify-center relative my-10 sm:my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-center max-w-80 subpixel-antialiased'>
              Crafting the Future of Web2 and Web3
            </h2>
            <TextGenerate
              className='text-center text-[40px] md:text-5xl lg:text-6xl'
              words='Inspired Solutions and Lasting Impressions.'
            />
            <p className='text-center md:tracking-wider mb-4 text-base md:text-lg lg:text-2xl'>
              Hey! I&apos;m Anthony, a Software Engineer from the Rocky
              Mountains.
            </p>

            <a href='#about'>
              <MagicButton
                title='Step Inside'
                icon={<FaLocationArrow />}
                position='right'
              />
            </a>
          </div>
        </div>
      </VortexWrapper>
    </div>
  );
};

export default Hero;
