import React from 'react';
import DatePicker from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { formatDate } from '../utils/dateFormateur';

function ChildComponent({ value, setDate_end, Dates, nameInput }) {
	let inputProps = {
		placeholder: 'jj-mm-aaaa',
		className:
			' border border-gray-200  text-gray-800 focus:border-2 p-2 rounded-md focus:border-blue-500 focus:outline-none w-60 pl-3',
		name: nameInput,
	};
	
	const disableCustomDt = (current) => {
		return !Dates.includes(current.format('YYYY-MM-DD'));
	};

	function handleChange(e) {
		setDate_end(e._d);
	}
	return (
		<DatePicker
			timeFormat={false}
			closeOnSelect={true}
			inputProps={inputProps}
			isValidDate={disableCustomDt}
			input={true}
			onChange={(e) => handleChange(e)}
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
