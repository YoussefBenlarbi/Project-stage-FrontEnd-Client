import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { formatDate } from '../utils/dateFormateur';
const CustomDatePicker = ({ DatesNooo, handleChange, date_start }) => {
	// const [startDate, setStartDate] = useState(new Date());
	const excludedDates = DatesNooo.map((dateString) => new Date(dateString));
	return (
		<DatePicker
			showIcon
			selected={date_start}
			value={date_start}
			onChange={(date) => handleChange(date)}
			excludeDates={excludedDates}
			className=" border border-gray-200  text-gray-800 focus:border-2 p-1 rounded-md focus:border-blue-500 focus:outline-none w-60"
			placeholderText="Choose a Date"
		/>
	);
};

export default CustomDatePicker;
