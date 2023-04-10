import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

const ContactContainer = styled.div`
	${tw`
		w-full  bg-gray-100 flex flex-col md:items-center md:justify-items-center 
	`};
`;
const InnerContainer = styled.div`
	${tw`
	w-full p-6 md:p-0 md:w-1/3 flex flex-col justify-between gap-2 
	`};
`;
const Title = styled.h2`
	${tw`
	font-bold font-mono  mt-[40px] text-2xl mx-auto
	`};
`;
const InputField = styled.input`
	${tw`
	border-2 border-zinc-400 focus:border-zinc-600 p-3 rounded-lg
	`};
`;
const TextAreaField = styled.textarea`
	${tw`
	rounded-lg  border-2 border-zinc-400  focus:border-blue-400 p-3 
	`};
`;
const Button = styled.button`
	${tw`
	py-3 mb-[50px] text-white border-2 bg-red-500 
	hover:bg-transparent hover:text-red-600 rounded-md border-red-500
	`};
`;
function ConatctUs() {
	return (
		<ContactContainer>
			<InnerContainer>
				<Title>Send Us a Message</Title>
				<p>
					We value our customers and are always here to help. If you have any
					questions or need assistance with anything or you can just say hi 👋,
					please don’t hesitate to contact us. Our team is dedicated to
					providing you with the best possible service and support. We look
					forward to hearing from you.
				</p>
				<InputField type="text" placeholder="Name..." />
				<TextAreaField
					name=""
					id=""
					cols="30"
					rows="10"
					placeholder="Message..."
				></TextAreaField>
				<Button>Submit</Button>
			</InnerContainer>
		</ContactContainer>
	);
}

export default ConatctUs;
