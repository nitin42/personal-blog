import React from "react"
import { Container } from "../components/Container"
import { Link } from "gatsby"
import { Heading } from "../components/Heading"

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
              <Link to={`/playground/${pageTitle}${content.url}`}>
                {content.title}
              </Link>
            </li>
          ))}
    </ul>
  </Container>
)
