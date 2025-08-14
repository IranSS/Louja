import { useEffect } from "react";
import "./../../Styles/MySnackBar.css"

export default function MySnackBar({ message, type = "sucess", onClose }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return <div className={`snackbar ${type}`}>
    {message}
  </div>;
}
