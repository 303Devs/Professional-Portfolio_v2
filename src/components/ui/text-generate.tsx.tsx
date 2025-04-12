'use client';

import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'motion/react';
import { cn } from '@/lib/utils';

export const TextGenerate = ({
	words,
	className,
}: {
	words: string;
	className?: string;
}) => {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		const spans = scope.current?.querySelectorAll('span');
		if (!spans) return;

		animate(
			spans,
			{ opacity: 1, scale: 1 },
			{
				duration: 0.6,
				delay: stagger(0.1),
				ease: 'easeOut', // ✅ Correct value for @motion.dev/react
			}
		);
	}, [animate, scope]);

	const renderWords = () => {
		const lines = words.split('\n');

		return (
			<motion.div ref={scope}>
				{lines.map((line, lineIdx) => (
					<div
						key={lineIdx}
						className='inline-block w-full'>
						{line.split(' ').map((word, wordIdx) => {
							const globalIdx = lineIdx * 10 + wordIdx;
							const isHighlighted = globalIdx % 5.5 === 0;

							return (
								<motion.span
									key={`${word}-${lineIdx}-${wordIdx}`}
									className={cn(
										'mr-[0.25em] inline-block opacity-0',
										isHighlighted ?
											'text-[color:var(--color-purple-main,#9300F3)]'
										:	'text-foreground'
									)}
									style={{
										transform: 'scale(0.95)',
										transformOrigin: 'bottom center',
									}}>
									{word}
								</motion.span>
							);
						})}
					</div>
				))}
			</motion.div>
		);
	};

	return (
		<div
			className={cn('text-2xl font-bold sm:text-3xl md:text-4xl', className)}>
			<div className='leading-snug tracking-wide'>{renderWords()}</div>
		</div>
	);
};
