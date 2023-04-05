import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();
	function submitForm(e) {
		e.preventDefault();
		alert('Button Clicked');
	}
	return (
		<div className="w-full h-screen flex ">
			{' '}
			<div className="h-full  w-1/2  bg-login-redPic bg-cover bg-no-repeat grayscale-[50%]"></div>
			<div className="flex w-1/2  justify-center items-center bg-gray-100   ">
				<form
					onSubmit={submitForm}
					className="px-10 w-[70%]  py-4 mt-6 overflow-hidden blur-none bg-white drop-shadow-xl sm:rounded-lg"
				>
					<div>
						{/* <a href="/"> */}
						<h3 className="text-3xl tracking-widest text-center font-bold text-red-400">
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
								onChange={(e) => setName(e.target.value)}
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
								onChange={(e) => setEmail(e.target.value)}
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
								onChange={(e) => setPassword(e.target.value)}
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
								name="password_confirmation"
								placeholder="*********************"
								onChange={(e) => setConfirmPassword(e.target.value)}
								className="block w-full mt-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
