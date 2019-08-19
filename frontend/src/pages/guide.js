import React from "react"
import { Heading } from "rebass"

import { Categories } from "../components/category"

export default function Guide() {
  // Eventually, the guide template will display each city first
  return (
    <>
      <Heading
        mb={[2]}
        textAlign="center"
        fontFamily="var(--sans)"
        fontWeight="900"
        fontSize={[5]}
      >
        Guide
      </Heading>
      {/* Categories will change to <Cities/> */}
      <Categories />
    </>
  )
}