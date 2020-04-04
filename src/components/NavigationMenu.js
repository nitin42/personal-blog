import React from "react"
import { Link } from "./Link"
import { FlexContainer } from "./Container"
import { Heading } from "./Heading"

export const NavigationMenu = () => {
  return (
    <FlexContainer centerAlign direction="column">
      <Heading>Form meets code</Heading>
      <div className="bg-gray-200 w-full" style={{ height: "1.5px" }} />
      <nav className="pt-2">
        <ul className="flex justify-between">
          <li className="pr-4">
            <Link className="text-lg" to="/" renderGatsbyLink>
              Home
            </Link>
          </li>
          <li className="pr-4">
            <Link className="text-lg" to="/sketches" renderGatsbyLink>
              Sketches
            </Link>
          </li>
          <li className="pr-4">
            <Link
              className="text-lg"
              to="/playground"
              renderGatsbyLink
              partiallyActive={true}
            >
              Playground
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-4 bg-gray-800 w-full h-1" />
    </FlexContainer>
  )
}
