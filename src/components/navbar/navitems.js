import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive';
import menuStyle from './menuStyle';
import PropTypes from 'prop-types';
const ListContainer = styled.div`
	${tw`
    flex
    list-none
    `}
`;
const NavItem = styled.li`
	${tw`
        text-sm
        md:text-base
        text-black
        font-medium
        mr-1
        sm:m-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-700
    `};
	${({ menu }) =>
		menu &&
		css`
			${tw`
                text-white
                text-xl
                mb-3
                focus:text-white
            `}
		`}
`;

NavItem.propTypes = {
	menu: PropTypes.any,
};
export function NavItems() {
	const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
	if (isMobile) {
		return (
			<Menu right styles={menuStyle}>
				<ListContainer>
					<NavItem menu>
						<a href="#">Home</a>
					</NavItem>
					<NavItem menu>
						<a href="#">Cars</a>
					</NavItem>
					<NavItem menu>
						<a href="#">Services</a>
					</NavItem>
					<NavItem menu>
						<a href="#">Contact-us</a>
					</NavItem>
				</ListContainer>
			</Menu>
		);
	}
	return (
		<ListContainer>
			<NavItem>
				<a href="#">Home</a>
			</NavItem>
			<NavItem>
				<a href="#">Cars</a>
			</NavItem>
			<NavItem>
				<a href="#">Services</a>
			</NavItem>
			<NavItem>
				<a href="#">Contact-us</a>
			</NavItem>
		</ListContainer>
	);
}
