import React from "react"
import { Link } from "./Link"

export const NavigationMenu = () => (
  <nav className="pt-2">
    <ul className="flex justify-between">
      <li className="pr-4">
        <Link className="text-lg" to="/" renderGatsbyLink>
          Home
        </Link>
      </li>
      <li className="pr-4">
        <Link className="text-lg" to="/blog" renderGatsbyLink>
          Blog
        </Link>
      </li>
      <li className="pr-4">
        <Link className="text-lg" to="/sketches" renderGatsbyLink>
          Sketches
        </Link>
      </li>
      <li className="pr-4">
        <Link className="text-lg" to="/playground" renderGatsbyLink>
          Playground
        </Link>
      </li>
    </ul>
  </nav>
)
