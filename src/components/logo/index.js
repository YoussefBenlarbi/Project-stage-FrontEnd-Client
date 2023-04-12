import React from 'react';
import CarLogoImg from '../../assets/images/car-logo.png';
import CarLogoImgDark from '../../assets/images/car-logo-dark.png';
import styled from 'styled-components';
import tw from 'twin.macro';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LogoContainer = styled.div`
	${tw`
        flex 
        items-center
        
    `}
`;
const LogoText = styled.div`
	${tw`
        text-xl
        md:text-2xl
        font-bold
        text-black
        m-1
		`}
	${({ color }) => (color === 'white' ? tw`text-white` : tw`text-black`)}
`;
LogoText.propTypes = {
	color: PropTypes.any,
};
const Image = styled.div`
	width: auto;
	${tw`
        h-6
        md:h-9
    `}
	img {
		width: auto;
		height: 100%;
	}
`;

export function Logo(props) {
	const { color } = props;
	return (
		<LogoContainer>
			<Image>
				<img src={color === 'white' ? CarLogoImgDark: CarLogoImg } alt="" />
			</Image>
			<Link to={'/'} ><LogoText color={color || 'dark'}>Car Agency</LogoText></Link>
		</LogoContainer>
	);
}
