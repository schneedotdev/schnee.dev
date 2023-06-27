'use client';

import { useState, useEffect } from 'react';
import moment from 'moment';

type ExperienceProps = {
	startDate: string;
};

const Experience = ({ startDate }: ExperienceProps) => {
	const [time, setTime] = useState({
		years: 0,
		months: 0,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
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
		<h3 className='text-[#606060]'>
			{`Programming for ${time.years} years, ${time.months} months, ${time.days} days, ${time.hours} hours, ${time.minutes} minutes, 
         ${time.seconds} seconds`}
		</h3>
	);
};

export default Experience;
