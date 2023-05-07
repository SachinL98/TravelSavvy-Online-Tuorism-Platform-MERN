

import AVATAR from "../../assets/avatar2.png";
import AVATAR2 from "../../assets/avatar3.png";
import { BuMinimal } from "../../Components/Buttons/Buttons";
import getIcon from "../../Helpers/IconsHelper";


export default function ReviewsSection() {
  return (
    <div className="reviews p-6 grid gap-8 rounded-xl bg-white">
        <div className="flex gap-4">
            <p className="text-lg font-semibold text-dark">Reviews</p>
            <p className="py-1 px-4 rounded-md bg-accent-500 text-white text-sm">2</p>
        </div>
      <Review1 />
      <Review2 />
      {/* <Review /> */}
     <BuMinimal text="show all" RightIcon={getIcon("chevron_down")} className="mt-4 py-1"/>
    </div>
  );
}

function Review1() {
  return (
    <div className="flex gap-4">
      <img
        src={AVATAR}
        alt=""
        className="h-10 w-10 md:h-12 md:w-12 rounded-full"
      />
      <div className="review__container flex flex-col gap-2 flex-1">
        <div className="review__header grid md:grid-cols-2 ">
          <p className="review__user text-lg font-bold text-dark -order-2 md:order-none">
            Shehan Rashmika
          </p>
          <p className="review__date md:text-end text-sm">29/06/23</p>
          <p className="review__user-occupation -order-1 md:order-none text-sm">CEO at SOftmint</p>
          <ReviewStars className="md:ml-auto" />
        </div>
        <p className="review-text">
        I am very pleased with the service. Extreamly good customer service
        </p>
      </div>
    </div>
  );
}

function Review2() {
  return (
    <div className="flex gap-4">
      <img
        src={AVATAR2}
        alt=""
        className="h-10 w-10 md:h-12 md:w-12 rounded-full"
      />
      <div className="review__container flex flex-col gap-2 flex-1">
        <div className="review__header grid md:grid-cols-2 ">
          <p className="review__user text-lg font-bold text-dark -order-2 md:order-none">
          Supun Jayaweera
          </p>
          <p className="review__date md:text-end text-sm">1/07/23</p>
          <p className="review__user-occupation -order-1 md:order-none text-sm">MD at Wiley</p>
          <ReviewStars className="md:ml-auto" />
        </div>
        <p className="review-text">
        Very good customer service
        </p>
      </div>
    </div>
  );
}





function ReviewStars(props) {
  return (
    <svg
    className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="108"
      height="20"
      fill="none"
      viewBox="0 0 108 20"
    >
      <g clipPath="url(#a)">
        <path
          fill="#FBAD39"
          fillRule="evenodd"
          d="M9.167 2.658a.9.9 0 0 1 1.716 0l1.55 4.767h5a.908.908 0 0 1 .534 1.667l-4.059 2.941 1.55 4.775a.9.9 0 0 1-1.391 1.009L10 14.842l-4.058 2.95a.9.9 0 0 1-1.392-1.009l1.55-4.775-4.058-2.941A.908.908 0 0 1 2.575 7.4h5l1.592-4.742Zm22 0a.9.9 0 0 1 1.716 0l1.55 4.767h5a.908.908 0 0 1 .534 1.667l-4.059 2.941 1.55 4.775a.9.9 0 0 1-1.391 1.009L32 14.842l-4.058 2.95a.9.9 0 0 1-1.392-1.009l1.55-4.775-4.058-2.941a.908.908 0 0 1 .533-1.667h5l1.592-4.742Zm22 0a.9.9 0 0 1 1.716 0l1.55 4.767h5a.908.908 0 0 1 .534 1.667l-4.059 2.941 1.55 4.775a.9.9 0 0 1-1.391 1.009L54 14.842l-4.058 2.95a.9.9 0 0 1-1.392-1.009l1.55-4.775-4.058-2.941a.908.908 0 0 1 .533-1.667h5l1.592-4.742Zm22 0a.9.9 0 0 1 1.716 0l1.55 4.767h5a.908.908 0 0 1 .534 1.667l-4.059 2.941 1.55 4.775a.9.9 0 0 1-1.391 1.009L76 14.842l-4.058 2.95a.9.9 0 0 1-1.392-1.009l1.55-4.775-4.058-2.941a.908.908 0 0 1 .533-1.667h5l1.592-4.742Z"
          clipRule="evenodd"
        />
        <path
          stroke="#C3D4E9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M97.167 2.658a.9.9 0 0 1 1.716 0l1.55 4.767h5a.906.906 0 0 1 .891 1.21.906.906 0 0 1-.357.457l-4.059 2.941 1.55 4.775a.898.898 0 0 1-1.391 1.009L98 14.842l-4.058 2.95a.9.9 0 0 1-1.392-1.009l1.55-4.775-4.058-2.941a.908.908 0 0 1 .533-1.667h5l1.592-4.742Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h108v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
