"use client";

import { useState, useEffect } from "react";
import moment from "moment";

type ExperienceProps = {
  startDate: string;
};

const Experience = ({ startDate }: ExperienceProps) => {
  const [time, setTime] = useState({
    years: 5,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeDifference = () => {
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
    };

    // Call the calculation logic immediately when the component mounts
    calculateTimeDifference();

    // Start the interval for subsequent updates
    const intervalId = setInterval(calculateTimeDifference, 1000);

    // Clean up the interval on component unmount
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
