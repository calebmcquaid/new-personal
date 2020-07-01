import React from 'react'
import Item from '../components/Item'
import Header from '../components/Header'
import styled from 'styled-components'
import {graphql} from 'gatsby'

const Container = styled.div`
    margin: 50px 100px;
    background-color: rgb(128,128,128, .97);
    padding: 10px 30px;
    h1 {
        color: white;
    }
`




const Zen = ({data}) => {
    const {spot} = data
    return (
    <div>
        <Header />
        <Container>
            <h1>{spot.name}</h1>
            {spot.edges.map(({ node: playlistTrack }) => (
          <div><h1>{playlistTrack.name}</h1> 
          </div>
            ))}
            {/* {data.allSpotifyTopArtist.edges.node.name} */}
            <h1>Learning:</h1>
            <Item title="Testing" description="Hello this is also a test"/>
            <h1>Watching:</h1>
            <Item title="Watching" description="This is description"/>
            <h1>Listening:</h1>
            <Item title="Podcast" description="Syntax.fm" />
        </Container>
    </div>
    )
}

export const query = graphql`
    query Spotify{
        spot: allSpotifyTopArtist(
      filter: { time_range: { eq: "medium_term" } }
      sort: { fields: order }
    ) {
      edges {
        node {
          name
          genres
          
        }
      }
    }
  }
`

export default Zen