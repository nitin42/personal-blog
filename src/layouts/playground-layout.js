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
        className="grid gap-10 lg:grid-cols-playg-content md:grid-cols-playg-content sm:grid-cols-1 justify-center"
      >
        <Container className="p-5 md:p-2 lg:p-0">{children}</Container>
        <div className="bg-gray-200" style={{ width: "2px" }} />
        <div className="lg:block md:block hidden">
          <TableOfContents contents={contents} pageTitle={data.file.name} />
        </div>
      </Container>
    </Layout>
  )
}
