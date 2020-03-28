import React from "react"

export const Container = ({ children, centerAlign, className }) => (
  <div className={`container ${centerAlign && "mx-auto"} ${className}`}>
    {children}
  </div>
)
