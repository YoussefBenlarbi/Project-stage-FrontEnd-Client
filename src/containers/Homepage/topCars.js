import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Car } from '../../components/car';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../components/responsive';
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
	const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

	const [current, setCurrent] = useState(0);
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
		name: 'HONDA City 5 Seater Car',
		mileage: '20k',
		thumbnailSrc:
			'https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg',
		dailyPrice: 50,
		monthlyPrice: 1500,
		gearType: 'Auto',
		gas: 'Petrol',
	};
	const cars = [
		<Car {...testCar} />,
		<Car {...testCar2} />,
		<Car {...testCar} />,
		<Car {...testCar2} />,
		<Car {...testCar} />,
		<Car {...testCar} />,
	];
	const NumberOfDots = isMobile ? cars.length : parseInt((cars.length / 2)+1);
	return (
		<TopCarsContainer>
			<Title>Explore our Top Deals</Title>
			<CarsContainer>
				<Carousel
					value={current}
					onChange={setCurrent}
					slides={cars}
					plugins={[
						'clicktoChange',
						{
							resolve: slidesToShowPlugin,
							options: {
								numberOfSlides: 3,
							},
						},
					]}
					breakpoints={{
						640: {
							plugins: [
								{
									resolve: slidesToShowPlugin,
									options: {
										numberOfSlides: 1,
									},
								},
							],
						},
						900: {
							plugins: [
								{
									resolve: slidesToShowPlugin,
									options: {
										numberOfSlides: 2,
									},
								},
							],
						},
					}}
				/>
				<Dots value={current} onChange={setCurrent} number={NumberOfDots} />
			</CarsContainer>
		</TopCarsContainer>
	);
}
