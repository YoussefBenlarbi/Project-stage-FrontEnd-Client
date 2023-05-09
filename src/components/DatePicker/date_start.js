import React from 'react';
import DatePicker from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { formatDate } from '../utils/dateFormateur';

function ChildComponent({ value, handleChange, Dates, nameInput }) {
	let inputProps = {
		placeholder: 'jj-mm-aaaa',
		className:
			' border border-gray-200  text-gray-800 focus:border-2 p-1 rounded-md focus:border-blue-500 focus:outline-none w-full',
		// type: 'date',
		name: nameInput,
	};
	const DatesNooo = ['2023-05-23', '2023-05-24', '2023-05-25', '2023-05-26'];
	const disableCustomDt = (current) => {
		return !DatesNooo.includes(current.format('YYYY-mm-aaaa'));
	};
	if (Dates) {
		console.log(Dates);
	}

	return (
		<DatePicker
			timeFormat={false}
			closeOnSelect={true}
			inputProps={inputProps}
			isValidDate={disableCustomDt}
			input={true}
			onChange={(e) => {
				const newEvent = {
					target: {
						value: formatDate(e._d),
						name: nameInput,
					},
				};
				handleChange(newEvent);
			}}
			value={value}
		/>
	);
}
export default ChildComponent;

// function ParentComponent() {
// 	const [value, handleChange] = React.useState('');
// 	const Dates = ['2023-05-08', '2023-05-04', '2023-05-02', '2023-05-09'];

// 	return (
// 		<div>
// 			<h5 className="underline">Value : {value.toLocaleString()}</h5>
// 			<p className="title">
// 				Disable the list of custom dates:{' '}
// 				<small>(2023-05-08, 2023-05-04, 2023-05-02)</small>{' '}
// 			</p>
// 			<ChildComponent
// 				value={value}
// 				handleChange={handleChange}
// 				Dates={Dates}
// 				name={'date_start'}
// 			/>
// 		</div>
// 	);
// }

// export default ParentComponent;
