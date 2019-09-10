import React from "react"
import { Box, Heading } from "rebass"

import { Link } from "../styles"

export default function Footer() {
  return (
    <Box as="footer" bg="var(--dark-1)" p={[4]}>
      <NavLink text="About" to="/about" />
      <NavLink text="Contact" to="/contact" />
      <NavLink text="Sign Up" to="signup" />
      <NavLink text="Download the app" to="/download" />
    </Box>
  )
}

function NavLink({ to, text }) {
  return (
    <Link to={to}>
      <Heading
        color="var(--light-1)"
        fontSize={[1]}
        fontWeight="lighter"
        style={{ textTransform: `uppercase` }}
      >
        {text}
      </Heading>
    </Link>
  )
}
