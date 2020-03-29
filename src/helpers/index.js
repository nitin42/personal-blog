export const artworkNameMapping = {
  bezier: "Bezier approximation",
  noiseThree: "Gradient noise 1.0",
  noiseOne: "3D Gradient noise",
  polygon: "Irregular polygon",
  noiseFive: "Gradient noise 2.0",
  star: "Feathers",
  moireOne: "Ellipses and Moire",
  moireTwo: "Composed ellipses",
  woods: "Wood",
  circular: "Planes",
  windmill: "Windmill",
  nestedRectangles: "Nested rectangles",
}

const artworkWithNoBorders = ["moireOne", "circular", "moireTwo"]

export const getArtworkBorderStyles = artwork =>
  artworkWithNoBorders.includes(artwork)
    ? { border: `1px solid #a0aec0` }
    : null
