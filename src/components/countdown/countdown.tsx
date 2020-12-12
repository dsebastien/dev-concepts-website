import React, { useEffect, useState } from "react";

interface Props {
  date: Date;
}

interface RemainingTime {
  years: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateCountdown = (endDate: Date): RemainingTime | false => {
  let diff = (Date.parse(endDate.toISOString()) - Date.parse(new Date().toISOString())) / 1000;

  // clear countdown when date is reached
  if (diff <= 0) {
    return false;
  }

  const timeLeft: RemainingTime = {
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  // calculate time difference between now and expected date
  if (diff >= 365.25 * 86400) {
    // 365.25 * 24 * 60 * 60
    timeLeft.years = Math.floor(diff / (365.25 * 86400));
    diff -= timeLeft.years * 365.25 * 86400;
  }
  if (diff >= 86400) {
    // 24 * 60 * 60
    timeLeft.days = Math.floor(diff / 86400);
    diff -= timeLeft.days * 86400;
  }
  if (diff >= 3600) {
    // 60 * 60
    timeLeft.hours = Math.floor(diff / 3600);
    diff -= timeLeft.hours * 3600;
  }
  if (diff >= 60) {
    timeLeft.minutes = Math.floor(diff / 60);
    diff -= timeLeft.minutes * 60;
  }
  timeLeft.seconds = Math.floor(diff);

  return timeLeft;
};

const addLeadingZeros = (value: string | number) => {
  value = String(value);
  while (value.length < 2) {
    value = "0" + value;
  }
  return value;
};

// Reference: https://countdown2christmas.kristin-baumann.com/
const Countdown: React.FC<Props> = ({ date }: Props) => {
  const [remainingTime, setRemainingTime] = useState<RemainingTime>({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = calculateCountdown(date);

      if (remaining) {
        setRemainingTime(remaining);
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="w-full px-5 sm:px-0 flex justify-center">
      <div className="mx-5 sm:ml-0 flex flex-col">
        <span className="text-3xl font-bold text-center">{addLeadingZeros(remainingTime.years)}</span>
        <span className="text-center">{remainingTime.years === 1 ? "Year" : "Years"}</span>
      </div>
      <div className="mx-5 sm:ml-0 flex flex-col">
        <span className="text-3xl font-bold text-center">{addLeadingZeros(remainingTime.days)}</span>
        <span className="text-center">{remainingTime.days === 1 ? "Day" : "Days"}</span>
      </div>
      <div className="mx-5 sm:ml-0 flex flex-col">
        <span className="text-3xl font-bold text-center">{addLeadingZeros(remainingTime.hours)}</span>
        <span className="text-center">Hours</span>
      </div>
      <div className="mx-5 sm:ml-0 flex flex-col">
        <span className="text-3xl font-bold text-center">{addLeadingZeros(remainingTime.minutes)}</span>
        <span className="text-center">Min</span>
      </div>
      <div className="mx-5 sm:ml-0 flex flex-col">
        <span className="text-3xl font-bold text-center">{addLeadingZeros(remainingTime.seconds)}</span>
        <span className="text-center">Sec</span>
      </div>
    </div>
  );
};

export { Countdown };
