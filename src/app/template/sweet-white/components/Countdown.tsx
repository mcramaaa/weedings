/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

interface IProps {
  eventDate: string;
}

export default function Countdown(props: IProps) {
  const { eventDate } = props;
  const targetDate = new Date(
    new Date(eventDate).toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
  );
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Konversi waktu ke WIB

    // Validasi tanggal target
    if (isNaN(targetDate.getTime())) {
      return;
    }

    const interval = setInterval(() => {
      const now = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
      );
      const difference = targetDate.getTime() - now.getTime(); // Selisih waktu dalam milidetik

      if (difference <= 0) {
        clearInterval(interval); // Hentikan interval jika waktu habis
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, [eventDate]);

  return (
    <div className="flex justify-center w-full gap-4">
      <div className="h-16 w-16 flex flex-col justify-center items-center drop-shadow-md bg-white rounded-lg">
        <p className="text-2xl font-dancing">{timeLeft.days}</p>
        <p className="text-xs">Hari</p>
      </div>
      <div className="h-16 w-16 flex flex-col justify-center items-center drop-shadow-md bg-white rounded-lg">
        <p className="text-2xl font-dancing">{timeLeft.hours}</p>
        <p className="text-xs">Jam</p>
      </div>
      <div className="h-16 w-16 flex flex-col justify-center items-center drop-shadow-md bg-white rounded-lg">
        <p className="text-2xl font-dancing">{timeLeft.minutes}</p>
        <p className="text-xs">Menit</p>
      </div>
      <div className="h-16 w-16 flex flex-col justify-center items-center drop-shadow-md bg-white rounded-lg">
        <p className="text-2xl font-dancing">{timeLeft.seconds}</p>
        <p className="text-xs">Detik</p>
      </div>
    </div>
  );
}
