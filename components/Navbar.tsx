import React from 'react'
import { Flex, Link } from 'rebass'
import { default as NextLink } from 'next/link'

const NavBar = ({ items }: { items: { text: string; href: string }[] }) => (
  <Flex as="nav" variant="nav">
    {items.map(({ href, text }) => (
      <NextLink href={href}>
        <Link>{text}</Link>
      </NextLink>
    ))}
  </Flex>
)

export default NavBar
