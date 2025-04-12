import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa';

import MagicButton from './ui/magic-button';
import { Spotlight } from './ui/Spotlight';
import { TextGenerate } from './ui/text-generate.tsx';
import { Vortex } from './ui/vortex';

import Logo from '../../public/logo-horz-trans.svg';

const SPOTLIGHTS = [
	{
		className: '-top-40 -left-10 md:-left-32 md:-top-20 h-screen',
		fill: '#9300F3',
	},
	{
		className: 'left-80 top-28 h-[80vh] w-[50vw]',
		fill: '#A5E1FF',
	},
	{
		className: 'h-[80vh] w-[50vw] top-10 left-full',
		fill: '#62D0FF',
	},
];

const Hero = () => {
	return (
		<Vortex
			backgroundColor='transparent'
			rangeY={800}
			particleCount={500}
			className='flex h-screen w-full flex-col items-center justify-center'>
			<div className='py-20'>
				{SPOTLIGHTS.map((props, i) => (
					<Spotlight
						key={i}
						{...props}
					/>
				))}

				<section className='flex justify-center py-10 md:py-14 lg:py-20 xl:py-24'>
					<div className='flex flex-col items-center justify-center text-center md:max-w-2xl lg:max-w-[60vw]'>
						<h2 className='text-xs tracking-widest text-muted-foreground uppercase'>
							Web, mobile, and software systems — built with care.
						</h2>

						<TextGenerate
							className='mt-6 heading-xl text-foreground md:mt-8'
							words={'Inspired Solutions,\nLasting Impressions.'}
						/>

						<p className='mt-6 mb-10 flex max-w-full flex-wrap items-center justify-center gap-2 text-lg font-medium tracking-wide md:mt-8 md:text-xl lg:text-2xl'>
							We’re
							<Image
								src={Logo}
								alt='303Devs - Colorado-based web, mobile, and software development studio'
								className='inline-block h-[2.25em] w-auto pb-[0.4em]'
								priority
								role='img'
							/>
							— a Colorado studio making tech personal.
						</p>

						<a
							href='#about'
							aria-label='Navigate to about section'>
							<MagicButton
								title='Step Inside'
								icon={<FaLocationArrow />}
								position='right'
							/>
						</a>
					</div>
				</section>
			</div>
		</Vortex>
	);
};

export default Hero;
