import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useEffect, useState } from 'react';
import { formatDate } from '../components/utils/dateFormateur';
import AuthUser from '../PrivateRoute/AuthUser';
import { toast } from 'react-toastify';
import ChildComponent from '../components/DatePicker/date_start';
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
		border m-3 shadow-lg p-6 rounded-lg lg:w-[40%] sm:m-6 bg-white
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
		w-full p-1 flex whitespace-nowrap justify-center text-center 
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
	console.log(id);
	const Dates = ['2023-05-08', '2023-05-04', '2023-05-02', '2023-05-09'];
	const [cars, setCars] = useState();
	const initialState = {
		date_start: startDate ? formatDate(startDate) : '',
		date_end: returnDate ? formatDate(returnDate) : '',
		note: '',
		car_id: id || 'rien',
	};
	const getCars = async () => {
		const apiCars = await http.get('/carsInfo');
		setCars(apiCars.data);
	};
	useEffect(() => {
		getCars();
	}, []);
	// console.log(cars);
	const [state, setState] = useState(initialState);

	const { date_start, date_end, note, car_id } = state;

	function handleChange(e) {
		if (e && e.target) {
			// your code here
			const { name, value } = e.target;
			if (name === 'car_id') {
				setState((prev) => {
					return { ...prev, [name]: value };
				});
			} else {
				setState((prev) => {
					return { ...prev, [name]: value };
				});
			}
		}
		console.log(e.target);
	}
	async function handleSubmit() {
		if (!date_start || !date_end || !note || car_id === 'rien') {
			alert('Tous les champs obligatoires ');
			console.log(state);
			return;
		}
		let todayDate = new Date();
		const reservation = {
			...state,
			user_id: user.id,
			date_reservation: formatDate(todayDate),
		};
		console.log(reservation);
		await http.post('/reservations', reservation);
		// alert('reservation bien enregistrer');
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
		<BookCarContainer>
			<FormContainer>
				<Title>Reservation Form</Title>
				<InputContainer>
					<Label>Choix de Voiture</Label>
					<Select
						name="car_id"
						id="car_id"
						value={car_id}
						onChange={handleChange}

						// defaultValue={id || 'rien'}
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
					</Select>
				</InputContainer>
				<InputContainer>
					<Label>Date Start</Label>
					{/* <Input
						placeholder="Name..."
						type="date"
						name="date_start"
						value={date_start}
						onChange={handleChange}
					/> */}
					<ChildComponent
						value={date_start}
						handleChange={handleChange}
						Dates={Dates}
						nameInput="date_start"
					/>
				</InputContainer>
				<InputContainer>
					<Label>Date Return</Label>
					{/* <Input
						placeholder="Name..."
						type="date"
						name="date_end"
						value={date_end}
						onChange={handleChange}
					/> */}
					<ChildComponent
						value={date_end}
						handleChange={handleChange}
						Dates={Dates}
						nameInput="date_end"
					/>
				</InputContainer>
				<InputContainer>
					<Label>Note</Label>
					<Textarea
						id=""
						cols="20"
						rows="4"
						name="note"
						value={note}
						onChange={handleChange}
						placeholder="Add a little note..."
					></Textarea>
				</InputContainer>

				<ButtonContainer>
					<Button onClick={(e) => handleSubmit(e)}>Book the ride</Button>
				</ButtonContainer>
			</FormContainer>
		</BookCarContainer>
	);
	// You can now use startDate and returnDate in your component
}
export default BookCar;
