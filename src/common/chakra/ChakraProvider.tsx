'use client';

import { ChakraProvider as ChakraLayaut } from '@chakra-ui/react';

export const ChakraProvider = ({ children }: { children: React.ReactNode }) => {
	return <ChakraLayaut>{children}</ChakraLayaut>;
};
