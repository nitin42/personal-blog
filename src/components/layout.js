import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import SEO from "./seo"

import "../styles/index.css"

import { Container } from "./Container"
import { Heading } from "./Heading"
import { Text } from "./Text"
import { Footer } from "./Footer"
import { Link } from "./Link"
import { NavigationMenu } from "./NavigationMenu"

const mdxComponents = {
  Container,
  Heading,
  Text,
  Link,
}

const Layout = ({ children, showNavigation = true }) => (
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
        {showNavigation && <NavigationMenu />}
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
