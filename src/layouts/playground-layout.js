import React from "react"
import Layout from "../components/layout"
import { Container } from "../components/Container"
import { slug } from "github-slugger"
import { Link } from "gatsby"
import { Heading } from "../components/Heading"

export default ({ children, data }) => {
  const mdxData = data.file.childMdx
  return (
    <Layout>
      <Container
        centerAlign
        className="grid gap-10 grid-cols-playg-content justify-center"
      >
        <Container>{children}</Container>
        <div className="bg-gray-200" style={{ width: "2.5px" }} />
        <Container className="pt-10">
          <Heading level="h3" className="text-xl" disableDefaultSize>
            On this page
          </Heading>
          <ul className="pt-2 text-gray-500 list-disc pl-5">
            {mdxData &&
              mdxData.headings
                .filter(heading => heading.depth !== 1)
                .map(heading => (
                  <li className="pt-1 pb-1" key={heading.value}>
                    <Link to={`/playground/moire${"#" + slug(heading.value)}`}>
                      {heading.value}
                    </Link>
                  </li>
                ))}
          </ul>
        </Container>
      </Container>
    </Layout>
  )
}
