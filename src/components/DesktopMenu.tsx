'use client';
import React from 'react';
import { Box, Flex, Heading, Image, Center, Button, Text } from '@chakra-ui/react';

import { JesusIcon } from '@assets/images';
import { NAVIGATION } from '@common/constants';

const DesktopMenu = () => {
	return (
		<Flex
			direction="column"
			py="4"
			px="2"
			color="white"
			height="100vh"
			width="350px"
			background="#212121"
			_hover={{ bg: '#313131' }}
			boxShadow="9px -1px 35px 0px rgba(74, 73, 74, 1)">
			<Box mb="4">
				<Center>
					<Heading as="h1" size="lg">
						<Image borderRadius="full" boxSize="150px" width="100" src={JesusIcon.src} alt="Jesus image" />
					</Heading>
				</Center>
				<Text textAlign="center" fontSize="20">
					Jesus Alfonso Galvis Gualy
				</Text>
			</Box>
			<Box>
				{NAVIGATION.map(({ label, route }, index) => (
					<Button
						onClick={() => console.log(route)}
						key={index}
						fontSize="lg"
						mt="5"
						width="100%"
						boxShadow="2xl"
						background="#4f4f4f"
						fontWeight="bold"
						color="#b0b0b0"
						_hover={{ color: 'black', background: '#f6f6f6' }}>
						{label}
					</Button>
				))}
			</Box>
		</Flex>
	);
};

export default DesktopMenu;
