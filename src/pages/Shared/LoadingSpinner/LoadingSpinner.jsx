import React from "react";

const LoadingSpinner = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-[calc(100vh-68px)]">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
