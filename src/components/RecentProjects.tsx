'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import PinContainer from './ui/3d-pin';
import { projectItems } from '@/data';
import emblem from '../../public/emblem.svg';

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
			<ul className='mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-6 p-4'>
				{projects.map((project) => (
					<li
						key={project.id}
						className='flex h-[32rem] w-full max-w-md items-center justify-center sm:h-[41rem] lg:w-96'>
						<PinContainer
							title={project.link}
							href={project.link}>
							<div className='relative mb-10 flex h-[30vh] w-full items-center justify-center overflow-hidden sm:h-[20vh] lg:rounded-3xl'>
								<div className='relative h-full w-full overflow-hidden bg-[linear-gradient(110deg,#0C081D,45%,#1A1F2E,55%,#0C081D)] bg-[length:200%_100%]'>
									<Image
										src='/bg.png'
										alt='Background Image'
										width={400}
										height={400}
										className='object-cover'
									/>
								</div>
								<Image
									src={project.img}
									alt={project.title}
									className='absolute bottom-0 z-10 h-full w-fit rotate-3'
									width={384}
									height={384}
								/>
							</div>
							<h2 className='line-clamp-1 text-base font-semibold text-neutral-50 lg:text-xl'>
								{project.title}
							</h2>
							<p
								className='line-clamp-3 text-sm font-light text-neutral-400 lg:text-xl lg:font-normal'
								style={{
									margin: '1vh 0',
								}}>
								{project.des}
							</p>
							<div className='mt-7 mb-3 flex items-center justify-between'>
								<ul className='flex items-center'>
									{project.icons.map((icon, i) => (
										<li
											key={icon}
											className='border-neutral[0.2] flex h-8 w-8 items-center justify-center rounded-full border bg-[linear-gradient(110deg,#0C081D,45%,#1A1F2E,55%,#0C081D)] transition-colors lg:h-10 lg:w-10'
											style={{
												transform: `translateX(-${5 * i * 2}px)`,
											}}>
											<Image
												src={icon}
												alt={icon}
												className='rounded-full p-2'
												width={40}
												height={40}
											/>
										</li>
									))}
								</ul>
								<div className='flex items-center justify-center gap-2'>
									<p className='text-xs text-neutral-200 lg:text-sm'>Visit</p>
									<Image
										src={emblem}
										alt='Emblem'
										className='ms-3'
										width={25}
										height={25}
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
