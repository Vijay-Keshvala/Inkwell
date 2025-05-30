// src/components/ui/separator.jsx
import React from "react";

const Separator = ({ className = "" }) => {
  return (
    <hr className={`border-t border-gray-300 my-4 ${className}`} />
  );
};

export { Separator };
