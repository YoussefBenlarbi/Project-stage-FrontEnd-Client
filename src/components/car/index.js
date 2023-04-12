import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEllipsis,
	faFillDrip,
	faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// thumbnailSrc: string;
// name: string;
// mileage: string;
// gearType: string;
// dailyPrice: e-ing;
// monthlyPrice: string;
// gas: string;

const CarContainer = styled.div`
	width: 16.5em;
	min-height: 24em;
	max-height: 24em;
	box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);

	${tw`
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-1
    sm:m-3
    md:m-6
  `};
`;

const CarThumbnail = styled.div`
	width: 100%;
	height: auto;

	img {
		width: 100%;
		height: 100%;
	}
`;

const CarName = styled.h3`
	${tw`
    text-base
    font-bold
    text-black
    mt-1
    mb-1
  `};
`;

const PricesContainer = styled.div`
	${tw`
    w-full
    flex
    justify-start
    mt-3
  `};
`;

const SmallText = styled.p`
	color: inherit;
	${tw`
    inline-flex
    text-xs
    font-thin
  `};
`;

const DailyPrice = styled.h5`
	${tw`
    text-red-500
    font-bold
    text-sm
    mr-3
  `};
`;

const MonthlyPrice = styled.h5`
	${tw`
    text-gray-500
    font-bold
    text-sm
  `};
`;

const SmallIcon = styled.span`
	${tw`
    text-gray-400
    text-sm
    mr-1
  `};
`;

const CarDetailsContainer = styled.div`
	${tw`
    flex
    w-full
    justify-between
  `};
`;

const CarDetail = styled.span`
	${tw`
    flex
    items-center
  `};
`;

const CarInfo = styled.h6`
	${tw`
    text-gray-400
    text-xs
  `};
`;

const Seperator = styled.div`
	min-width: 100%;
	min-height: 1px;
	${tw`
    flex
    bg-gray-300
    mt-2
    mb-2
  `};
`;

const RentButton = styled.button`
	${tw`
    min-w-full
    mt-7
    pl-5
    pr-5
    pt-3
    pb-3
    outline-none
    rounded-md
    text-white
    text-xs
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
    bg-red-500
    hover:bg-transparent
    hover:text-red-500
    hover:border-red-500
    `}
`;
export function Car(props) {
	const {
		id,
		name,
		thumbnailUrl,
		dailyPrice,
		monthlyPrice,
		mileage,
		gearType,
		gasType,
	} = props;

	return (
		<CarContainer>
			<CarThumbnail>
				<img src={thumbnailUrl} />
			</CarThumbnail>
			<CarName>{name}</CarName>
			<PricesContainer>
				<DailyPrice>
					${dailyPrice}
					<SmallText>/Day</SmallText>
				</DailyPrice>
				<MonthlyPrice>
					${monthlyPrice}
					<SmallText>/Month</SmallText>
				</MonthlyPrice>
			</PricesContainer>
			<Seperator />
			<CarDetailsContainer>
				<CarDetail>
					<SmallIcon>
						<FontAwesomeIcon icon={faTachometerAlt} />
					</SmallIcon>
					<CarInfo>{mileage}</CarInfo>
				</CarDetail>
				<CarDetail>
					<SmallIcon>
						<FontAwesomeIcon icon={faEllipsis} />
					</SmallIcon>
					<CarInfo>{gearType}</CarInfo>
				</CarDetail>
				<CarDetail>
					<SmallIcon>
						<FontAwesomeIcon icon={faFillDrip} />
					</SmallIcon>
					<CarInfo>{gasType}</CarInfo>
				</CarDetail>
			</CarDetailsContainer>
			<Link to={'/book-car'} state={{ id: id }}>
				<RentButton>Rent Now</RentButton>
			</Link>
		</CarContainer>
	);
}
