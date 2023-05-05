import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
const AlertContainer = styled.div`
	${tw` text-lg mb-3 mt-6
        inline-flex w-full items-center
        rounded-lg bg-red-100 px-3 py-5
        text-red-700 justify-center
    `};
`;
const IconContainer = styled.span`
	${tw`
    mr-2
    `};
`;

export function AlertError(props) {
	const { feedback } = props;
	return (
		<AlertContainer>
			<IconContainer>
				<FontAwesomeIcon icon={faExclamationTriangle} />
			</IconContainer>
			{feedback} 
            {/* Account is not active    */}
		</AlertContainer>
	);
}
