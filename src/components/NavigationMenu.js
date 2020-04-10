import React from "react"
import { Link } from "./Link"
import { FlexContainer } from "./Container"
import { Heading } from "./Heading"

export const NavigationMenu = () => {
  return (
    <>
      <FlexContainer className="flex-wrap">
        <div className="pl-5 pt-1 pr-5 mx-auto">
          <Heading>Form meets code</Heading>
        </div>
        <nav className="pt-2 self-center flex-grow">
          <ul className="flex lg:justify-end justify-center">
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
      </FlexContainer>
      <div className="mt-4 bg-gray-800 w-full" style={{ height: "2px" }} />
    </>
  )
}
