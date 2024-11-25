import React, { useEffect, useState } from 'react';
import { fetchCurrentTime } from '../services/api';
import styles from './SyncStatus.module.css';

const SyncStatus = ({ isOffline }) => {
  const [currentTime, setCurrentTime] = useState('');
  const timezone = 'UTC'; // Default timezone

  useEffect(() => {
    const getTime = async () => {
      try {
        const timeData = await fetchCurrentTime(timezone);
        setCurrentTime(timeData.dateTime);
      } catch (error) {
        console.error('Failed to fetch current time:', error);
        setCurrentTime('Unable to fetch time');
      }
    };

    getTime();
  }, [timezone]);

  return (
    <div>
      <p className={`${styles.status} ${isOffline ? styles.offline : styles.online}`}>
        {isOffline ? 'Offline: Logs will sync when online.' : 'Online'}
      </p>
      <p>
        <strong>Current Time:</strong> {currentTime}
      </p>
    </div>
  );
};

export default SyncStatus;
