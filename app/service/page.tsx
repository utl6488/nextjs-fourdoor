import React from "react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { CarouselCard } from "./_components/Carousel";
import Card from "./_components/Card";
import { Button } from "@/components/ui/button";
import Question from "@/components/ui/Question";

function page() {
	return (
		<div>
			{/*---------------------------------- <Header /> -----------------------------------------------------*/}
			<Header />
			{/*-------------------------------------- Side Bar && Main page-----------------------------------------------------------------*/}
			<div className="flex flex-row p-20">
				<div className="sticky top-0 h-[calc(100vh-8rem)] w-full sm:w-64 bg-white shadow-lg flex flex-col justify-between">
					<div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
						<div className="border-2 border-primaryBlue rounded-xl p-4">
							<div className="flex gap-2 justify-start items-center text-heading text-xl font-semibold">
								<div className="bg-[#FFF8EB] flex items-center justify-center rounded-lg w-[80px] min-w-[80px] h-[80px]">
									<img
										src="https://media.fourdoor.com/fourdoor-images/super-category-icons/images-png/service-&amp;-maintenance.png?format=auto&amp;quality=100"
										alt="General Service"
										className=""
										loading="lazy"
									/>
								</div>
								Service &amp; Maintenance
							</div>
							<div className="flex flex-col gap-4 mt-4">
								<div className="  text-secondaryText border text-sm border-custom-gray-700 rounded-lg h-10 px-3 flex justify-start items-center cursor-pointer">
									Schedule Maintenance
								</div>
								<div className="  text-secondaryText border text-sm border-custom-gray-700 rounded-lg h-10 px-3 flex justify-start items-center cursor-pointer">
									Wheel care
								</div>
								<div className="  text-secondaryText border text-sm border-custom-gray-700 rounded-lg h-10 px-3 flex justify-start items-center cursor-pointer">
									Seasonal Packages
								</div>
							</div>
						</div>
						<div className="flex flex-col text-headingSecondary gap-6 text-xl leading-6 font-semibold mt-5">
							Other services
							<div className="flex flex-col gap-6 overflow-y-auto max-h-80">
								<div className="text-custom-gray-800 text-base font-medium flex gap-3 justify-start items-center p-4 border border-border-blue-100 rounded-xl cursor-pointer">
									<div className="bg-[#FFF8EB] flex items-center justify-center rounded-lg w-[48px] h-[48px]">
										<img
											src="https://media.fourdoor.com/fourdoor-images/super-category-icons/images-png/service-&-maintenance.png?format=auto&quality=100"
											alt="Service & Maintenance"
											loading="lazy"
										/>
									</div>
									Service & Maintenance
								</div>
								<div className="text-custom-gray-800 text-base font-medium flex gap-3 justify-start items-center p-4 border border-border-blue-100 rounded-xl cursor-pointer">
									<div className="bg-[#FFF8EB] flex items-center justify-center rounded-lg w-[48px] h-[48px]">
										<img
											src="https://media.fourdoor.com/fourdoor-images/super-category-icons/images-png/ac-service-&-repair.png?format=auto&quality=100"
											alt="AC Service & Repair"
											loading="lazy"
										/>
									</div>
									AC Service & Repair
								</div>
								<div className="text-custom-gray-800 text-base font-medium flex gap-3 justify-start items-center p-4 border border-border-blue-100 rounded-xl cursor-pointer">
									<div className="bg-[#FFF8EB] flex items-center justify-center rounded-lg w-[48px] h-[48px]">
										<img
											src="https://media.fourdoor.com/fourdoor-images/super-category-icons/images-png/car-detailing.png?format=auto&quality=100"
											alt="Car Detailing"
											loading="lazy"
										/>
									</div>
									Car Detailing
								</div>
								<div className="text-custom-gray-800 text-base font-medium flex gap-3 justify-start items-center p-4 border border-border-blue-100 rounded-xl cursor-pointer">
									<div className="bg-[#FFF8EB] flex items-center justify-center rounded-lg w-[48px] h-[48px]">
										<img
											src="https://media.fourdoor.com/fourdoor-images/super-category-icons/images-png/general-inspection.png?format=auto&quality=100"
											alt="General Inspection"
											loading="lazy"
										/>
									</div>
									General Inspection
								</div>
								<div className="text-custom-gray-800 text-base font-medium flex gap-3 justify-start items-center p-4 border border-border-blue-100 rounded-xl cursor-pointer">
									<div className="bg-[#FFF8EB] flex items-center justify-center rounded-lg w-[48px] h-[48px]">
										<img
											src="https://media.fourdoor.com/fourdoor-images/super-category-icons/images-png/steering-&-sespension.png?format=auto&quality=100"
											alt="Steering & Suspension"
											loading="lazy"
										/>
									</div>
									Steering & Suspension
								</div>
								<div className="text-custom-gray-800 text-base font-medium flex gap-3 justify-start items-center p-4 border border-border-blue-100 rounded-xl cursor-pointer">
									<div className="bg-[#FFF8EB] flex items-center justify-center rounded-lg w-[48px] h-[48px]">
										<img
											src="https://media.fourdoor.com/fourdoor-images/super-category-icons/images-png/engine-&-brakes.png?format=auto&quality=100"
											alt="Engine & Brakes"
											loading="lazy"
										/>
									</div>
									Engine & Brakes
								</div>
								<div className="text-custom-gray-800 text-base font-medium flex gap-3 justify-start items-center p-4 border border-border-blue-100 rounded-xl cursor-pointer">
									<div className="bg-[#FFF8EB] flex items-center justify-center rounded-lg w-[48px] h-[48px]">
										<img
											src="https://media.fourdoor.com/fourdoor-images/super-category-icons/images-png/car-wash-&-spa.png?format=auto&quality=100"
											alt="Car Wash & Spa"
											loading="lazy"
										/>
									</div>
									Car Wash & Spa
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*-------------------------------------- Main Page-----------------------------------------------------------------*/}
				<div className="flex flex-col overflow-y-auto">
					<CarouselCard />
					<Card />
					<Question />
				</div>
			</div>

			{/*-------------------------------------- Footer -----------------------------------------------------------------*/}
			<Footer />
		</div>
	);
}

export default page;
