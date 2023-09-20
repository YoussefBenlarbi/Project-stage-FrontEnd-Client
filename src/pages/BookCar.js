import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useEffect, useState } from 'react';
import { formatDate } from '../components/utils/dateFormateur';
import AuthUser from '../PrivateRoute/AuthUser';
import { toast } from 'react-toastify';
import ChildComponent from '../components/DatePicker/DatePicker';
import { Car } from '../components/car/CarForm';
import { ToastConfig } from '../components/toastConfig/success';
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
		w-full p-1 ml-1 flex whitespace-nowrap justify-start text-center 
	`};
`;
const Button = styled.button`
	${tw`
		p-2 bg-cyan-800 w-[60%] md:w-[40%]  mt-2 rounded-lg text-white border hover:bg-transparent hover:text-cyan-800 border-cyan-800
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
	const { id } = location.state || {};
	// const DatesNooo = ['2023-05-23', '2023-05-24', '2023-05-25', '2023-05-26'];
	const [cars, setCars] = useState();

	const [datesBooked, setDatesBooked] = useState([]);
	const [date_start, setDate_start] = useState();
	const [date_end, setDate_end] = useState();
	const [note, setNote] = useState('');
	const [car_id, setCar_id] = useState(id || 'rien');
	const CheckDate = (current) => {
		for (let i = 0; i < datesBooked.length; i++) {
			if (datesBooked[i] === current) {
				return true;
			}
		}
		return false;
	};
	const [dispalyedCar, setDispalyedCar] = useState({
		id: '1',
		name: 'Clio 444444',
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
			// console.log(apiDates.data.dates);
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

			toast.error('all fields are required!', ToastConfig);
			// console.log(state);
			return;
		} else {
			if (CheckDate(formatDate(date_start)) || CheckDate(formatDate(date_end))) {
				toast.error('chose a valid date !', ToastConfig);
			} else {
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
				// console.log(reservation);
				toast.success('Reservation successfully registered', ToastConfig);
				navigate('/');
			}
		}

	}
	return (
		<div className="w-full h-screen flex bg-neutral-100">
			<div className="p-6  hidden  md:flex justify-end items-center w-[50%]">
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
				<h2 className="text-xl font-semibold mb-4 ml-6">
					Choose your dates :
				</h2>
				<select
					name="car_id"
					id="car_id"
					value={car_id}
					onChange={(e) => handleCarState(e)}
					className="p-2 border shadow outline-none focus:border-blue-500 rounded  w-60 mb-6 "
				>
					<option value="rien" disabled={true}>
						Choose a Car
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
					{/* <CustomDatePicker
						date_start={date_start}
						handleChange={setDate_start}
						DatesNooo={dispalyedCar ? datesBooked : []}
					/> */}
					<ChildComponent
						value={date_start}
						setDate_end={setDate_start}
						Dates={datesBooked ? datesBooked : []}
						// Dates={DatesNooo}
						nameInput="date_end"
					/>
				</InputContainer>
				<InputContainer>
					<Label>Date Return</Label>
					<ChildComponent
						value={date_end}
						setDate_end={setDate_end}
						Dates={datesBooked ? datesBooked : []}
						// Dates={DatesNooo}
						nameInput="date_end"
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
}
export default BookCar;
