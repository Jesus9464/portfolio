import { Box, Text, Center } from '@chakra-ui/react';

import { BackGroundAnimated } from '@components/index';

import { JesusIcon } from '@assets/index';

export default function Home() {
	return (
		<BackGroundAnimated>
			<Center>
				<Box w="50%" position="relative">
					<img
						src={JesusIcon.src}
						alt="jesus-image"
						style={{
							width: 'auto',
							height: 'auto',
							filter: 'blur(5px) grayscale(50%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.7))',
							opacity: '0.4',
						}}
					/>
				</Box>
				<Text color="white" position="absolute" transform="translateX(-50%)">
					Hi, I'm Jesus Galvis
				</Text>
			</Center>
		</BackGroundAnimated>
	);
}
