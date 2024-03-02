import React from 'react';

import { Box } from '@chakra-ui/react';

import '@styles/background.css';

const BackGroundAnimated = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box className="header-firefly">
			{children}
			<Box className="firefly"></Box>
			<Box className="firefly"></Box>
			<Box className="firefly"></Box>
			<Box className="firefly"></Box>
			<Box className="firefly"></Box>
			<Box className="firefly"></Box>
			<Box className="firefly"></Box>
			<Box className="firefly"></Box>
			<Box className="firefly"></Box>
			<Box className="firefly"></Box>
			<Box className="firefly"></Box>
			<Box className="firefly"></Box>
			<Box className="firefly"></Box>
			<Box className="firefly"></Box>
			<Box className="firefly"></Box>
		</Box>
	);
};

export default BackGroundAnimated;
