import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useEffect, useState } from 'react';
import { formatDate } from '../components/utils/dateFormateur';
import AuthUser from '../PrivateRoute/AuthUser';
import { toast } from 'react-toastify';
import ChildComponent from '../components/DatePicker/date_start';
import { Car } from '../components/car/CarForm';
import CustomDatePicker from '../components/DatePicker/ReactDatePicker';

const InputContainer = styled.div`
	${tw` p-1 flex flex-col text-black
	`};
`;
const Label = styled.h2`
	${tw`
		font-semibold text-black mb-2
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


function BookCar() {
	const { http, user } = AuthUser();
	const navigate = useNavigate();
	const location = useLocation();
	const { id } = location.state || {};

	const [cars, setCars] = useState();

	const [datesBooked, setDatesBooked] = useState([]);
	const [date_start, setDate_start] = useState();
	const [date_end, setDate_end] = useState();
	const [note, setNote] = useState('');
	const [car_id, setCar_id] = useState(id || 'rien');

	const [dispalyedCar, setDispalyedCar] = useState({
		id: '1',
		name: 'Clio 4',
		mileage: 120000,
		thumbnailUrl: 'images/image-1682365366943.jpg',
		dailyPrice: 300,
		monthlyPrice: 4800,
		gearType: 'auto',
		gasType: 'petrol',
	});
	// function to retrieve the car data
	const getCars = async () => {
		const apiCars = await http.get('/carsInfo');
		setCars(apiCars.data);
	};
	// retrieve all the dates what will be passed to the datePicker
	const getDates = async (id) => {
		const apiDates = await http.get(`/datesCar/${id}`);
		setDatesBooked(apiDates.data.dates);
		console.log(apiDates.data.dates);
		// setState({...state,date_start:"",date_end:""});
	};
	useEffect(() => {
		getCars();
		if (id) {
			getDates(id);
		}
	}, []);
	// console.log(cars);
	function handleCarState(e) {
		setCar_id(e.target.value);
		getDates(e.target.value);
		const selectedCar = cars.find((car) => car.id == e.target.value);
		setDispalyedCar(selectedCar);
	}
	async function handleSubmit() {
		if (!date_start || !date_end || !note || car_id === 'rien') {
			alert('Tous les champs obligatoires ');
			// console.log(state);
			return;
		}
		let todayDate = new Date();
		const reservation = {
			date_start: formatDate(date_start),
			note: note,
			date_end: formatDate(date_end),
			car_id: car_id,
			user_id: user.id,
			date_reservation: formatDate(todayDate),
		};
		console.log(reservation);

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
					key={dispalyedCar.id}
					id={dispalyedCar.id}
					name={dispalyedCar.name}
					mileage={dispalyedCar.mileage}
					thumbnailUrl={dispalyedCar.thumbnailUrl}
					dailyPrice={dispalyedCar.dailyPrice}
					monthlyPrice={dispalyedCar.monthlyPrice}
					gearType={dispalyedCar.gearType}
					gasType={dispalyedCar.gasType}
				/>
			</div>
			<div className="p-6 flex-1 flex flex-col justify-between">
				<h2 className="text-xl font-semibold mb-4 ml-10">
					Choose your dates 3
				</h2>
				<select
					name="car_id"
					id="car_id"
					value={car_id}
					onChange={(e) => handleCarState(e)}
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
					<CustomDatePicker
						date_start={date_start}
						handleChange={setDate_start}
						DatesNooo={dispalyedCar ? datesBooked : []}
					/>
				</InputContainer>
				<InputContainer>
					<Label>Date Return</Label>
					<CustomDatePicker
						date_start={date_end}
						handleChange={setDate_end}
						DatesNooo={datesBooked ? datesBooked : []}
					/>
				</InputContainer>
				<textarea
					id=""
					cols="20"
					rows="4"
					name="note"
					value={note}
					onChange={(e) => setNote(e.target.value)}
					placeholder="Add a little note..."
					className="border mt-4 shadow p-2 outline-none focus:border-blue-500 rounded w-60 mb-6"
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
