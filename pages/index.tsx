import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

const Home: NextPage = () => {
	return (
		<Wrapper>
			<Head>
				<title>Kyle McKell</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MaxWidthWrapper>
				<Heading>
					<NiftyText>Heya</NiftyText>, I&apos;m Kyle
				</Heading>
				<NormalText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius
					posuere mattis. Donec dignissim tortor vel laoreet venenatis. Fusce eu
					sem non dui dignissim fermentum in eget nunc. Pellentesque porttitor
					facilisis ultrices. Morbi sem eros, accumsan bibendum justo sit amet,
					rhoncus ullamcorper odio. Mauris in sagittis nisi. Nunc vitae quam ac
					ante convallis faucibus quis interdum ipsum. Integer tempus felis
					vitae molestie tincidunt.{' '}
					<NiftyText>
						Aenean ut laoreet leo, non lacinia augue. Quisque posuere quam eget
						interdum ultricies.
					</NiftyText>{' '}
					Donec sed viverra libero, et consequat leo. Vivamus mollis nunc vitae
					libero viverra vehicula. Proin vulputate nunc lectus, sed mollis velit
					feugiat nec. Nullam vel lectus at ex posuere viverra non mollis enim.
					Fusce efficitur, neque ac porttitor aliquam, dolor leo ultricies enim,
					ac facilisis purus dui ac sem. Sed vehicula vitae arcu vel euismod.
				</NormalText>
				<MonoText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius
					posuere mattis. Donec dignissim tortor vel laoreet venenatis. Fusce eu
					sem non dui dignissim fermentum in eget nunc. Pellentesque porttitor
					facilisis ultrices. Morbi sem eros, accumsan bibendum justo sit amet,
					rhoncus ullamcorper odio. Mauris in sagittis nisi. Nunc vitae quam ac
					ante convallis faucibus quis interdum ipsum. Integer tempus felis
					vitae molestie tincidunt. Aenean ut laoreet leo, non lacinia augue.
					Quisque posuere quam eget interdum ultricies. Donec sed viverra
					libero, et consequat leo. Vivamus mollis nunc vitae libero viverra
					vehicula. Proin vulputate nunc lectus, sed mollis velit feugiat nec.
					Nullam vel lectus at ex posuere viverra non mollis enim. Fusce
					efficitur, neque ac porttitor aliquam, dolor leo ultricies enim, ac
					facilisis purus dui ac sem. Sed vehicula vitae arcu vel euismod.
				</MonoText>
			</MaxWidthWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.backgroundColor};
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.textColor};
`;

const MaxWidthWrapper = styled.div`
	max-width: 700px;
`;

const Heading = styled.h1`
	font-weight: ${({ theme }) => theme.typography.fontWeightSemiBold};
	font-size: 2.5rem;
`;

const NormalText = styled.p`
	font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
`;

const NiftyText = styled.span`
	font-family: ${({ theme }) => theme.typography.fontFamilyNifty};
	font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
`;

const MonoText = styled.p`
	font-family: ${({ theme }) => theme.typography.fontFamilyMono};
`;

export default Home;
