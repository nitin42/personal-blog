import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import SEO from "./seo"

import "../styles/index.css"

import { Container } from "../components/Container"
import { Heading } from "../components/Heading"
import { Text } from "../components/Text"
import { Footer } from "../components/Footer"
import { Link } from "../components/Link"

const mdxComponents = {
  Container,
  Heading,
  Text,
  Link,
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <MDXProvider components={mdxComponents}>
        <SEO />
        <main>{children}</main>
        <Container
          centerAlign
          className="lg:w-6/12 md:w-2/4 pt-10 pr-5 pl-5 sm:3/5"
        >
          <Footer />
        </Container>
      </MDXProvider>
    )}
  />
)

export default Layout
