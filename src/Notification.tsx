import React from 'react';
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from 'react-icons/ai';
import './notification.css';

// Define the styles for the icons
const iconStyles = { marginRight: '10px' };

// Map of icons for different notification types
const icons = {
  success: <AiOutlineCheckCircle style={iconStyles} />,
  info: <AiOutlineInfoCircle style={iconStyles} />,
  warning: <AiOutlineWarning style={iconStyles} />,
  error: <AiOutlineCloseCircle style={iconStyles} />,
};

// Define the props for the Notification component
interface NotificationProps {
  type?: 'success' | 'info' | 'warning' | 'error' | 'custom';
  message: string | JSX.Element;
  onClose?: () => void;
  animation?:
    | 'fade'
    | 'pop'
    | 'slide-t-b'
    | 'slide-b-t'
    | 'slide-l-r'
    | 'slide-r-l';
}

// Notification component
const Notification: React.FC<NotificationProps> = ({
  type = 'info', // Default type is "info"
  message,
  onClose = () => {}, // Default onClose handler does nothing
  animation = 'fade', // Default animation is "fade"
}) => {
  // Render the icon based on the notification type
  const renderIcon = () => {
    if (type === 'custom') {
      return null; // No icon for custom type
    } else {
      return icons[type]; // Return the corresponding icon
    }
  };

  // Render the content of the notification
  const renderContent = () => {
    if (type === 'custom') {
      return message; // For custom type, render the message directly
    } else {
      return <div className="message">{message}</div>; // Otherwise, wrap the message in a div
    }
  };

  return (
    <div className={`notification ${type} ${animation}`}>
      {renderIcon()} {/* Render the icon */}
      <div>{renderContent()}</div> {/* Render the content */}
      <AiOutlineClose
        color={type === 'custom' ? 'black' : 'white'} // Change color based on type
        className="closeBtn"
        onClick={onClose} // Call the onClose handler when the close button is clicked
      />
    </div>
  );
};

export default Notification;
