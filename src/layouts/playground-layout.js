import React from "react"
import Layout from "../components/layout"
import { Container } from "../components/Container"
import { TableOfContents } from "../components/TableOfContents"

export default ({ children, data }) => {
  const contents = data.file.childMdx.tableOfContents.items

  return (
    <Layout>
      <Container
        centerAlign
        className="grid gap-10 grid-cols-playg-content justify-center"
      >
        <Container>{children}</Container>
        <div className="bg-gray-200" style={{ width: "2.5px" }} />
        <TableOfContents contents={contents} pageTitle={data.file.name} />
      </Container>
    </Layout>
  )
}
