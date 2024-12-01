// ErrorMessage displays an error message in the center of the screen.

import React from 'react';
import { NAVBAR_HEIGHT, SEARCHBAR_HEIGHT } from '../constants';

interface ErrorMessageProps {
  message: React.ReactNode;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="flex justify-center items-center px-4 sm:px-6 md:px-8" style={{ height: `calc(100vh - ${NAVBAR_HEIGHT + SEARCHBAR_HEIGHT}px)` }}>
      <p className="text-primary text-center text-xl sm:text-2xl font-semibold break-words max-w-2xl">{message}</p>
    </div>
  );
};

export default ErrorMessage;