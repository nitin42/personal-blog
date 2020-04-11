import React from "react"
import { StaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import SEO from "./seo"

import "../styles/index.css"

import { Container, FlexContainer } from "./Container"
import { Heading } from "./Heading"
import { Text } from "./Text"
import { Footer } from "./Footer"
import { Link } from "./Link"
import { NavigationMenu } from "./NavigationMenu"
import { Card } from "./Card"

const mdxComponents = {
  Container,
  FlexContainer,
  Heading,
  Text,
  GatsbyLink,
  Link,
  Card,
  ExternalLink: props => (
    <Link to={props.href} externalLink>
      {props.children}
    </Link>
  ),
  h1: props => (
    <Heading
      id={props.id}
      level="h1"
      className="font-black"
      style={{ position: "relative" }}
    >
      {props.children}
    </Heading>
  ),
  h2: props => (
    <Heading
      disableDefaultSize
      className="text-3xl"
      id={props.id}
      level="h2"
      style={{ position: "relative" }}
    >
      {props.children}
    </Heading>
  ),
  h3: props => (
    <Heading
      disableDefaultSize
      className="text-2xl"
      id={props.id}
      level="h3"
      style={{ position: "relative" }}
    >
      {props.children}
    </Heading>
  ),
  p: props => <Text>{props.children}</Text>,
  ul: props => <ul className="list-disc pl-5">{props.children}</ul>,
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
        <main className="md:pt-5 lg:pt-5 pt-10 pl-2 pr-2 overflow-auto">
          {children}
        </main>
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
