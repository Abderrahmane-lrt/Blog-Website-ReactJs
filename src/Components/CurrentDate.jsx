import { useEffect, useState } from "react";

const CurrentDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000 * 6);
    return () => clearInterval(timer);
  });

  return (
    <>
      <span className="text-secondary pt-3 ps-3 pb-0">
        <i class="bi bi-globe-europe-africa"></i> &nbsp; {date.toDateString()}
      </span>
    </>
  );
};

export default CurrentDate;
