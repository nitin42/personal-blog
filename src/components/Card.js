import React from "react"

export const Card = ({ imageUrl, heading, description }) => (
  <div className="mt-10 max-w-md rounded overflow-hidden shadow-lg cursor-pointer transition duration-150 ease-in-out transform scale-90 hover:scale-95">
    <img className="w-full" alt="" src={imageUrl} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{heading}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  </div>
)
