import React from "react"

import { Link as GatsbyLink } from "gatsby"

export const Link = ({
  children,
  to,
  className,
  renderGatsbyLink,
  externalLink,
  partiallyActive,
}) => {
  const linkStyles = `underline ${className}`

  const externalLinkAttributes = {
    target: "__blank",
    rel: "noreferrer noopener",
  }

  if (renderGatsbyLink) {
    return (
      <GatsbyLink
        className={linkStyles}
        to={to}
        partiallyActive={partiallyActive}
        activeClassName="text-blue-400"
        {...(externalLink ? { ...externalLinkAttributes } : null)}
      >
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a
      href={to}
      className={`${linkStyles} text-blue-400`}
      {...(externalLink ? { ...externalLinkAttributes } : null)}
    >
      {children}
    </a>
  )
}
