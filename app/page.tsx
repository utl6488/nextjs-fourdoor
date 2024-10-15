import Image from "next/image";
import Hero from "./_components/Hero";
import CarService from "./_components/CarService";
import { CarouselCard } from "./_components/Carousel";
import CarCare from "./_components/CarCare";
import Service from "./_components/Service";
import Workshop from "./_components/Workshop";
import Testimonial from "./_components/Testimonial";
import Pricing from "./_components/Pricing";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Question from "@/components/ui/Question";

export default function Home() {
	return (
		<div>
			{/* <Header /> */}
			<Header />
			{/* <Hero /> */}
			<Hero />
			{/* Car Service */}
			<CarService />
			{/* Carousel */}
			<CarouselCard />
			{/* Car Care */}
			<CarCare />
			{/* Service */}
			<Service />
			{/* <Workshop /> */}
			<Workshop />
			{/*Testimonila*/}
			<Testimonial />
			{/*Pricing*/}
			<Pricing />
			{/* Question */}
			<Question />

			{/* Footer */}
			<Footer />
		</div>
	);
}
