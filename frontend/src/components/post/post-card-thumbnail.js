import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Heading, Box, Flex } from "rebass"

export default function PostCardThumbnail({ post }) {
  console.log(post)

  return (
    <Box mb={[4]}>
      <Link
        to={post.slug.current}
        style={{ textDecoration: `none`, color: `inherit` }}
      >
        <Flex flexDirection="row">
          <Box>
            <Img
              fluid={post.mainImage.asset.fluid}
              style={{
                height: `100px`,
                width: `100px`,
              }}
            />
          </Box>
          <Box width={1} pl={[2]}>
            <Heading fontFamily="var(--sans)" fontSize={[4]}>
              {post.title}
            </Heading>
          </Box>
        </Flex>
      </Link>
    </Box>
  )
}