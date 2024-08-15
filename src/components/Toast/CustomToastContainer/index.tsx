import React from 'react';

import { Theme, ToastContainer } from "react-toastify";

interface Props {
	theme?: Theme
}

const CustomToastContainer = ({ theme }: Props) => {
  return (
    <ToastContainer
      position="top-center"
      draggable
      pauseOnHover
      theme={theme ?? 'light'}
    />
  );
};

export default CustomToastContainer;
