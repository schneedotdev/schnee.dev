"use client";

import { useState, useEffect } from "react";
import moment from "moment";

type ExperienceProps = {
  startDate: string;
};

const Experience = ({ startDate }: ExperienceProps) => {
  const [time, setTime] = useState({
    years: 5,
    months: 5,
    days: 29,
    hours: 8,
    minutes: 13,
    seconds: 24,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = moment();
      const start = moment(startDate);
      const duration = moment.duration(currentDate.diff(start));
      setTime({
        years: duration.years(),
        months: duration.months(),
        days: duration.days(),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startDate]);

  return (
    <h3 className="text-tertiary">
      {`Programming for ${time.years} years, ${time.months} months, ${time.days} days, ${time.hours} hours, ${time.minutes} minutes, 
         ${time.seconds} seconds`}
    </h3>
  );
};

export default Experience;
