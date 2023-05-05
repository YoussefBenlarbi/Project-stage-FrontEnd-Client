import styled from 'styled-components';
import tw from 'twin.macro';
import { BookCard } from '../../components/bookCard';
import { Marginer } from '../../components/marginer';
import { Navbar } from '../../components/navbar';
import { BookingSteps } from './bookingSteps';
import { TopSection } from './topSection';
import { AboutUs } from './aboutus';
import { TopCars } from './topCars';
import { Footer } from '../../components/footer';
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

export function HomePage() {
	return (
		// <PageContainer>
		// 	<Navbar />
		<>
			<TopSection />
			<Marginer direction="vertical" margin="2em" />
			{/* <BookCard /> */}
			
			<Marginer direction="vertical" margin="2em" />
			<BookingSteps />
			<Marginer direction="vertical" margin="2em" />
			<AboutUs />
			<Marginer direction="vertical" margin="2em" />
			<TopCars />
		</>
		// 	<Footer/>
		// </PageContainer>
	);
}
