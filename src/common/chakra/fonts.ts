// app/fonts.ts
import { Roboto } from 'next/font/google';

const roboto = Roboto({
	weight: ['100', '300', '400', '500', '700', '900'],
	style: 'normal',
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-rubik',
});

export const fonts = {
	roboto,
};
