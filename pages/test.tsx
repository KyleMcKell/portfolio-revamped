import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

const Text: NextPage = () => {
	return (
		<Wrapper>
			<Head>
				<title>Test Page</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header>
				<NiftyText>Heya</NiftyText>, I&apos;m Kyle
			</Header>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.backgroundColor};
	width: 100%;
	height: 100%;
	min-height: 100vh;
`;

const Header = styled.h1``;

const NiftyText = styled.span`
	font-family: ${({ theme }) => theme.typography.fontFamilyNifty};
	font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
`;

export default Text;