# react-light-toast

`react-light-toast` is a lightweight and customizable React notification system that allows you to display various types of notifications in different positions on the screen.

## Installation

To install the package, run:

```bash
npm install react-light-toast
or
yarn add react-light-toast
```

# Usage

## Basic Usage

First, import the useNotification hook and the NotificationComponent in your component:

```javascript
import React from "react";
import { useNotification } from "react-light-toast";
import "react-light-toast/dist/index.css"; // Make sure to import the CSS file

const App: React.FC = () => {
  const { NotificationComponent, triggerNotification } = useNotification();

  const showNotification = () => {
    triggerNotification({
      type: "success",
      message: "This is a success message!",
      duration: 3000,
    });
  };

  return (
    <div>
      <button onClick={showNotification}>Show Notification</button>
      {NotificationComponent}
    </div>
  );
};

export default App;
```

# Notification Props

- **type**: The type of the notification ("success", "info", "warning", "error", "custom"). Default is "info".
- **message**: The message to be displayed in the notification. It can be a string or a JSX element.
- **duration**: The duration for which the notification should be displayed (in milliseconds). Default is 3000ms.
- **position**: The position of the notification on the screen ("top-right", "top-left", "top-center", "bottom-right", "bottom-left", "bottom-center"). Default is "top-right".
- **onClose**: A callback function that is called when the notification is closed.
- **animation**: The animation type for showing and hiding the notification ("fade", "pop", "slide-t-b", "slide-b-t", "slide-l-r", "slide-r-l"). Default is "fade".

# Custom Styles

You can customize the notification styles by modifying the notification.css file or by providing your own CSS. Make sure to maintain the class names used in the original CSS.

### CSS Classes

- **.notification**: Base class for notifications.
- **.success**: Class for success notifications.
- **.info**: Class for info notifications.
- **.warning**: Class for warning notifications.
- **.error**: Class for error notifications.
- **.custom**: Class for custom notifications.
- **.closeBtn**: Class for the close button.
- **.notification-container**: Base class for the notification container.
- **.notification-container.top-right**: Class for top-right container.
- **.notification-container.top-left**: Class for top-left container.
- **.notification-container.top-center**: Class for top-center container.
- **.notification-container.bottom-right**: Class for bottom-right container.
- **.notification-container.bottom-left**: Class for bottom-left container.
- **.notification-container.bottom-center**: Class for bottom-center container.

Animations

- **.fade**: Fade in/out animation.
- **.pop**: Pop in/out animation.
- **.slide-t-b**: Slide from top to bottom animation.
- **.slide-b-t**: Slide from bottom to top animation.
- **.slide-l-r**: Slide from left to right animation.
- **.slide-r-l**: Slide from right to left animation.

# License

MIT

```yml

## Author

[Mohit Rajput](https://github.com/mohit9889)

## Contributing

Feel free to open issues or submit pull requests for any features or bugs you find.

---

Enjoy using `react-light-toast`! If you have any questions or feedback, please don't hesitate to reach out.

```
