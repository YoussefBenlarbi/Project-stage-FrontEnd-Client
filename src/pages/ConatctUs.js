import React from 'react';

function ConatctUs() {
	return (
		<div className="w-full  bg-gray-100 flex flex-col md:items-center md:justify-items-center ">
			<div className="w-full p-6 md:p-0 md:w-1/3 flex flex-col justify-between gap-2 ">
				<h2 className="font-bold font-mono  mt-[40px] text-2xl mx-auto ">
					Send Us a Message
				</h2>
				<p>
					We value our customers and are always here to help. If you have any
					questions or need assistance with anything or you can just say hi 👋,
					please don’t hesitate to contact us. Our team is dedicated to
					providing you with the best possible service and support. We look
					forward to hearing from you
				</p>
				<input
					className=" border-2 border-zinc-400 focus:border-zinc-600 p-3 rounded-lg"
					type="text"
					placeholder="Name..."
				/>
				<textarea
					className="rounded-lg  border-2 border-zinc-400  focus:border-blue-400 p-3 "
					name=""
					id=""
					cols="30"
					rows="10"
					placeholder="Message..."
				></textarea>
				<button
					className="py-3 mb-[50px] text-white border-2 bg-red-500 
hover:bg-transparent hover:text-red-600 rounded-md border-red-500"
				>
					Submit
				</button>
			</div>
		</div>
	);
}

export default ConatctUs;
