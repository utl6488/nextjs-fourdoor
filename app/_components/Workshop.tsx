import React from "react";

function Workshop() {
	return (
		<div className="pl-20 pr-20 pt-5">
			<h1 className="font-bold text-2xl">FourDoor workshop</h1>
			<section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 mt-5 p-5">
				<div className="p-8 md:p-12 lg:px-10 lg:py-10">
					<div className=" max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
						<img
							alt=""
							src="./Map.svg"
							className="h-30 w-50 sm:h-full"
						/>
					</div>
					<div className="flex flex-row pt-5">
						<div>
							<svg
								className="h-8 w-8 text-gray-500 mr-2"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
						</div>
						<h1>
							18/1, NH8, behind Fortune Questa, near Mercedes Benz, Sector 35,
							Gurugram, Haryana 122004
						</h1>
					</div>
				</div>

				<img
					alt=""
					src="./fourdoor-sec-35-desktop.svg"
					className="h-56 w-full object-cover sm:h-full rounded-xl"
				/>
			</section>
		</div>
	);
}

export default Workshop;
