import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthUser from '../PrivateRoute/AuthUser';
import { toast } from 'react-toastify';

const configToast = {
	position: 'top-center',
	autoClose: 1000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: false,
	draggable: true,
	progress: undefined,
	theme: 'light',
};
function Register() {
	const { http, setToken } = AuthUser();
	const navigate = useNavigate();
	// const [name, setName] = useState();
	// const [email, setEmail] = useState();
	// const [password, setPassword] = useState();
	// const [confirmPassword, setConfirmPassword] = useState();
	// const [data, setData] = useState();
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
		//  api call
		if (password != confirmPassword) {
			toast.error('passwords are not identical', configToast);
		} else {
			console.log(state);
			http.post('/register', state).then((res) => {
				console.log(res);
				navigate(`/login`);
			});
			// alert('pressed');
		}
	};
	return (
		<div className="w-full h-screen flex ">
			{' '}
			<div className="hidden md:block h-full md:w-1/2 bg-login-redPic bg-cover bg-no-repeat grayscale-[50%]"></div>
			<div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100 ">
				<form
					onSubmit={submitForm}
					className="px-10 w-[70%]  py-4 mt-2 overflow-hidden blur-none bg-white drop-shadow-xl sm:rounded-lg"
				>
					<div>
						{/* <a href="/"> */}
						<h3 className="text-3xl tracking-widest text-center font-bold text-gray-800">
							Register
						</h3>
						{/* </a> */}
					</div>
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-700 undefined"
						>
							Name
						</label>
						<div className="flex flex-col items-start">
							<input
								type="text"
								name="name"
								placeholder="name"
								value={name}
								onChange={(e) => handleChange(e)}
								className="block w-full mt-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							/>
						</div>
					</div>
					<div className="mt-4">
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700 undefined"
						>
							Email
						</label>
						<div className="flex flex-col items-start">
							<input
								type="email"
								name="email"
								placeholder="email"
								value={email}
								onChange={(e) => handleChange(e)}
								className="block w-full mt-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							/>
						</div>
					</div>
					<div className="mt-4">
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700 undefined"
						>
							Password
						</label>
						<div className="flex flex-col items-start">
							<input
								type="password"
								name="password"
								placeholder="*********************"
								value={password}
								onChange={(e) => handleChange(e)}
								className="block w-full mt-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							/>
						</div>
					</div>
					<div className="mt-4">
						<label
							htmlFor="password_confirmation"
							className="block text-sm font-medium text-gray-700 undefined"
						>
							Confirm Password
						</label>
						<div className="flex flex-col items-start">
							<input
								type="password"
								name="confirmPassword"
								placeholder="*********************"
								value={confirmPassword}
								onChange={(e) => handleChange(e)}
								className="block w-full mt-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							/>
						</div>
					</div>
					<div className="mt-4">
						<label
							htmlFor="cin"
							className="block text-sm font-medium text-gray-700 undefined"
						>
							Cin
						</label>
						<div className="flex flex-col items-start">
							<input
								type="text"
								id="cin"
								name="cin"
								value={cin}
								onChange={(e) => handleChange(e)}
								placeholder="cin"
								className="block w-full mt-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							/>
						</div>
					</div>
					<div className="mt-4">
						<label
							htmlFor="address"
							className="block text-sm font-medium text-gray-700 undefined"
						>
							Address
						</label>
						<div className="flex flex-col items-start">
							<input
								type="text"
								id="address"
								name="address"
								placeholder="address"
								value={address}
								onChange={(e) => handleChange(e)}
								className="block w-full mt-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							/>
						</div>
					</div>

					<div className="mt-4">
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
					</div>
					<div className="flex items-center  justify-end mt-4">
						<Link
							className="text-sm text-gray-600 underline hover:text-gray-900"
							to="/login"
						>
							Already registered?
						</Link>
						<button
							type="submit"
							className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md hover:bg-gray-700"
						>
							Register
						</button>	
					</div>
				</form>
			</div>
		</div>
	);
}

export default Register;
