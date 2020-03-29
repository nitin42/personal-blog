import React from "react"

export const Card = ({ imageUrl, heading, description }) => (
  <div className="mt-10 max-w-md rounded overflow-hidden shadow-lg cursor-pointer">
    <img className="w-full" src={imageUrl} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{heading}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  </div>
)
