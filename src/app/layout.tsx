import type { Metadata } from 'next';
import { Red_Hat_Text } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './provider';

const redHat = Red_Hat_Text({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-red',
});

export const metadata: Metadata = {
	title: '303Devs',
	description: 'A Colorado studio making tech personal.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// Add suppressHydrationWarning to <html> to prevent warnings from next-themes updates; it only affects the <html> element.
	return (
		<html
			lang='en'
			suppressHydrationWarning
			className={redHat.variable}>
			<body className='min-h-screen bg-background text-foreground'>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem={false}
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
