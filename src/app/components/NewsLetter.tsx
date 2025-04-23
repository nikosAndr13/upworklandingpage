"use client";

import { useState } from "react";
import Input from "./InputFields";

export default function NewsLetters() {
  const [closeModal, setCloseModal] = useState<boolean>(false);
  return (
    <>
      <div
        className={`${
          closeModal ? "hidden" : "fixed"
        } inset-0 p-5 bg-gray-800/90 flex items-center justify-center z-50 lg:hidden`}
      >
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full relative">
          <button
            onClick={() => setCloseModal(true)}
            className="absolute top-2 right-2 text-gray-500"
          >
            ✕
          </button>
          <h6 className="font-bold text-[18px] text-gray-900 pb-[10px]">
            Latest Stories in your inbox
          </h6>
          <p className="text-sm mb-4">
            Subscribe to get our expert-written articles in your inbox every
            week.
          </p>
          <Input name={"Email"} />
          <Input name={"First Name"} />
          <Input name={"Last Name"} />
          <Input name={"Job Title"} />
          <button className="bg-(--yellow-button-background) w-[90px] h-[32px] font-bold text-gray-800 rounded-sm cursor-pointer mt-[40px]">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}
