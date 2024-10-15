import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

function CarCare() {
	return (
		<div className="pr-20 pl-20 mt-5">
			<span className="flex items-center">
				<span className="pr-6 font-bold text-lg">
					Car care stories at FourDoor
				</span>
				<span className="h-px flex-1 bg-black"></span>
			</span>

			<div className="flex justify-center mt-5 rounded-xl">
				<Carousel className="w-full">
					<CarouselContent className="-ml-1">
						{Array.from({ length: 6 }).map((_, index) => (
							<CarouselItem
								key={index}
								className="pl-1 md:basis-1/2 lg:basis-1/5"
							>
								<div className="p-1">
									<Card>
										<CardContent className="flex flex-col aspect-[3/4] items-center justify-center p-6 bg-amber-50">
											<h1 className="font-bold text-lg text-center">
												Rolls Royce Ghost
											</h1>
											<img
												src="./pngtree-rolls-royce-ghost-png-image_12538626.png"
												alt="image"
											/>
											<h1 className="font-bold text-lg text-center">
												The Perfect finish for your car
											</h1>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</div>
	);
}

export default CarCare;
