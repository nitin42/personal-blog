import React from "react"
import Layout from "../components/layout"

import moireImage from "../images/Moire/mSix.png"
import { Container } from "../components/Container"
import { Link as GatsbyLink, graphql } from "gatsby"
import { Card } from "../components/Card"

export default () => {
  return (
    <Layout>
      <Container
        centerAlign
        className="grid grid-cols-3 justify-center items-center gap-5"
      >
        <GatsbyLink to="/playground/moire">
          <Card
            imageUrl={moireImage}
            heading="Moire pattern"
            description="Learn about Moire pattern."
          />
        </GatsbyLink>
      </Container>
    </Layout>
  )
}
