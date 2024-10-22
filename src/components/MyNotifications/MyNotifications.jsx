import React, { useEffect } from "react";
import { useNotification } from "../../context/NotificationContext";
import styles from "./MyNotifications.module.css";

const MyNotifications = () => {
  const { notifications, setNotifications } = useNotification();

  useEffect(() => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      read: true,
    }));
    setNotifications(updatedNotifications);
  }, [notifications, setNotifications]);

  return (
    <div className={styles.notificationsWrapper}>
      <h2 className={styles.notificationsHeading}>My Notifications</h2>
      <ul className={styles.notificationsList}>
        {notifications.length > 0 ? (
          [...notifications].reverse().map((notification) => (
            <li key={notification.id} className={styles.notificationItem}>
              <p>{notification.message}</p>
              <span className={styles.notificationDate}>
                {notification.date}
              </span>
            </li>
          ))
        ) : (
          <li className={styles.notificationItem}>No notifications</li>
        )}
      </ul>
    </div>
  );
};

export default MyNotifications;
