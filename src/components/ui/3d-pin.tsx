'use client';
import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

const PinContainer = ({
	children,
	title,
	href,
	className,
	containerClassName,
}: {
	children: React.ReactNode;
	title?: string;
	href?: string;
	className?: string;
	containerClassName?: string;
}) => {
	const [transform, setTransform] = useState(
		'translate(-50%,-50%) rotateX(0deg)'
	);

	const defaultTransform = useMemo(
		() => 'translate(-50%,-50%) rotateX(0deg) scale(1)',
		[]
	);

	const onMouseEnter = () => {
		setTransform('translate(-50%,-50%) rotateX(40deg) scale(0.8)');
	};
	const onMouseLeave = () => {
		setTransform(defaultTransform);
	};

	const Wrapper = href ? 'a' : 'div';

	return (
		<Wrapper
			className={cn(
				'group/pin relative z-50 cursor-pointer',
				containerClassName
			)}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			{...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}>
			<div
				style={{ perspective: '1000px' }}
				className='absolute top-1/2 left-1/2 mt-4 ml-[0.09375rem] -translate-x-1/2 -translate-y-1/2'>
				<div
					style={{ transform }}
					className='w-content absolute top-1/2 left-1/2 flex items-start justify-start overflow-hidden rounded-2xl border border-white/[0.1] p-4 shadow-[0_8px_16px_rgb(0_0_0/0.4)] transition duration-700 group-hover/pin:border-white/[0.2]'>
					<div className={cn('relative z-50', className)}>{children}</div>
				</div>
			</div>
			<PinPerspective title={title} />
		</Wrapper>
	);
};

export default PinContainer;

export const PinPerspective = ({ title }: { title?: string }) => {
	return (
		<motion.div className='pointer-events-none z-[60] flex h-80 w-full items-center justify-center opacity-0 transition duration-500 group-hover/pin:opacity-100'>
			<div className='inset-0 -mt-7 h-full w-full flex-none'>
				<div className='absolute inset-x-0 top-0 flex justify-center'>
					<span className='relative z-20 inline-block py-0.5 text-xs font-bold text-neutral-400'>
						{title}
					</span>
				</div>

				<div
					style={{ perspective: '1000px' }}
					className='absolute top-1/2 left-1/2 mt-4 ml-[0.09375rem] -translate-x-1/2 -translate-y-1/2'>
					{[0, 2, 4].map((delay) => (
						<motion.div
							key={delay}
							initial={{
								opacity: 0,
								scale: 0,
								x: '-50%',
								y: '-50%',
							}}
							animate={{
								opacity: [0, 1, 0.5, 0],
								scale: 1,
							}}
							transition={{
								duration: 6,
								repeat: Infinity,
								delay,
							}}
							className='absolute top-1/2 left-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]'
						/>
					))}
				</div>

				<>
					<motion.div className='absolute right-1/2 bottom-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-cyan-500 blur-[2px] group-hover/pin:h-40' />
					<motion.div className='absolute right-1/2 bottom-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-cyan-500 group-hover/pin:h-40' />
					<motion.div className='absolute right-1/2 bottom-1/2 z-40 h-[4px] w-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-cyan-600 blur-[3px]' />
					<motion.div className='absolute right-1/2 bottom-1/2 z-40 h-[2px] w-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-cyan-300' />
				</>
			</div>
		</motion.div>
	);
};
