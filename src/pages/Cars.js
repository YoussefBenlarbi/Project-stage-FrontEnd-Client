import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import AuthUser from '../PrivateRoute/AuthUser';
import { Car } from '../components/car';
const BodyContainer = styled.div`
	${tw`
		w-full bg-neutral-100 
	`};
`;
const FilterConatiner = styled.div`
	${tw`
	w-full p-2
	`};
`;
const Span = styled.span`
	${tw`
	text-sm md:text-base text-gray-700 md:ml-10
	`};
`;
const Input = styled.input`
	${tw`
	text-sm md:text-base
	p-1 ml-1 text-gray-700 focus:border-blue-500 focus:outline-none border rounded-lg focus:border-2

	`};
`;
const CarsContainer = styled.div`
	${tw`
	w-full p-2 flex-col flex
	`};
`;
const Title = styled.div`
	${tw`
	text-gray-900  text-center font-semibold text-2xl
`};
`;
const CardContainer = styled.div`
	${tw`
w-full p-2 flex flex-wrap justify-center gap-3
`};
`;

function Cars() {
	const [cars, setCars] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const { http } = AuthUser();
	const getCars = async () => {
		const apiCars = await http.get('/carsInfo');
		setCars(
			apiCars.data.filter((car) =>
				car.name.toLowerCase().includes(searchTerm.toLowerCase())
			)
		);
	};
	useEffect(() => {
		getCars();
	}, [searchTerm]);
	console.log(cars);
	return (
		<BodyContainer>
			<FilterConatiner>
				<Span>Search </Span>
				<Input
					placeholder="Search..."
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</FilterConatiner>
			<CarsContainer>
				<Title>Listes des Voitures :</Title>
				<CardContainer>
					{cars &&
						cars.map((car) => (
							<Car
								key={car.id}
								id={car.id}
								name={car.name}
								mileage={car.mileage}
								thumbnailUrl={car.thumbnailUrl}
								dailyPrice={car.dailyPrice}
								monthlyPrice={car.monthlyPrice}
								gearType={car.gearType}
								gasType={car.gasType}
							/>
						))}
				</CardContainer>
			</CarsContainer>
		</BodyContainer>
	);
}

export default Cars;
