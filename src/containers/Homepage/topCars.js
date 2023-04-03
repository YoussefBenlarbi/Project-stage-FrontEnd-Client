import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Car } from '../../components/car';
import Carousel,{Dots, slidesToShowPlugin} from '@brainhubeu/react-carousel';
const TopCarsContainer = styled.div`
	${tw`
        max-w-screen-lg
        w-full
        flex 
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pl-0
        md:pr-0
        mb-10
    `};
`;
const Title = styled.h2`
	${tw`
    text-2xl
    font-bold
    lg:text-4xl
    text-black
    md:font-extrabold
`};
`;
const CarsContainer = styled.div`
	${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10
    `};
`;
export function TopCars() {
	const testCar = {
		name: 'Audi S3 Car',
		mileage: '10k',
		thumbnailSrc:
			'https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg',
		dailyPrice: 70,
		monthlyPrice: 1600,
		gearType: 'Auto',
		gas: 'Petrol',
	};

	const testCar2 = {
		name: 'HONDA cITY 5 Seater Car',
		mileage: '20k',
		thumbnailSrc:
			'https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg',
		dailyPrice: 50,
		monthlyPrice: 1500,
		gearType: 'Auto',
		gas: 'Petrol',
	};
	return (
		<TopCarsContainer>
			<Title>Explore our Top Deals</Title>
			<CarsContainer>
				<Car {...testCar}/>
				<Car {...testCar2}/>
				<Car {...testCar}/>
			</CarsContainer>
		</TopCarsContainer>
	);
}
