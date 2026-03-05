"use client";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

interface expired {
  expired_at: string;
  className?: string;
}

const CountdownTimer: React.FC<expired> = ({ className, expired_at }) => {
  const calculateTimeLeft = () => {
    const targetTime = new Date(expired_at).getTime();
    const now = new Date().getTime();
    const difference = targetTime - now;

    // 1. Tambahkan 'days' ke dalam struktur timeLeft
    let timeLeft: { [key: string]: number } = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        // 2. Tambahkan kalkulasi untuk hari
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className={clsx("bg-[#B91C1C] p-2 w-fit rounded-md my-5", className)}>
      {/* 3. Perbarui kondisi untuk menyertakan 'days' */}
      {timeLeft.days > 0 ||
      timeLeft.hours > 0 ||
      timeLeft.minutes > 0 ||
      timeLeft.seconds > 0 ? (
        <>
          {/* 4. Tambahkan elemen untuk menampilkan hari */}
          {timeLeft.days > 0 && (
            <span>
                {timeLeft.days} hari{" "}
            </span>
          )}
          <span>
            {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours} jam
          </span>{" "}
          <span>
            {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}{" "}
            menit
          </span>{" "}
          <span>
            {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}{" "}
            detik
          </span>
        </>
      ) : (
        <span>Waktu habis</span>
      )}
    </div>
  );
};

export default CountdownTimer;