import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Navbar } from '../navbar';
import { Footer } from '../footer';
const PageContainer = styled.div`
	${tw`
        flex
        flex-col
        w-full
        h-screen
        items-center
        overflow-x-hidden
    `}
`;
function Layout() {
	return (
		<PageContainer>
			<Navbar />
			{<Outlet />}
			<Footer />
		</PageContainer>
	);
}

export default Layout;
