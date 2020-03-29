import React from "react"

export const Footer = ({ children }) => (
  <footer className="text-gray-500 pt-10 pb-10 flex flex-row justify-center items-center">
    <span>© {new Date().getFullYear()} Nitin Tulswani All Rights Reserved</span>
    {children}
  </footer>
)
