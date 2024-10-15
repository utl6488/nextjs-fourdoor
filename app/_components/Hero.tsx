import React from "react";

function Hero() {
	return (
		<div className="pl-20 pr-20">
			<section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
				{/* Left Side (Text and Image) */}
				<div className="p-8 md:p-12 lg:px-16 lg:py-24">
					<div className="mx-auto max-w-xl text-center sm:text-left">
						<img
							alt="logo"
							src="./logo-desktop.jpeg"
							className="h-auto w-[300px] object-cover sm:h-full"
						/>

						<div className="mt-4 md:mt-8 text-right sm:text-left">
							<h1 className="py-6 text-2xl md:text-4xl lg:text-5xl">
								<span className="banner-text-desktop font-regular">Right </span>
								<span className="banner-text-desktop font-semibold">
									Service.
								</span>
								<span className="banner-text-desktop font-regular">
									{" "}
									Right{" "}
								</span>
								<span className="banner-text-desktop font-semibold">
									Price.
								</span>
								<span className="banner-text-desktop font-regular">
									{" "}
									Right{" "}
								</span>
								<span className="banner-text-desktop font-semibold">Now.</span>
							</h1>
						</div>
					</div>
				</div>

				{/* Right Side (Banner Image) */}
				<img
					alt="banner"
					src="./desktop--header-banner.avif"
					className="h-56 w-full object-cover sm:h-full"
				/>
			</section>
		</div>
	);
}

export default Hero;
