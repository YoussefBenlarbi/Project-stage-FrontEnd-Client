import { Outlet, Navigate, useLocation } from 'react-router-dom';
import AuthUser from './AuthUser';

export function PrivateRoute() {
	let { token, user } = AuthUser();
	// let token = false;
	if (user) {
		console.log(user);
	}
	if (!token) {
		return <Navigate to="/login" />;
	} else {
		if (user.is_active === 0) {
			return (
				<Navigate to="/login" state={{ feedback: 'Account not active' }} />
			);
		}
	}
	return <Outlet />;
}
