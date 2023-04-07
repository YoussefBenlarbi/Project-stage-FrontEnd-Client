import React, { useEffect, useState } from 'react';
import AuthUser from '../../PrivateRoute/AuthUser';
import axios from 'axios';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Car } from '../../components/car';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
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
    items-center
    justify-center
    items-center
    mt-7
    md:mt-10
    `};
`;
export function TopCars() {
	const [cars, setCars] = useState([]);
	const { http } = AuthUser();
	useEffect(() => {
		const getCars = async () => {
			const apiCars = await http.get('/carsInfo');
			setCars(apiCars.data);
		};
		getCars();
	}, []);
	console.log(cars);
	// const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
	// const [current, setCurrent] = useState(0);
	// const testCar = {
	// 	name: 'Audi S3 Car',
	// 	mileage: '10k',
	// 	thumbnailUrl:
	// 		'https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg',
	// 	dailyPrice: 70,
	// 	monthlyPrice: 1600,
	// 	gearType: 'Auto',
	// 	gasType: 'Petrol',
	// };

	// const testCar2 = {
	// 	name: 'HONDA City 5 Seater Car',
	// 	mileage: '20k',
	// 	thumbnailUrl:
	// 		'https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg',
	// 	dailyPrice: 50,
	// 	monthlyPrice: 1500,
	// 	gearType: 'Auto',
	// 	gasType: 'Petrol',
	// };
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
					showArrows={false}
					showThumbs={false}
				>
					{cars.map((car) => (
						<Car
							key={car.id}
							name={car.name}
							mileage={car.mileage}
							thumbnailUrl={car.thumbnailUrl}
							dailyPrice={car.dailyPrice}
							monthlyPrice={car.monthlyPrice}
							gearType={car.gearType}
							gasType={car.gasType}
						/>
					))}
					{/* <Car {...testCar} />
					<Car {...testCar2} />
					<Car {...testCar} />
					<Car {...testCar2} />
					<Car {...testCar} />
					<Car {...testCar} /> */}
				</Carousel>
			</CarsContainer>
		</TopCarsContainer>
	);
}
