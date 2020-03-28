import React from "react"

export const Text = ({ children, className }) => (
  <p className={`text-lg leading-relaxed pt-2 pb-3 tracking-wide ${className}`}>
    {children}
  </p>
)
