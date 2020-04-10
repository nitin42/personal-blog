import React from "react"
import { Link } from "./Link"
import { FlexContainer } from "./Container"
import { Heading } from "./Heading"

export const NavigationMenu = () => {
  return (
    <header>
      <FlexContainer className="flex-wrap border-b border-gray-200 bg-white fixed top-0 inset-x-0 h-16 z-50">
        <div className="pl-5 pt-1 pr-5 mx-auto">
          <Heading disableDefaultSize className="text-3xl">
            Form meets code
          </Heading>
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
    </header>
  )
}
