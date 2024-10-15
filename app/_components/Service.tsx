import React from "react";

function Service() {
	return (
		<div className="px-5 lg:px-20 pt-5">
			<h1 className="font-bold text-2xl text-center md:text-left">
				Service & Maintenance
			</h1>

			<div className="flex flex-wrap justify-center md:justify-start mt-5">
				{Array(6)
					.fill("")
					.map((_, index) => (
						<div
							key={index}
							className="w-full sm:w-6/12 md:w-3/12 lg:w-2/12 p-2"
						>
							<a
								href="#"
								className="group relative block h-64 sm:h-70 lg:h-76"
							>
								<span className="absolute inset-0 border-2 border-dashed border-black rounded-lg"></span>

								<div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-lg">
									<div className="p-4 transition-opacity group-hover:absolute group-hover:opacity-0">
										<img
											src="./Jaguar-XJ-L-Right-Front-Three-Quarter-64990.webp"
											alt=""
										/>
										<h2 className="mt-4 text-xl font-medium sm:text-2xl">
											Go around the world
										</h2>
									</div>

									<div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
										<h3 className="mt-4 text-xl font-medium sm:text-2xl">
											Go around the world
										</h3>
										<p className="text-sm overflow-hidden">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Cupiditate.
										</p>
										<p className="mt-8 font-bold">Read more</p>
									</div>
								</div>
							</a>
						</div>
					))}
			</div>
		</div>
	);
}

export default Service;
