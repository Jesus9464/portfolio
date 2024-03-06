import { ChakraProvider } from '@common/chakra/ChakraProvider';
import Head from 'next/head';

import 'normalize.css';
import '@styles/globals.css';

import type { Metadata } from 'next';
import { fonts } from '@common/chakra';
import { BackGroundAnimated, DesktopMenu } from '@components/index';
import { Flex } from '@chakra-ui/react';

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
		<html lang="en" className={fonts.roboto.variable}>
			<Head>
				<meta charSet="UTF-8" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body>
				<ChakraProvider>
					<Flex>
						<DesktopMenu />
						{children}
					</Flex>
					<BackGroundAnimated />
				</ChakraProvider>
			</body>
		</html>
	);
}
