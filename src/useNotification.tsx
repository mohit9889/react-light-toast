import React from 'react';
import { useCallback, useState, useRef } from 'react';
import Notification from './Notification';

// Define the properties for the Notification component
interface NotificationProps {
  type?: 'success' | 'info' | 'warning' | 'error' | 'custom';
  message: string | JSX.Element;
  duration?: number;
  position?: string;
  onClose?: () => void;
  animation?:
    | 'fade'
    | 'pop'
    | 'slide-t-b'
    | 'slide-b-t'
    | 'slide-l-r'
    | 'slide-r-l';
  id?: number;
}

// Custom hook for managing notifications
const useNotification = (defaultPosition: string = 'top-right') => {
  // State to store the list of notifications
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  // Ref to store timer IDs for each notification
  const timerRefs = useRef<{ [key: number]: NodeJS.Timeout }>({});

  // Function to trigger a new notification
  const triggerNotification = useCallback(
    (notificationProps: NotificationProps) => {
      const id = Date.now(); // Generate a unique ID for the notification
      const position = notificationProps.position || defaultPosition; // Use the provided position or the default position

      // Add the new notification to the state
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        { ...notificationProps, id, position },
      ]);

      // Set a timer to remove the notification after its duration
      timerRefs.current[id] = setTimeout(() => {
        if (notificationProps.onClose) notificationProps.onClose(); // Call the onClose callback if provided
        // Remove the notification from the state
        setNotifications((prevNotifications) =>
          prevNotifications.filter((n) => n.id !== id)
        );
        delete timerRefs.current[id]; // Clean up the timer reference
      }, notificationProps.duration || 3000); // Default duration is 3000ms if not provided
    },
    [defaultPosition]
  );

  // Function to manually close a notification
  const closeNotification = useCallback((id: number) => {
    clearTimeout(timerRefs.current[id]); // Clear the timer
    // Remove the notification from the state
    setNotifications((prevNotifications) =>
      prevNotifications.filter((n) => n.id !== id)
    );
    delete timerRefs.current[id]; // Clean up the timer reference
  }, []);

  // Group notifications by their position
  const groupedNotifications = notifications.reduce<{
    [key: string]: NotificationProps[];
  }>((acc, notification) => {
    const position = notification.position || defaultPosition; // Use the provided position or the default position
    acc[position] = acc[position] || []; // Initialize the array if it doesn't exist
    acc[position].push(notification); // Add the notification to the group
    return acc;
  }, {});

  // Component to render notifications
  const NotificationComponent = (
    <>
      {Object.keys(groupedNotifications).map((position) => (
        <div key={position} className={`notification-container ${position}`}>
          {groupedNotifications[position].map((notification) => (
            <Notification
              key={notification.id}
              {...notification}
              onClose={() => closeNotification(notification.id!)} // Close notification when the close button is clicked
            />
          ))}
        </div>
      ))}
    </>
  );

  return { NotificationComponent, triggerNotification };
};

export default useNotification;
