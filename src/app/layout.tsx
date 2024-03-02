import { ChakraProvider } from '@common/chakra/ChakraProvider';

import 'normalize.css';
import '@styles/globals.css';

import type { Metadata } from 'next';
import { fonts } from '@common/chakra';

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
			<body>
				<ChakraProvider>{children}</ChakraProvider>
			</body>
		</html>
	);
}
