import 'normalize.css';
import { ChakraProvider } from '@chakra-ui/react';

import { BackGround } from '@components/index';

import '@styles/globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Jesus Galvis',
	description:
		'Explore a portfolio crafted with care, showcasing projects and experiences. Powered by Create Next App for a seamless and efficient development experience.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet" />
			</head>
			<body>
				<ChakraProvider>{children}</ChakraProvider>
				<BackGround />
			</body>
		</html>
	);
}
