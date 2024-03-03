'use client';
import React, { useState, useEffect } from 'react';
import { Text, TextProps } from '@chakra-ui/react';

interface TextAnimatedProps extends TextProps {
	fullText: string;
}

const TextAnimated = ({ fullText, ...rest }: TextAnimatedProps) => {
	const [typedText, setTypedText] = useState('');
	const [showCursor, setShowCursor] = useState(true);
	const [writingComplete, setWritingComplete] = useState(false);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTypedText((prevText) => {
				const nextChar = fullText[prevText.length];
				if (nextChar) {
					return prevText + nextChar;
				} else {
					setWritingComplete(true);
					return prevText;
				}
			});
		}, 170);

		return () => clearInterval(intervalId);
	}, [writingComplete]);

	useEffect(() => {
		const resetIntervalId = setTimeout(() => {
			setTypedText('');
			setWritingComplete(false);
		}, 5000);

		return () => clearTimeout(resetIntervalId);
	}, [typedText]);

	useEffect(() => {
		const cursorIntervalId = setInterval(() => {
			setShowCursor((prev) => !prev);
		}, 800);

		return () => clearInterval(cursorIntervalId);
	}, []);

	return (
		<Text {...rest}>
			{typedText}
			<Text display="inline" color="red" fontWeight="bold">
				{showCursor && '|'}
			</Text>
		</Text>
	);
};

export default TextAnimated;
