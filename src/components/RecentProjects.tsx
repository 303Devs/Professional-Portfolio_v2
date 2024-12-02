'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { projectItems } from '@/data';
import dynamic from 'next/dynamic'; // Ensure dynamic import for browser-specific components
import { FaLocationArrow } from 'react-icons/fa';

// Dynamically import PinContainer with SSR disabled
const PinContainer = dynamic(() => import('./ui/3d-pin'), { ssr: false });

// Assuming dynamic data or browser-dependent features
const RecentProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isClient, setIsClient] = useState(false);

  //Ensure hydration compatibility for browser-specific logic
  useEffect(() => {
    setIsClient(true); // Mark as client-rendered
    setProjects(projectItems);
  }, []);

  // Placeholder for SSR: return a loading state or static fallback content
  if (!isClient) {
    return <div>Loading recent projects...</div>;
  }

  return (
    <section
      id='projects'
      className='py-20'>
      <h1 className='heading'>
        A Selection of <span className='text-purple-100'>Recent Projects</span>
      </h1>
      <ul className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-10 mt-10'>
        {projects.map((project) => (
          <li
            key={project.id}
            className='lg:min-h-[32.5rem] h-[32rem] w-[80vw] flex items-center justify-center sm:w-96 sm:h-[41rem]'>
            <PinContainer
              title={project.link}
              href={project.link}>
              <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                  <Image
                    src='/bg.png'
                    alt='bg-img'
                    width={200}
                    height={200}
                  />
                </div>
                <Image
                  src={project.img}
                  alt={project.title}
                  className='z-10 absolute bottom-0'
                  width={384}
                  height={384}
                />
              </div>
              <h2 className='font-semibold lg:text-xl text-base line-clamp-1'>
                {project.title}
              </h2>
              <p
                className='className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2'
                style={{
                  color: '#BEC1DD',
                  margin: '1vh 0',
                }}>
                {project.des}
              </p>
              <div className='flex items-center justify-between mt-7 mb-3'>
                <ul className='flex items-center'>
                  {project.icons.map((icon, i) => (
                    <li
                      key={icon}
                      className='border border-neutral[0.2] rounded-full bg-[linear-gradient(110deg,#0C081D,45%,#1A1F2E,55%,#0C081D)] bg-[length:200%_100%] lg:w-10 lg:h-10 sm:w-8 sm:h-8 flex justify-center items-center transition-colors'
                      style={{
                        transform: `translateX(-${5 * i * 2}px)`,
                      }}>
                      <Image
                        src={icon}
                        alt={icon}
                        className='p-2'
                        width={40}
                        height={40}
                      />
                    </li>
                  ))}
                </ul>
                <div className='flex justify-center items-center bg-red'>
                  <p className='flex lg:text-base text-sm'>Check Live Site</p>
                  <FaLocationArrow
                    className='ms-3'
                    color='#CBACF9'
                  />
                </div>
              </div>
            </PinContainer>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecentProjects;
