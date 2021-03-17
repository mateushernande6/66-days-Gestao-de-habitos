import styled from "styled-components";
import { toast, ToastContainer, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToast = ({ type, message }) => {
  switch (type) {
    case "create":
      toast.success(message);
      break;
    case "delete":
      toast.error(message);
      break;
    case "send":
      toast.info(message);
      break;
    default:
      toast.info(message);
  }
};

export const ToastAnimated = () => {
  return <ToastContainer autoClose={4000} />;
};
