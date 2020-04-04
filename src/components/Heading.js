import React from "react"
import styled from "styled-components"

const StyledHeading = styled.h1``

export const Heading = ({
  level = "h1",
  className = "",
  id,
  children,
  disableDefaultSize = false,
  style = {},
}) => (
  <StyledHeading
    id={id}
    className={`${!disableDefaultSize &&
      "lg:text-6xl md:text-5xl text-4xl"} ${className}`}
    as={level}
    style={{ ...style }}
  >
    {children}
  </StyledHeading>
)
