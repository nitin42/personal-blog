import React from "react"
import { Container } from "../components/Container"
import { Heading } from "../components/Heading"
import { Link } from "./Link"

export const TableOfContents = ({ pageTitle, contents }) => (
  <Container className="pt-10">
    <Heading level="h3" className="text-xl" disableDefaultSize>
      On this page
    </Heading>
    <ul className="pt-2 text-gray-500 list-disc pl-5">
      {contents &&
        contents
          .filter(content => content.depth !== 1)
          .map(content => (
            <li className="pt-1 pb-1" key={content.title}>
              <Link
                className="hover:text-black"
                to={`/blog/${pageTitle}${content.url}`}
                renderGatsbyLink
              >
                {content.title}
              </Link>
            </li>
          ))}
    </ul>
  </Container>
)
