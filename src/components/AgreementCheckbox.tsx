"use client";
import { useState } from "react";
import Link from "next/link";
import CheckboxIcon from "./Icons/CheckboxIcon";

export default function AgreementCheckbox(){
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleCheckboxChange = (): void => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center gap-2">
      <input
        id="agreement"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="hidden peer"
      />
      <label htmlFor="agreement" className="relative cursor-pointer">
        <CheckboxIcon isChecked={isChecked} />
        <div
          className={`w-6 h-6 border-2 border-gray-300 hover:border-blueAccent hover:scale-105 rounded ${
            isChecked ? "hidden" : "block"
          }`}
        ></div>
      </label>
      <span className="text-secondaryText text-base font-ptRootUI leading-5 ">
        Я соглашаюсь с{" "}
        <Link href="/terms-of-service" passHref>
          <span className="text-link hover:underline cursor-pointer">
            Правилами сервиса
          </span>
        </Link>{" "}
        и условиями{" "}
        <Link href="/offer" passHref>
          <span className="text-link hover:underline cursor-pointer">
            Публичной оферты
          </span>
        </Link>
        .
      </span>
    </div>
  );
}
