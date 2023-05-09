import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useEffect, useState } from 'react';
import { formatDate } from '../components/utils/dateFormateur';
import AuthUser from '../PrivateRoute/AuthUser';
import { toast } from 'react-toastify';
import ChildComponent from '../components/DatePicker/date_start';
import { Car } from '../components/car';
const BookCarContainer = styled.div`
	${tw`
		w-full   bg-gray-100 flex  flex-col p-2 sm:justify-center sm:items-center 
	`};
`;
const Title = styled.h1`
	${tw`
		text-xl text-center font-bold text-cyan-800
	`};
`;
const FormContainer = styled.div`
	${tw`
		m-3  p-6 rounded-lg lg:w-[40%] sm:m-6 bg-white
	`};
`;
const InputContainer = styled.div`
	${tw` p-1 flex flex-col
	`};
`;
const Label = styled.h2`
	${tw`
		font-semibold text-black mb-2
	`};
`;
const Input = styled.input`
	${tw`
		border border-gray-200 focus:border-2 p-1 rounded-md  focus:border-blue-500 focus:outline-none
	`};
`;
const Textarea = styled.textarea`
	${tw`
		border focus:border-2 border-gray-200 p-1 rounded-md  focus:border-blue-500 focus:outline-none
	`};
`;
const ButtonContainer = styled.div`
	${tw`
		w-full p-1 flex whitespace-nowrap justify-start text-center 
	`};
`;
const Button = styled.button`
	${tw`
		p-2 bg-cyan-800 w-[40%]  mt-2 rounded-lg text-white border hover:bg-transparent hover:text-cyan-800 border-cyan-800
	`};
`;
const Select = styled.select`
	${tw`
		p-1 focus:outline-none border focus:border-2 focus:border-blue-500 border-gray-200 rounded-lg
	`};
`;

function BookCar() {
	const { http, user } = AuthUser();
	const navigate = useNavigate();
	const location = useLocation();
	const { startDate, returnDate, id } = location.state || {};
	const [cars, setCars] = useState();

	const [datesBooked, setDatesBooked] = useState([]);
	const initialState = {
		date_start: startDate ? formatDate(startDate) : '',
		date_end: returnDate ? formatDate(returnDate) : '',
		note: '',
		car_id: id || 'rien',
	};
	const [state, setState] = useState(initialState);
	const { date_start, date_end, note, car_id } = state;
	// function to retrieve the car data
	const getCars = async () => {
		const apiCars = await http.get('/carsInfo');
		setCars(apiCars.data);
	};
	// retrieve all the dates what will be passed to the datePicker
	const getDates = async (id) => {
		const apiDates = await http.get(`/datesCar/${id}`);
		setDatesBooked(apiDates.data.dates);
		console.log(apiDates.data.dates)
		// setState({...state,date_start:"",date_end:""});

		if (startDate) {
			let dato = formatDate(startDate);
			if (datesBooked) {
				// console.log('----' + dato);
				console.log(datesBooked);
				// console.log(datesBooked.find((elm) => elm == dato));
			}
		}
	};
	useEffect(() => {
		getCars();
		if (id) {
			getDates(id);
		}
	}, []);
	// console.log(cars);

	function handleChange(e) {
		if (e && e.target) {
			// your code here
			const { name, value } = e.target;
			if (name === 'car_id') {
				setState((prev) => {
					return { ...prev, [name]: value };
				});
				// call the function to retrieve booked dates / value equal  id
				getDates(value);
			} else {
				setState((prev) => {
					return { ...prev, [name]: value };
				});
			}
		}
		// console.log(e.target);
	}
	async function handleSubmit() {
		if (!date_start || !date_end || !note || car_id === 'rien') {
			alert('Tous les champs obligatoires ');
			// console.log(state);
			return;
		}
		let todayDate = new Date();
		const reservation = {
			...state,
			user_id: user.id,
			date_reservation: formatDate(todayDate),
		};
		// console.log(reservation);
		await http.post('/reservations', reservation);
		toast.success('Reservation bien enregistrer', {
			position: 'top-center',
			autoClose: 500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
		navigate('/');
	}
	return (
		<div className="w-full h-screen flex bg-neutral-100">
			<div className="p-6 flex justify-end items-center w-[50%]">
				<Car
					key={'1'}
					id={'1'}
					name={'Ferrari Spider'}
					mileage={120000}
					thumbnailUrl={'images/image-1682365366943.jpg'}
					dailyPrice={300}
					monthlyPrice={4800}
					gearType={'auto'}
					gasType={'petrol'}
				/>
			</div>
			<div className="p-6 flex-1 flex flex-col justify-between">
				<h2 className="text-xl font-semibold mb-4 ml-10">Choose your dates</h2>
				<select
					name="car_id"
					id="car_id"
					value={car_id}
					onChange={handleChange}
					className="p-2 border shadow outline-none focus:border-blue-500 rounded  w-60 mb-6 "
				>
					<option value="rien" disabled={true}>
						Choisir la voiture
					</option>
					{cars &&
						cars.map((car) => (
							<option value={car.id} key={car.id}>
								{car.name}
							</option>
						))}
				</select>

				<InputContainer>
					<Label>Date Start</Label>
					<ChildComponent
						value={date_start}
						handleChange={handleChange}
						Dates={datesBooked ? datesBooked : []}
						nameInput="date_start"
					/>
				</InputContainer>
				<InputContainer>
					<Label>Date Return</Label>
					<ChildComponent
						value={date_end}
						handleChange={handleChange}
						Dates={datesBooked ? datesBooked : []}
						nameInput="date_end"
					/>
				</InputContainer>
				<textarea
					id=""
					cols="20"
					rows="4"
					name="note"
					value={note}
					onChange={handleChange}
					placeholder="Add a little note..."
					className="border shadow p-2 outline-none focus:border-blue-500 rounded w-60 mb-6"
				></textarea>
				<ButtonContainer>
					<Button onClick={(e) => handleSubmit(e)}>Book the ride</Button>
				</ButtonContainer>
			</div>
		</div>
	);
	// You can now use startDate and returnDate in your component
}
export default BookCar;