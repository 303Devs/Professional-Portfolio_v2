'use client';

import React, { useEffect, useState } from 'react';
import {
	useMotionValue,
	useMotionTemplate,
	motion,
	MotionValue,
} from 'motion/react';
import { cn } from '@/lib/utils';

export const EvervaultCard = ({
	text,
	className,
}: {
	text?: string;
	className?: string;
}) => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const [randomString, setRandomString] = useState('');

	useEffect(() => {
		setRandomString(generateRandomString(1500));
	}, []);

	function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
		const { left, top } = e.currentTarget.getBoundingClientRect();
		mouseX.set(e.clientX - left);
		mouseY.set(e.clientY - top);

		setRandomString(generateRandomString(1500));
	}

	return (
		<div
			className={cn(
				'relative flex aspect-square h-full w-full items-center justify-center bg-transparent p-0.5',
				className
			)}>
			<div
				onMouseMove={onMouseMove}
				className='group/card relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-transparent'>
				<CardPattern
					mouseX={mouseX}
					mouseY={mouseY}
					randomString={randomString}
				/>
				<div className='relative z-10 flex items-center justify-center'>
					<div className='relative flex h-44 w-44 items-center justify-center rounded-full text-4xl font-bold text-white'>
						<span className='z-20 text-black dark:text-white'>{text}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

interface CardPatternProps {
	mouseX: MotionValue<number>;
	mouseY: MotionValue<number>;
	randomString: string;
}

function CardPattern({ mouseX, mouseY, randomString }: CardPatternProps) {
	const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
	const style = { maskImage, WebkitMaskImage: maskImage };

	return (
		<div className='pointer-events-none'>
			<div className='absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50' />
			<motion.div
				className='absolute inset-0 rounded-2xl bg-gradient-to-r from-[#9300F3] to-white opacity-0 backdrop-blur-xl transition duration-500 group-hover/card:opacity-100'
				style={style}
			/>
			<motion.div
				className='absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100'
				style={style}>
				<p className='absolute inset-x-0 h-full font-mono text-xs font-bold break-words whitespace-pre-wrap text-white transition duration-500'>
					{randomString}
				</p>
			</motion.div>
		</div>
	);
}

const characters =
	'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export const generateRandomString = (length: number): string => {
	let result = '';
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
};
