import styled from 'styled-components';
import tw from 'twin.macro';
import { Navbar } from '../navbar';
import { TopSection } from './topSection';
import BookCard from '../bookCard';
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
		<PageContainer>
			<Navbar />
			<TopSection />
			<BookCard />
		</PageContainer>
	);
}
