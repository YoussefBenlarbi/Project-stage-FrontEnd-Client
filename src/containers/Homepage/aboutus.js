import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SCREENS } from '../../components/responsive';

import JeepImg from '../../assets/images/jeep.png';

const AboutUsContainer = styled.div`
	${tw`
    w-full
    flex
    flex-wrap
    md:flex-nowrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white
  `};
`;

const CarContainer = styled.div`
	width: auto;
	height: 15em;
	

	img {
		width: auto;
		height: 100%;
	}

	@media (min-width: ${SCREENS.md}) {
		height: 28em;
	}

	@media (min-width: ${SCREENS.lg}) {
		height: 30em;
		padding-left: 3em;
	}

	@media (min-width: ${SCREENS['2xl']}) {
		height: 35em;
		margin-left: 0;
	}
`;

const InfoContainer = styled.div`
	${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    xl:ml-16
  `};
  @media (min-width: ${SCREENS.lg}) {
    
    padding-right: 3em;
}
`;

const Title = styled.h1`
	${tw`
    text-black
    text-2xl
    md:text-3xl
    font-extrabold
    md:font-black
    md:leading-normal
  `};
`;

const InfoText = styled.p`
	${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `};
`;

export function AboutUs() {
	return (
		<AboutUsContainer>
			<CarContainer>
				<img src={JeepImg} />
			</CarContainer>
			<InfoContainer>
				<Title>Feel The Best Experience With Our Rental Deals</Title>
				<InfoText>
					Our dealership is dedicated to providing the best car rental
					experience for our customers. We offer a wide selection of
					high-quality cars at competitive prices, and our easy 3-step booking
					process makes it simple to find and reserve the perfect vehicle for
					your needs. Whether you’re looking for a car to rent locally or
					remotely, we have you covered. Our goal is to ensure that every
					customer has a smooth and enjoyable rental experience with us. So come
					and book your ride today and feel the best experience with our rental
					deals!
				</InfoText>
			</InfoContainer>
		</AboutUsContainer>
	);
}
