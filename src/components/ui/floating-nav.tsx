'use client';
import { useHasMounted } from '@/hooks/useHasMounted';
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
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

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
	const { theme, setTheme } = useTheme();

	const [visible, setVisible] = useState(false);

	const hasMounted = useHasMounted();

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
					'fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit min-w-fit items-center justify-center space-x-4 rounded-xl border border-border bg-background/60 px-8 py-5 text-foreground shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-lg backdrop-saturate-150',
					className
				)}>
				<Image
					src='/emblem.svg'
					alt='303Devs Logo'
					width={40}
					height={40}
					className='block bg-background/60 px-1'
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
								'relative flex items-center space-x-1 text-muted-foreground hover:text-foreground'
							)}>
							<span className='block sm:hidden'>{navItem.icon}</span>
							<span className='!cursor-pointer text-sm'>{navItem.name}</span>
						</Link>
					)
				)}
				{hasMounted && (
					<button
						onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
						className='ml-2 rounded p-1 text-muted-foreground transition hover:text-foreground'
						aria-label='Toggle theme'>
						{theme === 'light' ?
							<MoonIcon className='h-4 w-4' />
						:	<SunIcon className='h-4 w-4' />}
					</button>
				)}
			</motion.div>
		</AnimatePresence>
	);
};

export default FloatingNav;
