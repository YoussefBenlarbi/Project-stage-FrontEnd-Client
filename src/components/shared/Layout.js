import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Navbar } from '../navbar';
// import { BookCard } from '../../components/bookCard';
// import { Marginer } from '../../components/marginer';
// import { BookingSteps } from './bookingSteps';
// import { TopSection } from './topSection';
// import { AboutUs } from './aboutus';
// import { TopCars } from './topCars';
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
