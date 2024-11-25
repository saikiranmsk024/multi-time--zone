import React, { useEffect, useState } from 'react';
import axios from '../services/api'; // Axios service

const TimeLogs = ({ userId }) => {
  const [timeLogs, setTimeLogs] = useState([]);

  const fetchTimeLogs = async () => {
    try {
      const response = await axios.get(`/timelogs/${userId}`);
      setTimeLogs(response.data);
    } catch (error) {
      alert('Failed to fetch time logs!');
    }
  };

  useEffect(() => {
    if (userId) fetchTimeLogs();
  }, [userId]);

  return (
    <div>
      <h3>Your Time Logs</h3>
      <ul>
        {timeLogs.map((log, index) => (
          <li key={index}>
            <strong>{log.task}</strong>: {log.startTime} - {log.endTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeLogs;
