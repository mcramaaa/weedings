import React from "react";

export default function Countdown() {
  return (
    <div className="flex justify-center w-full gap-4">
      <div className="h-16 w-16 flex flex-col justify-center items-center drop-shadow-md bg-white rounded-lg ">
        <p className="text-2xl">0</p>
        <p className="text-xs">Hari</p>
      </div>
      <div className="h-16 w-16 flex flex-col justify-center items-center drop-shadow-md bg-white rounded-lg ">
        <p className="text-2xl">0</p>
        <p className="text-xs">Jam</p>
      </div>
      <div className="h-16 w-16 flex flex-col justify-center items-center drop-shadow-md bg-white rounded-lg ">
        <p className="text-2xl">0</p>
        <p className="text-xs">Menit</p>
      </div>
      <div className="h-16 w-16 flex flex-col justify-center items-center drop-shadow-md bg-white rounded-lg ">
        <p className="text-2xl">0</p>
        <p className="text-xs">Detik</p>
      </div>
    </div>
  );
}
