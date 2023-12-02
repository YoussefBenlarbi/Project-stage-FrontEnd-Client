import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive';
import menuStyle from './menuStyle';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ProfilIcon } from '../profilIcon';
import AuthUser from '../../PrivateRoute/AuthUser';
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
		relative
        mr-1
        sm:m-5
		flex 
		justify-center 
		items-center
        cursor-pointer
        // transition
        // duration-300
        // ease-in-out
        hover:text-gray-500
		// after:bg-gray-500
		// after:content-['']
		// after:h-[3px]
		// after:w-[0]
		// after:left-0
		// after:bottom-[-1px]
		// after:absolute 
		// after:rounded-xl
		// after:duration-300 
		
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
const IconItem = styled.li`
	${tw`
		relative
        mr-1
        sm:m-5
		flex 
		justify-center 
		items-center
        cursor-pointer
		
    `};
`;

NavItem.propTypes = {
	menu: PropTypes.any,
};
export function NavItems() {
	const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
	const { token, http } = AuthUser();
	if (isMobile) {
		return (
				<Menu right styles={menuStyle}>
					<ListContainer>
						<NavItem menu>
							<Link to="/">Home</Link>
						</NavItem>
						<NavItem menu>
							<Link to="cars">Cars</Link>
						</NavItem>
						<NavItem menu>
							<Link to="contacts">Contact us</Link>
						</NavItem>
						<NavItem menu>
							<Link to="register">Sign Up</Link>
						</NavItem>
					</ListContainer>
				</Menu>
		);
	}
	return (
		<ListContainer>
			<NavItem className="nav">
				<Link to="/">Home</Link>
			</NavItem>
			<NavItem className="nav">
				<Link to="cars">Cars</Link>
			</NavItem>
			<NavItem className="nav">
				<Link to="contacts">Contact us</Link>
			</NavItem>
			<NavItem className="nav">
				<Link to="register">Sign Up</Link>
			</NavItem>
			{token ? (
				<IconItem className="nav">
					<ProfilIcon />
				</IconItem>
			) : (
				''
			)}
		</ListContainer>
	);
}
