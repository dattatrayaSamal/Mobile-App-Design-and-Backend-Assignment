import { useState } from "react";
import Phone from "../components/Phone";
import Img from "../components/Img";
import PrimaryButton from "../components/PrimaryButton";
import Radio from "../components/Radio";
import { IMG } from "../constants/images";

function ItemDetail() {
  const sizes = [
    ["Personal (4 Slices)", "$0.00"],

    ["Medium (8 Slices)", "$3.00"],

    ["Familiar (10 Slices)", "$6.00"],

    ["Jumbo (12 Slices)", "$10.00"],
  ];

  const [size, setSize] = useState(3);

  const [qty, setQty] = useState(3);

  return (
    <Phone label="Signup">
      {" "}
      <div className="flex flex-1 flex-col px-4">
        {" "}
        <Img
          src={IMG.pizza}
          emoji="🍕"
          from="#e9a15b"
          to="#a2441a"
          className="mt-1 h-[210px] w-full rounded-[28px] text-7xl"
        />{" "}
        <div className="mt-3 flex items-center justify-between border-b border-gray-100 pb-2">
          {" "}
          <span className="text-[20px] font-extrabold text-[#FF5A00]">
            ₹14.00
          </span>{" "}
          <div className="flex items-center gap-3">
            {" "}
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF5A00] text-white"
              aria-label="Decrease"
            >
              {" "}
              <span className="-mt-px text-sm leading-none">-</span>{" "}
            </button>{" "}
            <span className="w-3 text-center text-[14px] font-semibold">
              {qty}
            </span>{" "}
            <button
              onClick={() => setQty(qty + 1)}
              className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF5A00] text-white"
              aria-label="Increase"
            >
              {" "}
              <span className="-mt-px text-sm leading-none">+</span>{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
        <h2 className="mt-3 text-[14px] font-extrabold text-[#1c2230]">
          Lorem ipsum dolor sit amet
        </h2>{" "}
        <p className="mt-1 text-[9.5px] leading-snug text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.{" "}
        </p>{" "}
        <h3 className="mt-5 text-[13px] font-extrabold text-[#1c2230]">
          Personal portion
        </h3>{" "}
        <ul className="mt-2 space-y-[11px]">
          {" "}
          {sizes.map(([name, price], i) => (
            <li key={name}>
              {" "}
              <button
                onClick={() => setSize(i)}
                className="flex w-full items-center justify-between text-[9px] text-gray-700"
              >
                <span>{name}</span>{" "}
                <span className="flex items-center gap-2">
                  {price}
                  <Radio checked={size === i} />{" "}
                </span>{" "}
              </button>{" "}
            </li>
          ))}{" "}
        </ul>{" "}
        <div className="mt-auto pb-2">
          <PrimaryButton>Add to cart</PrimaryButton>{" "}
          <div className="mx-auto mt-4 h-[5px] w-[134px] rounded-full bg-black" />{" "}
        </div>{" "}
      </div>{" "}
    </Phone>
  );
}

export default ItemDetail;
