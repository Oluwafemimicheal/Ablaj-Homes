/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaBed, FaCity, FaBath } from "react-icons/fa";

const PropCard = ({prop}) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    let description = prop.description;
  
    if (!showFullDescription) {
      description = description.substring(0, 60) + "...";
    }
    return (
        <div className="border-2 border-gray-300 rounded-md p-3 md:p-5 sm:p-2 text-left ">
        <div className="flex flex-col items-center rounded-md overflow-hidden">
          <div className="w-[335.64px] h-[247.07px] transition hover:scale-105">
            <img src={prop.image} alt={prop.name} />
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="font-semibold text-[18px] mt-5">{prop.name}</h1>
          <p className="text-[14px]">{description}</p>
          <button
            onClick={() => setShowFullDescription((prevState) => !prevState)}
            className="text-indigo-500 hover:text-indigo-600"
          >
            {showFullDescription ? "Less" : "Read More"}
          </button>
          <div className="flex justify-start gap-2 my-2">
            <span className="border-[1px] inline-flex items-center border-gray-400 rounded-2xl px-2 gap-1">
              <FaBed />
              {prop.roomView.bedroom}
            </span>
            <span className="border-[1px] inline-flex items-center border-gray-400 rounded-2xl px-2 gap-1">
              <FaBath />
              {prop.roomView.bathroom}
            </span>
            <span className="border-[1px] inline-flex items-center border-gray-400 rounded-2xl px-2 gap-1">
              <FaCity />
              {prop.roomView.villa}
            </span>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="">
              <p className="text-gray-500">Price</p>
              <p className="inline-flex items-center font-semibold text-[16px] text-gray-800">
              &#x20A6;{prop.price}
              </p>
            </div>
            <div>
              <button className="bg-blue-600 text-white rounded-lg px-5 py-2 hover:bg-blue-500 transition">
                View Property Details
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PropCard
