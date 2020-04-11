import React from "react"
import Layout from "../components/layout"
import { Container } from "../components/Container"

export default ({ children }) => (
  <Layout showNavigation={false}>
    <Container centerAlign className="lg:w-6/12 md:w-3/5 pr-5 pl-5 sm:3/5">
      {children}
    </Container>
  </Layout>
)
