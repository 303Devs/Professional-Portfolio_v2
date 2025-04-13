'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IoCopyOutline } from 'react-icons/io5';

import { cn } from '@/lib/utils';
import MagicButton from './magic-button';
import { GlowingStars } from './glowing-stars';
import { EvervaultCard } from './evervault-card';
import { BackgroundGradient } from './gradient-bg';
import { BackgroundBeams } from './beams-bg';
import { mapDots } from '@/data';
import { WorldMap } from './world-map';
import Confetti from './confetti-client';

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => (
	<div
		className={cn(
			'md:grid-row-7 mx-auto grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-5 lg:gap-8',
			className
		)}>
		{children}
	</div>
);

interface BentoGridItemProps {
	id: number;
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	img?: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImg?: string;
}

export const BentoGridItem = ({
	id,
	className,
	title,
	description,
	img,
	imgClassName,
	titleClassName,
	spareImg,
}: BentoGridItemProps) => {
	const [copied, setCopied] = useState(false);

	const leftStackList = ['Development', 'DevOps', 'Web3'];
	const rightStackList = ['Architecture', 'Consulting', 'Design'];

	const handleCopy = () => {
		navigator.clipboard.writeText('anthony@303devs.com');
		setCopied(true);
	};

	return (
		<div
			className={cn(
				'group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-border shadow transition duration-200 hover:shadow-xl dark:shadow-none',
				'bg-[linear-gradient(145deg,#f4f4f7,#e3e3ee)] text-foreground dark:bg-[linear-gradient(145deg,#0C081D,#1A1F2E)]',
				className
			)}>
			<div className={cn({ 'flex justify-center': id === 6 }, 'h-full')}>
				{img && (
					<div className='absolute inset-0'>
						<Image
							src={img}
							alt='Bento background'
							fill
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							className={cn(imgClassName, 'object-cover object-center')}
						/>
					</div>
				)}

				{spareImg && id === 5 && (
					<Image
						src={spareImg}
						alt='Bento spare'
						width={160}
						height={160}
						className='absolute right-2 bottom-2 h-40 w-40 object-contain opacity-70'
					/>
				)}

				{id === 2 && <WorldMap dots={mapDots} />}
				{id === 3 && <EvervaultCard className='absolute' />}
				{id === 4 && <GlowingStars className='absolute z-10' />}
				{id === 5 && (
					<BackgroundBeams className='absolute max-h-full bg-transparent'>
						{null}
					</BackgroundBeams>
				)}
				{id === 6 && (
					<BackgroundGradient>
						<div className='pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-4 text-center text-3xl font-bold md:text-4xl lg:text-6xl lg:font-semibold' />
					</BackgroundGradient>
				)}

				<div
					className={cn(
						titleClassName,
						'relative flex min-h-40 flex-col p-5 transition duration-200 group-hover/bento:translate-x-2 md:p-6 lg:p-10'
					)}>
					{description && (
						<div
							className={cn(
								'z-10 font-sans text-base font-light md:max-w-32 lg:text-lg',
								id === 6 || id === 1 ?
									'text-white drop-shadow-sm'
								:	'text-foreground'
							)}>
							{description}
						</div>
					)}

					{title && (
						<div
							className={cn(
								'z-10 max-w-96 font-sans text-2xl font-bold tracking-tight lg:text-4xl lg:font-semibold',
								id === 6 || id === 1 ?
									'text-white drop-shadow-md'
								:	'text-foreground'
							)}>
							{title}
						</div>
					)}

					{id === 3 && (
						<div
							aria-label='Technology stack'
							className='absolute -right-3 flex w-fit gap-1 lg:-right-2 lg:gap-4'>
							<div className='flex flex-col gap-3 lg:gap-7'>
								{leftStackList.map((item, i) => (
									<span
										key={i}
										className='inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-border bg-[linear-gradient(110deg,#F1F2F6,45%,#E0E3F1,55%,#F1F2F6)] bg-[length:200%_100%] px-6 font-medium text-foreground transition-colors focus:ring-2 focus:ring-muted-foreground focus:ring-offset-2 focus:ring-offset-background dark:bg-[linear-gradient(110deg,#0C081D,45%,#1A1F2E,55%,#0C081D)]'>
										{item}
									</span>
								))}
							</div>
							<div className='-mt-6 flex flex-col gap-3 sm:-mt-2 lg:-mt-10 lg:gap-7'>
								{rightStackList.map((item, i) => (
									<span
										key={`${item}-${i}`}
										className='inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-border bg-[linear-gradient(110deg,#F1F2F6,45%,#E0E3F1,55%,#F1F2F6)] bg-[length:200%_100%] px-6 font-medium text-foreground transition-colors focus:ring-2 focus:ring-muted-foreground focus:ring-offset-2 focus:ring-offset-background focus:outline-hidden dark:bg-[linear-gradient(110deg,#0C081D,45%,#1A1F2E,55%,#0C081D)]'>
										{item}
									</span>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
			{id === 6 && (
				<div className='relative z-10 mt-6 mb-10 flex justify-center'>
					<div className='absolute right-0 -bottom-5'>
						<Confetti copied={copied} />
					</div>
					<MagicButton
						title={copied ? 'You Got It!' : 'Grab Our Email'}
						icon={<IoCopyOutline />}
						position='left'
						handleClick={handleCopy}
					/>
				</div>
			)}
		</div>
	);
};
