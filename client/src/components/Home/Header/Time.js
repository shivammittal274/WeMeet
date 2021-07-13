import React, { useState, useEffect } from "react";
import "./Time.css";
import moment from 'moment';

export const Time = () => {
  let interval = null;
  const formatDate = (timestamp) => {
    return moment(timestamp).format("hh:mm A");
  }
  const [currentTime, setCurrentTime] = useState(() => {
    return formatDate();
  });

  useEffect(() => {
    interval = setInterval(() => setCurrentTime(formatDate()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  var showdate = new Date();
  var dt = showdate.toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="time">
      <p className="time_display">{currentTime}</p>

      <p className="date_display">{dt}</p>
    </div>
  );
};

export default Time;
