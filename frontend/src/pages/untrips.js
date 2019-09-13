import React from "react"
import { Link } from "gatsby"
import { Box } from "rebass"
import { useQuery } from "@apollo/react-hooks"

import { AuthTabs } from "../components/auth"
import { HeroCard } from "../components/styles"
import { IS_LOGGED_IN, CURRENT_USER_QUERY } from "../components/apollo/graphql"

export default function ListsPage() {
  const { loading, error, data } = useQuery(IS_LOGGED_IN)

  return (
    <>
      {loading && `Loading...`}
      {error && `Error: ${error.message}`}
      {data && data.isLoggedIn ? <UserLists /> : <AuthTabs />}
    </>
  )
}

function UserLists() {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  return (
    <Box my={[2]} px={[2]}>
      {loading && `Loading...`}
      {error && `Error: ${error.message}`}
      {data &&
        data.me &&
        // TODO: Handle case of user not having any lists. Display you have no lists message
        // TODO: Handle case of list not having any places. Display this list has no places message and default to generic background img
        data.me.lists.map(list => (
          <Link to={`/app/lists/list/${list.id}`} key={list.id}>
            {/* TODO: ADD edit and delete list icons on hover to hero card */}
            <HeroCard
              key={list.id}
              text={list.title}
              fluid={JSON.parse(list.places[0].placeImageUrl)}
            />
          </Link>
        ))}
    </Box>
  )
}