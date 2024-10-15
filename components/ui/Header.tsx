import React from "react";
import Image from "next/image";

function Header() {
	return (
		<div className="fixed top-0 left-0 right-0 z-50 flex justify-between pl-20 pr-20 pt-5 pb-5 shadow-sm bg-white">
			<div className="flex flex-row">
				<Image
					src="/fourdoor-home.svg"
					alt="Logo"
					width={150}
					height={50}
				/>
				<svg
					className="h-8 w-8 text-black ml-10 mt-2"
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
				<p className="ml-1 mt-3.5 font-black">Gurugram</p>
			</div>

			<div className="hidden lg:block">
				<div className="input-container relative flex items-center z-20">
					<div className="relative w-full">
						<input
							id="search"
							className="block w-full lg:w-[524px] rounded-xl border text-secondaryText text-sm border-black h-12  pr-14 pl-10 focus:border-custom-blue-700 outline-none font-size: 16px;"
							type="text"
							value=""
							name="search"
							placeholder="Search for services"
						/>
						<div className="absolute top-0 right-6  h-full flex justify-center items-center"></div>
					</div>
					<div className="absolute inset-y-0 left-0 flex py-3 pl-3">
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M21.5308 20.4693L16.8368 15.7762C18.1973 14.1428 18.8757 12.0478 18.7309 9.92691C18.5861 7.80604 17.6293 5.82265 16.0593 4.38932C14.4894 2.95599 12.4274 2.18308 10.3021 2.23138C8.17687 2.27968 6.15205 3.14547 4.64888 4.64864C3.14571 6.15181 2.27993 8.17663 2.23163 10.3019C2.18333 12.4271 2.95623 14.4892 4.38956 16.0591C5.82289 17.629 7.80629 18.5859 9.92715 18.7307C12.048 18.8755 14.1431 18.1971 15.7765 16.8365L20.4696 21.5306C20.5393 21.6003 20.622 21.6556 20.713 21.6933C20.8041 21.731 20.9017 21.7504 21.0002 21.7504C21.0988 21.7504 21.1963 21.731 21.2874 21.6933C21.3784 21.6556 21.4612 21.6003 21.5308 21.5306C21.6005 21.4609 21.6558 21.3782 21.6935 21.2871C21.7312 21.1961 21.7506 21.0985 21.7506 21C21.7506 20.9014 21.7312 20.8038 21.6935 20.7128C21.6558 20.6218 21.6005 20.539 21.5308 20.4693ZM3.75021 10.5C3.75021 9.16495 4.14609 7.8599 4.88779 6.74987C5.62949 5.63984 6.6837 4.77467 7.9171 4.26378C9.1505 3.75289 10.5077 3.61922 11.8171 3.87967C13.1264 4.14012 14.3292 4.78299 15.2732 5.727C16.2172 6.671 16.8601 7.87374 17.1205 9.18311C17.381 10.4925 17.2473 11.8497 16.7364 13.0831C16.2255 14.3165 15.3603 15.3707 14.2503 16.1124C13.1403 16.8541 11.8352 17.25 10.5002 17.25C8.71061 17.248 6.99488 16.5362 5.72944 15.2707C4.46399 14.0053 3.7522 12.2896 3.75021 10.5Z"
								fill="black"
							></path>
						</svg>
					</div>
				</div>
			</div>

			<div className="flex flex-row mr-2">
				<svg
					width="34"
					height="34"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className=" lg:block hidden mr-3 mt-1"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M5.67021 4.64847C5.91348 4.49039 6.19737 4.40625 6.48749 4.40625H12.7635C13.1777 4.40625 13.5135 4.74204 13.5135 5.15625C13.5135 5.57046 13.1777 5.90625 12.7635 5.90625H6.48751L4.15409 11.1562H22.5C22.9142 11.1562 23.25 11.492 23.25 11.9062C23.25 12.3205 22.9142 12.6562 22.5 12.6562H21.75V20.1562C21.75 20.5541 21.592 20.9356 21.3107 21.2169C21.0294 21.4982 20.6478 21.6562 20.25 21.6562H18C17.6022 21.6562 17.2206 21.4982 16.9393 21.2169C16.658 20.9356 16.5 20.5541 16.5 20.1562V18.6562H7.5V20.1562C7.5 20.5541 7.34196 20.9356 7.06066 21.2169C6.77935 21.4982 6.39782 21.6562 6 21.6562H3.75C3.35218 21.6562 2.97065 21.4982 2.68934 21.2169C2.40804 20.9356 2.25 20.5541 2.25 20.1562V12.6562H1.5C1.08579 12.6562 0.75 12.3205 0.75 11.9062C0.75 11.492 1.08579 11.1562 1.5 11.1562H2.5126L5.11683 5.29695C5.23469 5.03185 5.42694 4.80654 5.67021 4.64847ZM3.75 12.6562V17.1562H20.25V12.6562H3.75ZM20.25 18.6562H18V20.1562H20.25V18.6562ZM6 18.6562H3.75V20.1562H6V18.6562ZM5.25 14.9062C5.25 14.492 5.58579 14.1562 6 14.1562H7.5C7.91421 14.1562 8.25 14.492 8.25 14.9062C8.25 15.3205 7.91421 15.6562 7.5 15.6562H6C5.58579 15.6562 5.25 15.3205 5.25 14.9062ZM15.75 14.9062C15.75 14.492 16.0858 14.1562 16.5 14.1562H18C18.4142 14.1562 18.75 14.492 18.75 14.9062C18.75 15.3205 18.4142 15.6562 18 15.6562H16.5C16.0858 15.6562 15.75 15.3205 15.75 14.9062Z"
						fill="#0F0F10"
					></path>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M15.0938 5.90625C15.0938 5.59559 15.3456 5.34375 15.6562 5.34375H21.8438C22.1544 5.34375 22.4062 5.59559 22.4062 5.90625C22.4062 6.21691 22.1544 6.46875 21.8438 6.46875H15.6562C15.3456 6.46875 15.0938 6.21691 15.0938 5.90625Z"
						fill="#0F0F10"
					></path>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M18.75 2.25C19.0607 2.25 19.3125 2.50184 19.3125 2.8125V9C19.3125 9.31066 19.0607 9.5625 18.75 9.5625C18.4393 9.5625 18.1875 9.31066 18.1875 9V2.8125C18.1875 2.50184 18.4393 2.25 18.75 2.25Z"
						fill="#0F0F10"
					></path>
				</svg>
				<svg
					width="48"
					height="48"
					viewBox="0 0 48 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className=" lg:block mr-2"
				>
					<path
						d="M20 35C20 35.3956 19.8827 35.7822 19.6629 36.1111C19.4432 36.44 19.1308 36.6964 18.7654 36.8478C18.3999 36.9991 17.9978 37.0387 17.6098 36.9616C17.2219 36.8844 16.8655 36.6939 16.5858 36.4142C16.3061 36.1345 16.1156 35.7781 16.0384 35.3902C15.9613 35.0022 16.0009 34.6001 16.1522 34.2346C16.3036 33.8692 16.56 33.5568 16.8889 33.3371C17.2178 33.1173 17.6044 33 18 33C18.5304 33 19.0391 33.2107 19.4142 33.5858C19.7893 33.9609 20 34.4696 20 35ZM31 33C30.6044 33 30.2178 33.1173 29.8889 33.3371C29.56 33.5568 29.3036 33.8692 29.1522 34.2346C29.0009 34.6001 28.9613 35.0022 29.0384 35.3902C29.1156 35.7781 29.3061 36.1345 29.5858 36.4142C29.8655 36.6939 30.2219 36.8844 30.6098 36.9616C30.9978 37.0387 31.3999 36.9991 31.7654 36.8478C32.1308 36.6964 32.4432 36.44 32.6629 36.1111C32.8827 35.7822 33 35.3956 33 35C33 34.4696 32.7893 33.9609 32.4142 33.5858C32.0391 33.2107 31.5304 33 31 33ZM36.9562 17.2937L33.39 28.8825C33.2032 29.4968 32.8234 30.0346 32.3068 30.416C31.7903 30.7975 31.1646 31.0022 30.5225 31H18.5087C17.8575 30.9976 17.2245 30.7842 16.7046 30.3919C16.1848 29.9996 15.806 29.4494 15.625 28.8237L11.1025 13H9C8.73478 13 8.48043 12.8946 8.29289 12.7071C8.10536 12.5196 8 12.2652 8 12C8 11.7348 8.10536 11.4804 8.29289 11.2929C8.48043 11.1054 8.73478 11 9 11H11.1025C11.5368 11.0014 11.9589 11.1435 12.3057 11.4049C12.6525 11.6663 12.9053 12.0329 13.0262 12.45L14.04 16H36C36.1565 15.9999 36.3108 16.0366 36.4505 16.1071C36.5903 16.1775 36.7115 16.2798 36.8045 16.4056C36.8976 16.5315 36.9597 16.6774 36.9861 16.8316C37.0124 16.9859 37.0022 17.1442 36.9562 17.2937ZM34.6462 18H14.6112L17.5475 28.275C17.6072 28.4839 17.7334 28.6676 17.9068 28.7984C18.0802 28.9292 18.2915 29 18.5087 29H30.5225C30.7365 29.0001 30.9448 28.9315 31.117 28.8044C31.2891 28.6773 31.4159 28.4983 31.4788 28.2938L34.6462 18Z"
						fill="#0F0F10"
					></path>
				</svg>
				<div className="relative flex items-center z-50">
					<span className="cursor-pointer lg:hover:bg-bg-gray-300 pr-3 lg:pr-0 lg:w-12 lg:h-12 lg:flex justify-center items-center rounded-xl bg-transparent">
						<svg
							width="24"
							height="18"
							viewBox="0 0 24 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="cursor-pointer w-[24px] h-[24px] lg:w-[24px] lg:h-[18px]"
						>
							<path
								d="M24 9C24 9.26522 23.8946 9.51957 23.7071 9.70711C23.5196 9.89464 23.2652 10 23 10H1C0.734784 10 0.48043 9.89464 0.292893 9.70711C0.105357 9.51957 0 9.26522 0 9C0 8.73478 0.105357 8.48043 0.292893 8.29289C0.48043 8.10536 0.734784 8 1 8H23C23.2652 8 23.5196 8.10536 23.7071 8.29289C23.8946 8.48043 24 8.73478 24 9ZM1 2H23C23.2652 2 23.5196 1.89464 23.7071 1.70711C23.8946 1.51957 24 1.26522 24 1C24 0.734784 23.8946 0.48043 23.7071 0.292893C23.5196 0.105357 23.2652 0 23 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM23 16H1C0.734784 16 0.48043 16.1054 0.292893 16.2929C0.105357 16.4804 0 16.7348 0 17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18H23C23.2652 18 23.5196 17.8946 23.7071 17.7071C23.8946 17.5196 24 17.2652 24 17C24 16.7348 23.8946 16.4804 23.7071 16.2929C23.5196 16.1054 23.2652 16 23 16Z"
								fill="#0F0F10"
							></path>
						</svg>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Header;
