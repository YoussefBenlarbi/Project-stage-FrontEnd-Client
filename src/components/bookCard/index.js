import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Marginer } from '../marginer';
import Button from '../button';

const CardContainer = styled.div`
	min-height: 4.3em;
	box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
	${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        border
        pt-1
        pb-1
        pr-2
        pl-2
        md:pt-2
        md:pb-2
        md:pl-6
        md:pr-6   
    `};
`;
const ItemContainer = styled.div`
	${tw`
        flex
    `};
`;
const Icon = styled.span`
	${tw`
        text-red-500
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3
    `};
`;

const Name = styled.span`
	${tw`
        text-gray-600
        text-xs
        md:text-sm
    `};
`;
const LineSeperator = styled.span`
	width: 2px;
	height: 45%;
	${tw`
        bg-gray-300
        mr-2
        ml-2
        md:mr-5
        md:mr-5
    `};
`;
export default function BookCard() {
	return (
		<CardContainer>
			<ItemContainer>
				<Icon>
					<FontAwesomeIcon icon={faCalendarAlt} />
				</Icon>
				<Name>Pick Up Date</Name>
			</ItemContainer>
			<LineSeperator />
			<ItemContainer>
				<Icon>
					<FontAwesomeIcon icon={faCalendarAlt} />
				</Icon>
				<Name>Return Date</Name>
			</ItemContainer>
			<Marginer direction="horizontal" margin="2em" />
			<Button text="Book Your Ride" />
		</CardContainer>
	);
}
