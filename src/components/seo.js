import React, { useEffect } from "react"
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

  const netl = `https://5e9acde922b36c0007d1a9f5--hardcore-booth-b9fd74.netlify.app/.netlify/functions/strava`

  useEffect(() => {
    fetch(netl, { mode: "cors" }).then(response => console.log(response.body))
  })

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
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
        crossorigin="anonymous"
      />
    </Helmet>
  )
}

export default SEO
