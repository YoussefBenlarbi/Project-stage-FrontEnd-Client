import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import tw from 'twin.macro';
import AuthUser from '../PrivateRoute/AuthUser';
import McLaren from '../assets/images/mclaren-orange-big.png';
import { SCREENS } from '../components/responsive';
import { ToastConfig } from '../components/toastConfig/success';

const Section1 = styled.div`
	${tw`
	hidden md:w-[50%] bg-gray-100  md:flex  md:justify-center  md:items-center shadow 	`};
`;
const Section2 = styled.form`
	${tw`
	w-full h-full md:w-[50%] flex flex-col  items-center `};
`;
const Input = styled.input`
	${tw`
	p-2 text-gray-500 border rounded w-full focus:border-blue-500 outline-none shadow			
	`};
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

function Register() {
	const { http, setToken } = AuthUser();
	const navigate = useNavigate();
	const [state, setState] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		cin: '',
		address: '',
		sexe: 'rien',
	});
	const { name, email, cin, password, confirmPassword, address, sexe } = state;

	function handleChange(e) {
		const { name, value } = e.target;
		setState((prev) => {
			return { ...prev, [name]: value };
		});
	}
	const submitForm = (e) => {
		e.preventDefault();
		if (!name.trim('') || !email.trim('') || !cin.trim('') || !password.trim('') || !confirmPassword.trim('') || !address.trim('') || sexe.trim('') === "rien") {
			toast.error('all fields are required!');
		} else {
			//  api call
			if (password != confirmPassword) {
				toast.error('passwords are not identical', ToastConfig);
			} else {
				console.log(state);
				http.post('/register', state).then((res) => {
					console.log(res);
					toast.success('Your account is created succesfully ', ToastConfig);
					navigate(`/login`);
				});
			}
		}

	};
	return (
		<div className="w-full h-screen flex ">
			<Section1>
				<StandaloneCar>
					<img src={McLaren} alt="" />
				</StandaloneCar>
			</Section1>
			<Section2 onSubmit={submitForm}>
				<h2 className="text-3xl font-meduim mt-12 mb-4">Create an Account</h2>
				<div className="mb-4 w-[60%]">
					<Input
						placeholder="Name"
						id="Name"
						name="name"
						required
						type="text"
						value={name}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="mb-4 w-[60%]">
					<Input
						placeholder="Email"
						id="email"
						name="email"
						type="email"
						required
						value={email}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="mb-4 w-[60%]">
					<Input
						placeholder="Password"
						id="password"
						name="password"
						required
						type="password"
						value={password}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="mb-4 w-[60%]">
					<Input
						type="password"
						name="confirmPassword"
						required
						value={confirmPassword}
						onChange={(e) => handleChange(e)}
						placeholder="*********************"
					/>
				</div>
				<div className="mb-4 w-[60%]">
					<Input
						placeholder="Cin"
						id="cin"
						name="cin"
						type="text"
						required
						value={cin}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="mb-6 w-[60%]">
					<Input
						placeholder="address"
						id="address"
						name="address"
						required
						type="text"
						value={address}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="mb-4 w-[60%]">
					<label
						htmlFor="sexe"
						className="block text-sm font-medium text-gray-700 undefined"
					>
						Sexe
					</label>

					<div className="flex gap-2 text-base text-gray-600 ml-2 ">
						Male :
						<input
							type="radio"
							name="sexe"
							value="male"
							onChange={(e) => handleChange(e)}
							className="p-1 border text-sm rounded-md focus:border-2 focus:border-blue-500 focus:outline-none "
						/>
						Female :
						<input
							type="radio"
							name="sexe"
							value="female"
							onChange={(e) => handleChange(e)}
							className="p-1 border text-sm rounded-md focus:border-2 focus:border-blue-500 focus:outline-none "
						/>
					</div>
					<div className="flex items-center  justify-between mt-6  w-[100%]">
						<Link
							className="text-sm text-gray-600 underline hover:text-gray-900"
							to="/login"
						>
							Already registered?
						</Link>
						<button
							type="submit"
							className="inline-flex items-center px-4 py-2  text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md hover:bg-gray-700"
						>
							Register
						</button>
					</div>
				</div>
			</Section2>
		</div>
	);
}

export default Register;
