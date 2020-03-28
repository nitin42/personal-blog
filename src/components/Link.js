import React from "react"

import { Link as GatsbyLink } from "gatsby"

export const Link = ({
  children,
  to,
  className,
  renderGatsbyLink,
  externalLink,
}) => {
  const linkStyles = `underline text-blue-400 ${className}`

  const externalLinkAttributes = {
    target: "__blank",
    rel: "noreferrer noopener",
  }

  if (renderGatsbyLink) {
    return (
      <GatsbyLink
        className={linkStyles}
        to={to}
        {...(externalLink ? { ...externalLinkAttributes } : null)}
      >
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a
      href={to}
      className={linkStyles}
      {...(externalLink ? { ...externalLinkAttributes } : null)}
    >
      {children}
    </a>
  )
}
