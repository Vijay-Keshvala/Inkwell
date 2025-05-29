import React from "react";

export function Avatar({ children, className = "", ...props }) {
  return (
    <div
      className={`inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-100 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function AvatarImage({ src, alt, className = "", ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full object-cover ${className}`}
      {...props}
    />
  );
}

export function AvatarFallback({ children, className = "" }) {
  return (
    <span
      className={`flex h-full w-full items-center justify-center bg-gray-300 text-gray-600 ${className}`}
    >
      {children}
    </span>
  );
}
