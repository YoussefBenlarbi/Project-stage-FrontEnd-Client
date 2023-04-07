// import React from 'react';
// import { useLocation } from 'react-router-dom';

// function BookCar() {
// 	const location = useLocation();
// 	const startDate = location.state.startDate;
// 	const returnDate = location.state.returnDate;
// 	if (startDate && returnDate) {
// 		console.log(`startdate : ${startDate} , returnDate : ${returnDate}`);
// 	}
// 	return <div>BookCar</div>;
// }

import { useLocation } from 'react-router-dom';

function BookCar() {

	const location = useLocation();
	const { startDate, returnDate } = location.state || {};
	if (startDate && returnDate) {
		console.log(`startdate : ${startDate} , returnDate : ${returnDate}`);
	}
	return <div>BookCar</div>;
	// You can now use startDate and returnDate in your component
}
export default BookCar;
