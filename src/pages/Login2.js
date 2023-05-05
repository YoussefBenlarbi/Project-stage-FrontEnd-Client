import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthUser from '../PrivateRoute/AuthUser';
import { AlertError } from '../components/AlertError';
import McLaren from '../assets/images/mclaren-orange-big.png';

import { SCREENS } from '../components/responsive';
import styled from 'styled-components';
// import styled from 'styled-components';
const StandaloneCar = styled.div`
	width: auto;
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
		height: 16em;
		right: -6em;
		top: -6em;
	}

	@media (min-width: ${SCREENS.lg}) {
		height: 21em;
		right: 0em;
		left: 0em;
		top: 8em;
	}

	@media (min-width: ${SCREENS.xl}) {
		height: 30em;
		right: -13em;
		top: -9em;
	}
`;

function Login2() {
	const [loading, setLoading] = useState(false);
	const { http, setToken } = AuthUser();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');
	const [user, setUser] = useState();
	const [error, setError] = useState();
	const location = useLocation();
	const { feedback } = location.state || {};
	// console.log(feedback);
	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		try {
			const response = await http.post('/login', { email, password });
			// do something with response data
			setToken(response.data.user, response.data.authorization.token);
			console.log(response.data);
			setLoading(false);
			setUser(response.data.user);
			setMessage('succes');
		} catch (err) {
			// handle error
			setError(err.message || 'Something went wrong');
			setLoading(false);
		}
	};

	return (
		<div className="w-full h-screen flex   ">
			<div className=" hidden md:w-[50%] bg-blue-100  md:flex  md:justify-center  md:items-center">
				<StandaloneCar >
					<img src={McLaren} alt="" />
				</StandaloneCar>
			</div>
			<div className=" w-full h-full md:w-[50%] flex flex-col  items-center justify-center ">
				<h2 className='text-4xl mb-4'>Car Agency</h2>
                <small className='mb-4'>Authentification</small>
                <input type="text"  className='p-2 text-gray-400 border rounded mb-4 w-[60%] hover:cursor-pointer' placeholder='Login'/>
                <input type="text"  className='p-2 text-gray-500 border rounded mb-4 w-[60%] hover:cursor-pointer' placeholder='Password'/>
                <button  className='p-2 border rounded mb-4 w-[60%] bg-blue-700 text-white hover:cursor-pointer font-mono cursor-pointer'> Connexion</button>

			</div>
		</div>
	);
}

export default Login2;
