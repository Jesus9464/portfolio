'use client';
import Typewriter from 'typewriter-effect';
import { Box } from '@chakra-ui/react';

import '@styles/typing.css';

export default function Home() {
	return (
		<Box display="flex" justifyContent="center" alignItems="center" width="100%" flexDirection="column">
			<Typewriter
				options={{
					strings: ["Hi, I'm Jesus Galvis", 'Software Development.'],
					autoStart: true,
					loop: true,
					cursorClassName: 'cursor-typing',
					wrapperClassName: 'wrapper-typing',
					skipAddStyles: true,
				}}
			/>
		</Box>
	);
}
