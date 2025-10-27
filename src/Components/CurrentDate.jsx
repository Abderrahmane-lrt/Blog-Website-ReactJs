import { useEffect, useState } from "react";

const CurrentDate = () => {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false); 

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000 );
    return () => clearInterval(timer);
  }, []);

  const toggleZone = () => {
    setShowTime((prev) => !prev);
  };

  return (
    <div className="text-secondary pt-3 ps-3 pb-0 d-flex align-items-center">
      <button
        onClick={toggleZone}
        className="btn btn-outline-dark rounded-circle btn-sm d-flex align-items-center"
        title="Switch timezone"
      >
        <i className={`bi ${showTime ? "bi-clock" : "bi-globe-europe-africa"}`}></i>
      </button>
      &nbsp;
      {showTime ? (
        <span>{date.toTimeString()}</span>
      ) : (
        <span>{date.toDateString()}</span>
      )}
    </div>
  );
};

export default CurrentDate;
