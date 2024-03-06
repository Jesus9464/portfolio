'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Box, Flex, Heading, Image, Center, Button, Text } from '@chakra-ui/react';

import { JesusIcon } from '@assets/images';
import { NAVIGATION } from '@common/constants';
import Link from 'next/link';

const DesktopMenu = () => {
	const router = useRouter();
	return (
		<Flex
			direction="column"
			py="4"
			px="2"
			color="white"
			height="100vh"
			width="290px"
			background="#212121"
			_hover={{ bg: '#313131' }}
			boxShadow="9px -1px 35px 0px rgba(74, 73, 74, 1)">
			<Box mb="4">
				<Link href="/">
					<Center>
						<Heading as="h1" size="lg">
							<Image borderRadius="full" boxSize="150px" width="100" src={JesusIcon.src} alt="Jesus image" />
						</Heading>
					</Center>
				</Link>
				<Text textAlign="center" fontSize="20">
					Jesus Galvis
				</Text>
			</Box>
			<Box>
				{NAVIGATION.map(({ label, route }, index) => (
					<Button
						onClick={() => router.push(route)}
						key={index}
						fontSize="lg"
						mt="5"
						width="100%"
						boxShadow="2xl"
						background="#d1d1d1"
						fontWeight="bold"
						color="#000000"
						_hover={{ color: 'black', background: '#f6f6f6' }}>
						{label}
					</Button>
				))}
			</Box>
		</Flex>
	);
};

export default DesktopMenu;
