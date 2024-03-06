'use client';
import Typewriter from 'typewriter-effect';
import { Center } from '@chakra-ui/react';

import '@styles/typing.css';

export default function Home() {
	return (
		<Center height="100vh" width="80%">
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
		</Center>
	);
}
