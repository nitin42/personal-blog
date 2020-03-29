import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { Container, FlexContainer } from "../components/Container"
import { Heading } from "../components/Heading"
import { NavigationMenu } from "../components/NavigationMenu"
import Img from "gatsby-image"

import { getArtworkBorderStyles } from "../helpers"

export const Artwork = ({ imageData, borderStyles }) => (
  <Img fixed={imageData} alt="" style={{ ...borderStyles }} />
)

const Sketches = props => {
  const artworkNames = Object.keys(props.data)
  const artworks = artworkNames.map(artwork => ({
    data: props.data[artwork].childImageSharp.fixed,
    artwork,
  }))

  return (
    <Layout>
      <FlexContainer centerAlign direction="column">
        <Heading>Form meets code</Heading>
        <div className="bg-gray-200 w-full" style={{ height: "1.5px" }} />
        <NavigationMenu />
      </FlexContainer>
      <Container
        centerAlign
        className="pt-10 grid grid-auto-fit gap-5 justify-center items-center"
      >
        <FlexContainer direction="column" centerAlign>
          <Heading>Sketches</Heading>
          <i>Experiments and exploratory work</i>
        </FlexContainer>
        {artworks.map(({ data, artwork }, key) => {
          const borderStyles = getArtworkBorderStyles(artwork)

          return (
            <Artwork imageData={data} borderStyles={borderStyles} key={key} />
          )
        })}
      </Container>
    </Layout>
  )
}

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fixed(width: 300, height: 300) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const query = graphql`
  query {
    bezier: file(relativePath: { eq: "bezier.png" }) {
      ...squareImage
    }
    noiseThree: file(relativePath: { eq: "noise/noise-three.png" }) {
      ...squareImage
    }
    moireOne: file(relativePath: { eq: "Moire/mOne.png" }) {
      ...squareImage
    }
    circular: file(relativePath: { eq: "shapes/circular.png" }) {
      ...squareImage
    }
    moireTwo: file(relativePath: { eq: "Moire/mSix.png" }) {
      ...squareImage
    }
    star: file(relativePath: { eq: "star.png" }) {
      ...squareImage
    }
    noiseFive: file(relativePath: { eq: "noise/noise-five.png" }) {
      ...squareImage
    }
    polygon: file(relativePath: { eq: "polygon.png" }) {
      ...squareImage
    }
    woods: file(relativePath: { eq: "woods.png" }) {
      ...squareImage
    }
    noiseOne: file(relativePath: { eq: "noise/noise-one.png" }) {
      ...squareImage
    }
    windmill: file(relativePath: { eq: "windmill.png" }) {
      ...squareImage
    }
  }
`

export default Sketches
