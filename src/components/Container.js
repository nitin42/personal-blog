import React from "react"

export const Container = ({ children, centerAlign, className = "" }) => (
  <div className={`container ${(centerAlign && "mx-auto") || ""} ${className}`}>
    {children}
  </div>
)

export const FlexContainer = ({
  className = "",
  children,
  direction,
  centerAlign,
}) => (
  <Container
    centerAlign
    className={`flex ${
      direction === "column" ? "flex-col" : "flex-row"
    } ${centerAlign && "justify-center items-center"} ${className}`}
  >
    {children}
  </Container>
)
