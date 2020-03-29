import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import favicon from "../images/favicon.ico"

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
      <link rel="icon" href={favicon} />
    </Helmet>
  )
}

export default SEO
