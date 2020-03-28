import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// import favicon from "../images/favicon.ico"

function SEO() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={site.siteMetadata.title}
      titleTemplate={site.siteMetadata.title}
    >
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
        crossorigin="anonymous"
      />
      {/* <link rel="icon" href={favicon} /> */}
      {/* <link rel="manifest" href="./icons/site.webmanifest" /> */}
    </Helmet>
  )
}

export default SEO
