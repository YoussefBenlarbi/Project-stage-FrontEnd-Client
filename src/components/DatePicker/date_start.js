import React from 'react';
import DatePicker from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

function ChildComponent({ value, setValue, Dates }) {
	let inputProps = {
		placeholder: 'Choose start Date ',
		className:
			'ml-2 border border-gray-200 focus:border-2 p-1 rounded-md focus:border-blue-500 focus:outline-none',
	};
	// const Dates = ['2023-05-08', '2023-05-04', '2023-05-02', '2023-05-09'];
	const disableCustomDt = (current) => {
		return !Dates.includes(current.format('YYYY-MM-DD'));
	};
	return (
		<div>
			<DatePicker
				timeFormat={false}
				inputProps={inputProps}
				isValidDate={disableCustomDt}
				onChange={(e) => setValue(e._d)}
				value={value}
			/>
		</div>
	);
}

function ParentComponent() {
	const [value, setValue] = React.useState('');

	return (
		<div>
			<h5 className="underline">Value : {value.toLocaleString()}</h5>
			<p className="title">
				Disable the list of custom dates:{' '}
				<small>(2023-05-08, 2023-05-04, 2023-05-02)</small>{' '}
			</p>
			<ChildComponent value={value} setValue={setValue} />
		</div>
	);
}

export default ParentComponent;
