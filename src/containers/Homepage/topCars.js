import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Car } from '../../components/car';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../components/responsive';
const getConfigurableProps = () => ({
	showArrows: true,
	showStatus: true,
	showIndicators: true,
	infiniteLoop: true,
	showThumbs: true,
	useKeyboardArrows: true,
	autoPlay: true,
	stopOnHover: true,
	swipeable: true,
	dynamicHeight: true,
	emulateTouch: true,
	autoFocus: false,
	thumbWidth: 100,
	selectedItem: 0,
	interval: 2000,
	transitionTime: 500,
	swipeScrollTolerance: 5,
	ariaLabel: '',
});
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
    items-center
    justify-center
    items-center
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
	// const cars = [
	// 	<Car {...testCar} />,
	// 	<Car {...testCar2} />,
	// 	<Car {...testCar} />,
	// 	<Car {...testCar2} />,
	// 	<Car {...testCar} />,
	// 	<Car {...testCar} />,
	// ];
	// const NumberOfDots = isMobile ? cars.length : parseInt(cars.length / 2 + 1);
	return (
		<TopCarsContainer>
			<Title>Explore our Top Deals</Title>
			<CarsContainer>
				<Carousel
					width={990}
					centerMode
					centerSlidePercentage={35}
					useKeyboardArrows={true}
				>
					<Car {...testCar} />
					<Car {...testCar2} />
					<Car {...testCar} />
					<Car {...testCar2} />
					<Car {...testCar} />
					<Car {...testCar} />
					
				</Carousel>
			</CarsContainer>
		</TopCarsContainer>
	);
}
