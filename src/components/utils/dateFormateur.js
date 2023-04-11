import React from 'react';

export  function formatDate(dateString) {
	let date = new Date(dateString);
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	let formattedDate =
		year +
		'-' +
		month.toString().padStart(2, '0') +
		'-' +
		day.toString().padStart(2, '0');
	return formattedDate;
}
