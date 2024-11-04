import React from "react";

export default function Navbar() {
  return (
    <div className="sticky bg-white drop-shadow-sm py-3">
      <div className="flex justify-center items-center gap-2 ">
        <div className="font-dancing font-bold gap-3 text-gold-dark flex items-center text-6xl">
          <p>We</p>
          <div className="flex flex-col text-4xl items-center">
            <p>are</p>
            <p>getting</p>
          </div>
          <p>Married</p>
        </div>
      </div>
    </div>
  );
}
