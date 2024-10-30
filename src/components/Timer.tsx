import React from "react";

export default function Timer() {
  const minutes = "09";
  const seconds = "30";
  return (
    <div className="flex gap-5 items-center">
      <span className="font-ptRootUI text-3xl font-bold leading-9 text-mainText">
        Скидка действует:
      </span>
      <div className="flex items-start gap-2">
        <div className="flex flex-col">
          <span className="font-bebas text-6xl text-blueAccent">{minutes}</span>
          <span
            className="font-ptRootUI text-base font-bold
leading-5 text-secondaryText"
          >
            минут
          </span>
        </div>
        <div className="py-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="15"
            viewBox="0 0 5 15"
            fill="none"
          >
            <g opacity="0.5">
              <circle cx="2.50366" cy="2.5" r="2.5" fill="#01B9C5" />
              <circle cx="2.50366" cy="12.5" r="2.5" fill="#01B9C5" />
            </g>
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="font-bebas text-6xl text-blueAccent">{seconds}</span>
          <span
            className="font-ptRootUI text-base font-bold
leading-5 text-secondaryText"
          >
            секунд
          </span>
        </div>
      </div>
    </div>
  );
}
