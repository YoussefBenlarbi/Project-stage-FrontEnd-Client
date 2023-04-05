import React, { useState } from 'react';
// import styled from 'styled-components';

function Login() {
	const [loading, setLoading] = useState(false);

	const handleLogin = (e) => {
		e.preventDefault();
		setLoading(!loading);
		alert('Button Clicked');
	};
	return (
		<div className="w-full h-screen flex justify-center items-center">
			{' '}
			<div className="h-full w-1/2 bg-login-redPic bg-cover bg-no-repeat grayscale-[50%]"></div>
			<div className="w-1/2 flex justify-center items-center  bg-gray-100 h-full">
				<form className="bg-white w-3/4 shadow-md rounded px-8 pt-6 pb-8  ">
					<div className="mb-4">
						<h1 className="text-center text-red-400 tracking-widest text-3xl font-bold">
							Log in{' '}
						</h1>
						<label
							className="block text-gray-700 text-sm  mb-2"
							htmlFor="email"
						>
							Email
						</label>
						<input
							className="shadow appearance-none border focus:border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-cyan-700"
							id="email"
							type="text"
							placeholder="email"
							// onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700 text-sm  mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<input
							className="shadow appearance-none border focus:border-2   rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-cyan-700"
							id="password"
							type="password"
							placeholder="*********************"
							// onChange={(e) => setPassword(e.target.value)}
						/>
						{/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
					</div>
					<div className="flex items-center justify-between">
						<button
							className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
							onClick={handleLogin}
							disabled={loading}
						>
							{loading ? 'Loading...' : 'Sign in '}
						</button>
						<a
							className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800"
							href="#"
						>
							Forgot Password?
						</a>
					</div>
					<p className="text-center mt-5 text-gray-500 text-xs">
						&copy;2020 Acme Corp. All rights reserved.
					</p>
					{/* <span>
                        {message && <p className="text-red-600">{message}</p>}
                        {user && (
                            <p className="font-mono">
                                Hello Mr <span className="font-bold">{user.name}</span>
                            </p>
                        )}
                        {error && <p className="error">{error}</p>}
                    </span> */}
				</form>
			</div>
		</div>
	);
}

export default Login;
