// src/components/ui/checkbox.jsx
import React from "react";

const Checkbox = ({ id, label, checked, onChange, className = "" }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      {label && (
        <label htmlFor={id} className="text-sm text-gray-700">
          {label}
        </label>
      )}
    </div>
  );
};

export { Checkbox };
