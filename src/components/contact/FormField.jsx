import React from "react";

/** Wrapper de campo com label e conteúdo */
export default function FormField({
  id,
  label,
  children,
  className = "",
}) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="text-gray-200 text-sm font-semibold">
          {label}
        </label>
      )}
      {children}
    </div>
  );
}
