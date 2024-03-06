import { Card, CardBody, CardHeader, Center, Heading, Text } from '@chakra-ui/react';

const About = () => {
	return (
		<Center height="100vh" width="80%">
			<Card align="center" width="60%" background="#d1d1d1" boxShadow="3px 7px 58px 10px rgba(145,145,145,1)">
				<CardHeader>
					<Heading size="lg" color="#000000">
						Between Lines and Code
					</Heading>
				</CardHeader>
				<CardBody>
					<Text color="#4f4f4f" fontSize="18" letterSpacing={2} fontWeight="600">
						As a seasoned software developer with four years of experience, I've spent three years honing my skills in crafting
						dynamic web applications using React. Additionally, I bring three years of specialization in React Native for mobile
						development. Proficient in Redux, I navigate the intricacies of state management seamlessly. Beyond code, I venture
						into the realm of design using tools like Figma.
						<br />
						<br />
						In this ever-evolving landscape, my commitment goes beyond routine; I actively seek out challenges, constantly pushing
						my skills and creativity. Let's embark on a journey where innovation and code converge, creating not just pages but
						digital experiences that captivate and inspire.
					</Text>
				</CardBody>
			</Card>
		</Center>
	);
};

export default About;
