import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthUser from '../PrivateRoute/AuthUser';
import { AlertError } from '../components/AlertError';
import McLaren from '../assets/images/mclaren-orange-big.png';
import { ToastConfig } from '../components/toastConfig/success';
import { SCREENS } from '../components/responsive';
import styled from 'styled-components';
import tw from 'twin.macro';
import { toast } from 'react-toastify';
// import styled from 'styled-components';

const Input = styled.input`
	${tw`
	p-2 text-gray-500 border rounded w-full focus:border-blue-500 outline-none shadow			
	`};
`;
const Button = styled.button`
	${tw`
	p-2 border rounded mb-4 w-[60%] bg-gray-800 hover:bg-gray-700  text-white hover:cursor-pointer font-mono 	`};
`;
const Section1 = styled.div`
	${tw`
	hidden md:w-[50%] bg-gray-100  md:flex  md:justify-center  md:items-center shadow 	`};
`;
const Section2 = styled.div`
	${tw`
	w-full h-full md:w-[50%] flex flex-col  items-center md:justify-center mt-28 md:mt-0	 	`};
`;
const StandaloneCar = styled.div`
	width: 50%;
	height: 10em;
	right: 0em;
	top: 0em;
	position: absolute;
	user-select: none;
	img {
		width: auto;
		height: 100%;
		max-width: fit-content;
	}

	@media (min-width: ${SCREENS.sm}) {
		height: 17em;
		right: 0em;
		left: -3em;
		top: 13em;
	}

	@media (min-width: ${SCREENS.lg}) {
		height: 21em;
		right: 0em;
		left: -2em;
		top: 10em;
	}

	@media (min-width: ${SCREENS.xl}) {
		height: 30em;
		right: 0em;
		left: 0em;
		top: 8em;
	}
`;

function Login() {
	const [loading, setLoading] = useState(false);
	const { http, setToken } = AuthUser();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState();
	const location = useLocation();
	const { feedback } = location.state || {};
	// console.log(feedback);
	const handleLogin = async (e) => {
		e.preventDefault();
		if (!email.trim('') || !password.trim('')) {
			toast.error('Tous les champs sont oblipgatoires!', ToastConfig);
		} else {
			setLoading(true);
			try {
				const response = await http.post('/login', { email, password });
				// do something with response data
				setToken(response.data.user, response.data.authorization.token);
				setLoading(false);
				setUser(response.data.user);
			} catch (err) {
				// handle error
				setLoading(false);
			}
		}
		// setError(null);
		// try {
		// 	const response = await http.post('/login', { email, password });
		// 	// do something with response data
		// 	setToken(response.data.user, response.data.authorization.token);
		// 	console.log(response.data);
		// 	setLoading(false);
		// 	setUser(response.data.user);
		// 	setMessage('succes');
		// } catch (err) {
		// 	// handle error
		// 	setError(err.message || 'Something went wrong');
		// 	setLoading(false);
		// }
	};

	return (
		<form className="w-full h-screen flex " onSubmit={handleLogin}>
			<Section1>
				<StandaloneCar>
					<img src={McLaren} alt="" />
				</StandaloneCar>
			</Section1>
			<Section2>
				<h2 className="text-4xl mb-4">Car Agency</h2>
				<small className="mb-4 text-gray-500 text-semibold">
					Authentification
				</small>
				<div className="mb-4 w-[60%]">
					<Input
						placeholder="Email"
						id="email"
						type="email"
						required
						onChange={(e) => setEmail(e.target.value)}
					/>{' '}
				</div>
				<div className="mb-4 w-[60%]">
					<Input
						id="password"
						type="password"
						placeholder="*********************"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<Button type="submit" disabled={loading}>
					{loading ? 'Loading...' : 'Connexion'}
				</Button>
				<div className="flex items-center justify-between w-[50%]">
					<Link
						className="inline-block align-baseline font-bold text-sm text-gray-800 hover:text-gray-500"
						to="/"
					>
						Go Back
					</Link>
					<div className="flex gap-3 justify-center items-center flex-col md:flex-row">
						<Link
							className="text-sm text-gray-600 underline hover:text-gray-900"
							to="/register"
						>
							Create an account?
						</Link>
					</div>
				</div>
				<span className='w-[60%]'>
					{feedback && <AlertError feedback={feedback} />}
				</span>
			</Section2>
		</form>
	);
}

export default Login;
