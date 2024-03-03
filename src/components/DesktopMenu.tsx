import React from 'react';
import { Box, Flex, Heading, Link, Image, Center } from '@chakra-ui/react';

import { JesusIcon } from '@assets/images';

const DesktopMenu = () => {
	return (
		<Flex direction="column" p="4" color="white" height="100vh" width="250px" bg="rgba(0, 0, 0, 0.3)">
			<Box mb="4">
				<Center>
					<Heading as="h1" size="md">
						<Image borderRadius="full" boxSize="150px" src={JesusIcon.src} alt="Jesus image" />
					</Heading>
				</Center>
			</Box>
			<Box>
				<Link marginBottom={20} href="#" fontSize="lg">
					Inicio
				</Link>
				<Link mb={10} href="#" fontSize="lg">
					Acerca de
				</Link>
				<Link mb="2" href="#" fontSize="lg">
					Servicios
				</Link>
				<Link mb="2" href="#" fontSize="lg">
					Contacto
				</Link>
			</Box>
		</Flex>
	);
};

export default DesktopMenu;
