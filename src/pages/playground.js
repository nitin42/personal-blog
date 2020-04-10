import React from "react"
import Layout from "../components/layout"

import moireImage from "../images/Moire/mSix.png"
import { Container } from "../components/Container"
import { Link as GatsbyLink } from "gatsby"
import { Card } from "../components/Card"

export default () => {
  return (
    <Layout>
      <Container
        centerAlign
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5"
      >
        <GatsbyLink to="/playground/moire" className="mx-auto">
          <Card
            imageUrl={moireImage}
            heading="Moire pattern"
            description="An interactive visualisation explaining the Moire pattern."
          />
        </GatsbyLink>
      </Container>
    </Layout>
  )
}
