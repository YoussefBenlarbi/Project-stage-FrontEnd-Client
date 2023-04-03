import React from 'react';
import styled from 'styled-components';

const HorizontalMargin = styled.span`
	display: flex;
	min-width: ${({ margin }) =>
		typeof margin === 'string' ? margin : `${margin}px`};
`;

const VerticalMargin = styled.span`
	display: flex;
	min-height: ${({ margin }) =>
		typeof margin === 'string' ? margin : `${margin}px`};
`;

function Marginer(props) {
	const { margin, direction = 'horizontal' } = props;

	if (direction === 'horizontal') {
		return <HorizontalMargin margin={margin} />;
	} else {
		return <VerticalMargin margin={margin} />;
	}
}

export { Marginer };
