import React from 'react';

const Button = ({ label, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
    >
      {label}
    </button>
  );
};

export default Button;
