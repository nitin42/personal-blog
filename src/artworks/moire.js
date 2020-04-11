import React, { useState } from "react"
import Slider from "react-input-slider"
import { createP5Sketch } from "../helpers"

import moireImage from "../images/moire-intro.png"
import moireExample from "../images/moire-example.png"
import { Container } from "../components/Container"

export const isWindowDefined = () => typeof window !== undefined

export function useWindowSize() {
  let size
  let windowSize

  // Gatsby throws an error during the build if we remove this check since
  // useWindowSize relies on `window` object and it is undefined in the server side
  if (typeof window !== "undefined") {
    windowSize = require("@rehooks/window-size")
    size = windowSize()
  }

  return {
    isMobile: size && size.innerWidth <= 660,
    viewportWidth: size && size.innerWidth,
  }
}

const drawEllipse = (p5, props) => {
  for (let i = 0; i < p5.width; i += 20) {
    p5.stroke((i * props.stroke) / 100)
    p5.ellipse(0, 0, i + props.size)
  }
}

// Constraints the mouse points so that the canvas is only
// interactive when the touch or hover events are in the bounds
// of the canvas.
export const constraintMousePoints = (p5, callback, offset = 0) => {
  if (
    p5.mouseX <= p5.width + offset &&
    p5.mouseX >= -500 &&
    p5.mouseY <= p5.height + offset &&
    p5.mouseY >= 0
  ) {
    // Do the thing on canvas
    callback()
  }
}

function sketch(p5, props, el) {
  p5.setup = function() {
    p5.noFill()
  }

  p5.draw = function() {
    p5.createCanvas(props.width, props.height)

    p5.background(255)

    p5.translate(p5.width / 2, p5.height / 2)

    p5.strokeWeight(3 / props.strokeWeight)
    drawEllipse(p5, props)

    constraintMousePoints(p5, () => {
      const xOne = p5.map(p5.mouseX, 0, p5.width, -50, 50)
      const sOne = p5.map(p5.mouseY, 0, p5.height, 0.5, 1)

      p5.translate(xOne, 0)
      p5.scale(sOne)
    })

    p5.strokeWeight(2 / props.strokeWeight)
    drawEllipse(p5, props)

    constraintMousePoints(p5, () => {
      const xTwo = p5.map(p5.mouseX, 0, p5.width, -50, 50)
      const sTwo = p5.map(p5.mouseY, 0, p5.height, 0.4, 1)
      p5.translate(xTwo, 0)
      p5.scale(sTwo)

      p5.strokeWeight(2.5 / props.strokeWeight)
      drawEllipse(p5, props)
    })

    constraintMousePoints(p5, () => {
      const xThree = p5.map(p5.mouseX, 0, p5.width, -50, 50)
      const sThree = p5.map(p5.mouseY, 0, p5.height, 0.2, 1)

      p5.translate(xThree, 0)
      p5.scale(sThree)
    })

    p5.strokeWeight(5 / props.strokeWeight)
    drawEllipse(p5, props)
  }

  p5.windowResized = function() {
    p5.resizeCanvas(300, 300)
  }
}

export const MoirePattern = createP5Sketch(sketch)

export { moireImage, moireExample }

export const Canvas = () => {
  const [stroke, setStroke] = useState(255)
  const [size, setSize] = useState(60)
  const [strokeWeight, setStrokeWeight] = useState(2)

  const handleStroke = values => setStroke(values.x)
  const handleStrokeWeight = values => setStrokeWeight(values.x)
  const handleSize = values => setSize(values.x)

  const { isMobile, viewportWidth } = useWindowSize()

  const canvasSize = isMobile ? (viewportWidth < 400 ? 280 : 320) : 420

  return (
    <Container className="pt-10 pb-10 grid gap-10 lg:grid-cols-2 grid-cols-1">
      <MoirePattern
        id="moire-pattern"
        stroke={stroke}
        size={size}
        strokeWeight={strokeWeight}
        height={canvasSize}
        width={canvasSize}
      />
      <div className="self-center mx-auto lg:pt-1 md:pt-1 pt-10">
        <div className="p-3">
          <label>Stroke offset</label>
          <div>
            <span>
              <i className="fas fa-minus" />
            </span>
            <Slider
              className="mr-2 ml-2"
              axis="x"
              x={stroke}
              onChange={handleStroke}
              min="0"
              max="255"
            />
            <span>
              <i className="fas fa-plus" />
            </span>
          </div>
        </div>
        <div className="p-3">
          <label>Circle size</label>
          <div>
            <span>
              <i className="fas fa-minus" />
            </span>
            <Slider
              className="mr-2 ml-2"
              axis="x"
              x={size}
              onChange={handleSize}
              min="20"
              max="600"
            />
            <span>
              <i className="fas fa-plus" />
            </span>
          </div>
        </div>
        <div className="p-3">
          <label>Stroke weight</label>
          <div>
            <span>
              <i className="fas fa-minus" />
            </span>
            <Slider
              className="mr-2 ml-2"
              axis="x"
              x={strokeWeight}
              onChange={handleStrokeWeight}
              min="1"
              max="20"
            />
            <span>
              <i className="fas fa-plus" />
            </span>
          </div>
        </div>
      </div>
    </Container>
  )
}
