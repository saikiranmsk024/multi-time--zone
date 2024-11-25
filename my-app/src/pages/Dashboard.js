import React, { useState } from 'react';
import TimezoneSelector from '../components/Timezoneselector';
import TimeLogs from '../components/TimeLogs';

const Dashboard = () => {
  const [userId] = useState('64a123abc456def789gh012'); // Replace with actual user ID
  const [refreshLogs, setRefreshLogs] = useState(false);

  const handleTimezoneSaved = () => {
    setRefreshLogs(!refreshLogs); // Trigger logs refresh
  };

  return (
    <div style={{ padding: '20px' }}>
      <TimezoneSelector onTimezoneSaved={handleTimezoneSaved} />
      <TimeLogs userId={userId} key={refreshLogs} />
    </div>
  );
};

export default Dashboard;
