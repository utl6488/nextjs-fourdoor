import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselCard() {
	return (
		<div className="flex justify-center pl-20 pr-20">
			<Carousel className="w-full">
				<CarouselContent className="-ml-1">
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem
							key={index}
							className="pl-1 md:basis-1/2 lg:basis-1/2"
						>
							<div className="p-1">
								<Card>
									<CardContent className="flex flex-col aspect-auto items-center justify-center p-6 bg-gray-100">
										<h1 className="font-bold text-4xl text-start">
											Rolls Royce Ghost
										</h1>
										<img
											src="./pngtree-rolls-royce-ghost-png-image_12538626.png"
											alt="image"
										/>
										<h1 className="font-bold text-4xl text-center">
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
	);
}
