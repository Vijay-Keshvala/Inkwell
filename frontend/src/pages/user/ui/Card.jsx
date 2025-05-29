import React from "react";

// Wrapper Card container
export function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-lg shadow p-4 ${className}`}
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
    >
      {children}
    </div>
  );
}

// Header container for title and icon
export function CardHeader({ children, className = "" }) {
  return (
    <div className={`flex items-center justify-between mb-2 ${className}`}>
      {children}
    </div>
  );
}

// Card title styling
export function CardTitle({ children, className = "" }) {
  return (
    <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
  );
}

// Smaller description text under title
export function CardDescription({ children, className = "" }) {
  return (
    <p className={`text-sm text-gray-500 ${className}`}>{children}</p>
  );
}

// Content section of the card
export function CardContent({ children, className = "" }) {
  return <div className={`mt-2 ${className}`}>{children}</div>;
}

// Footer container for card actions or info
export function CardFooter({ children, className = "" }) {
  return (
    <div
      className={`flex items-center justify-end mt-4 border-t border-gray-200 pt-3 ${className}`}
    >
      {children}
    </div>
  );
}