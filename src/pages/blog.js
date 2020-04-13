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
        className="pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5"
      >
        <GatsbyLink to="/blog/moire" className="mx-auto">
          <Card
            imageUrl={moireImage}
            heading="Moire pattern"
            description="What is Moiré and how it can be used to create custom patterns."
          />
        </GatsbyLink>
      </Container>
    </Layout>
  )
}
