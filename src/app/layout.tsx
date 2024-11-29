import type { Metadata } from 'next';
import { Red_Hat_Text, Red_Hat_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './provider';

const redHat = Red_Hat_Text({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-red',
});

const redHatMono = Red_Hat_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-red-mono',
});

export const metadata: Metadata = {
  title: "Anthony Merino's Profile",
  description: 'Home of 303Dev Projects',
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
      suppressHydrationWarning>
      <body className={redHat.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
