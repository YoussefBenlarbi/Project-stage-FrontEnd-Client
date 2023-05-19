import React from 'react';
import AuthUser from '../../PrivateRoute/AuthUser';
import { useNavigate } from 'react-router-dom';
import { Popover, Transition, Menu } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment } from 'react';
import profilPictureMale from '../../assets/images/adminMale2.png';
import profilPictureFemale from '../../assets/images/AdminFemale.jpg';
export function ProfilIcon() {
	const navigate = useNavigate();
	const { token, logout, user } = AuthUser();

	const logoutAdmin = () => {
		if (token != undefined) {
			logout();
			window.location.reload();
		}
	};
	if (user) {
		console.log(user);
	}

	return (
		<Menu as="div" className="relative inline-block text-left ">
			<div className="flex items-center justify-center">
				<Menu.Button className=" inline-flex rounded-full  focus:outline-none focus:ring-2 focus:ring-neutral-400">
					<span className="sr-only">Open user Menu</span>
					{/* <div
						className="h-8 w-8  rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
						// style={{
						// 	backgroundImage: `url("https://source.unsplash.com/80x80?face")`,
						// }}
						
					> */}
					<img
						src={
							user.detail.sexe === 'male'
								? profilPictureMale
								: profilPictureFemale
						}
						alt="profil"
						className="h-10 w-10  rounded-full bg-sky-500 object-cover bg-cover bg-no-repeat"
					/>

					<span className="sr-only">John Doe</span>
					{/* </div> */}
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
					{/* <Menu.Item>
						{({ active }) => (
							<div
								className={classNames(
									active && 'bg-gray-100',
									'text-gray-700 focus:bg-gray-300 cursor-pointer rounded-sm px-4 py-2'
								)}
								onClick={() => navigate('/profile')}
							>
								Your profile
							</div>
						)}
					</Menu.Item> */}
					{/* <Menu.Item>
						{({ active }) => (
							<div
								className={classNames(
									active && 'bg-gray-100',
									'text-gray-700 focus:bg-gray-300 cursor-pointer rounded-sm px-4 py-2'
								)}
								onClick={() => navigate('/settings')}
							>
								settings
							</div>
						)}
					</Menu.Item> */}
					<Menu.Item>
						{({ active }) => (
							<div
								className={classNames(
									active && 'bg-gray-100',
									'text-gray-700 focus:bg-gray-300 cursor-pointer rounded-sm px-4 py-2'
								)}
								onClick={logoutAdmin}
							>
								logout
							</div>
						)}
					</Menu.Item>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
