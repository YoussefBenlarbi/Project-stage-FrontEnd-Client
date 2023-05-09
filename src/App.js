import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { HomePage } from './containers/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
// import Register2 from './pages/Register2';
import Layout from './components/shared/Layout';
import ConatctUs from './pages/ConatctUs';
import Cars from './pages/Cars';
// import BookCar from './pages/BookCar';
// import BookCar2 from './pages/BookCar2';
import BookCar from './pages/BookCar';
import { PrivateRoute } from './PrivateRoute';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SaisieInfos from './pages/SaisieInfos';
const AppContainer = styled.div`
	${tw`
        w-full
        h-full
        flex
        flex-col
        `}
`;
export default function App() {
	return (
		<AppContainer>
			<ToastContainer />
			<Router>
				<Routes>
					{/* <Route path="/" element={<HomePage />}>
					</Route> */}
					<Route path="/" element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path="cars" element={<Cars />}></Route>
						<Route path="contacts" element={<ConatctUs />}></Route>
						<Route element={<PrivateRoute />}>
							{/* <Route path="book-car" element={<BookCar />}></Route> */}
							{/* <Route path="book-car2" element={<BookCar2 />}></Route> */}
							<Route path="book-car" element={<BookCar />}></Route>
						</Route>
					</Route>
					<Route>
						<Route path="login" element={<Login />}></Route>
						{/* <Route path="register" element={<Register />}></Route> */}
						<Route path="register" element={<Register />}></Route>
						<Route path="saisieInfos/:id" element={<SaisieInfos />}></Route>
					</Route>
				</Routes>
			</Router>
		</AppContainer>
	);
}
