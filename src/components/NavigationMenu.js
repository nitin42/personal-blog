import React from "react"
import { Link } from "./Link"
import { FlexContainer } from "./Container"
import { Heading } from "./Heading"

export const NavigationMenu = () => {
  return (
    <header>
      <FlexContainer className="flex-wrap border-transparent border-b md:border-gray-200 lg:border-gray-200 bg-white fixed top-0 inset-x-0 h-16 z-50">
        <div className="pl-5 pt-1 pr-5 mx-auto">
          <Link className="text-lg no-underline" to="/" renderGatsbyLink>
            <Heading disableDefaultSize className="text-4xl">
              Form meets code
            </Heading>
          </Link>
        </div>
        <nav className="pt-2 pb-2 self-center flex-grow border-gray-200 border-b md:border-transparent lg:border-transparent bg-white">
          <ul className="flex lg:justify-end justify-center">
            <li className="pr-4">
              <Link
                className="text-lg no-underline text-gray-500 hover:text-black"
                to="/"
                renderGatsbyLink
              >
                Home
              </Link>
            </li>
            <li className="pr-4">
              <Link
                className="text-lg no-underline text-gray-500 hover:text-black"
                to="/sketches"
                renderGatsbyLink
              >
                Sketches
              </Link>
            </li>
            <li className="pr-4">
              <Link
                className="text-lg no-underline text-gray-500 hover:text-black"
                to="/blog"
                renderGatsbyLink
                partiallyActive={true}
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </FlexContainer>
    </header>
  )
}
