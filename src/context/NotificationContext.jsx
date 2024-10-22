import React, { createContext, useState, useContext, useEffect } from "react";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(() => {
    const storedNotifications = localStorage.getItem("notifications");
    return storedNotifications ? JSON.parse(storedNotifications) : [];
  });

  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  const addNotification = (newNotification) => {
    const updatedNotifications = [...notifications, newNotification];
    setNotifications(updatedNotifications);
  };

  const getUnreadCount = () => {
    return notifications.filter((notification) => !notification.read).length;
  };

  const clearNotifications = () => {
    setNotifications([]);
    localStorage.removeItem("notifications");
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        setNotifications,
        addNotification,
        getUnreadCount,
        clearNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
