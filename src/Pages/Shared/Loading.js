import React from "react";

const Loading = () => {
  return (
    <div className="flex h-screen  justify-center items-center">
    <div 
        className="w-16 h-16 border-4 border-accent border-dashed rounded-full animate-spin"></div>
</div>
  );
};

export default Loading;
