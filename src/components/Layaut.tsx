import { Box, Stack, useBreakpointValue, Heading } from '@chakra-ui/react';
import DesktopMenu from './DesktopMenu';

interface IProps {
	children: React.ReactNode;
	title?: string;
}

export function Layout({ children, title }: IProps) {
	const isDesktop = useBreakpointValue(
		{
			base: false,
			lg: true,
		},
		{
			fallback: 'sm',
		},
	);

	const direction = isDesktop ? 'row' : 'column';

	return (
		<Stack spacing={3} direction={direction} height="100vh">
			{isDesktop ? <DesktopMenu /> : <></>}
			<Box overflowY="scroll" width="100%" as="main" py={[2, 2, 2, 6]} px={[2, 2, 2, 5]}>
				{title && <Heading>{title}</Heading>}
				<Box mt={4}>{children}</Box>
			</Box>
		</Stack>
	);
}
