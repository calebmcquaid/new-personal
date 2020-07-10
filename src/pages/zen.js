import React from 'react'
import Item from '../components/Item'
import Header from '../components/Header'
import styled from 'styled-components'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

const Container = styled.div`
    margin: 50px 100px;
    background-color: rgb(128,128,128, .97);
    padding: 10px 30px;
    h1 {
        color: white;
    }
`




const Zen = () => {
//     const {spot} = data
//     return (
//     <div>
//         <Header />
//         <Container>
//             {spot.edges.map(({ node: artist }) => (
//           <div>
//               <h1>{artist.name}</h1>
//               <p>{artist.genre}</p>
//           </div>
//             ))}
            
//             <h1>Learning:</h1>
//             <Item title="Testing" description="Hello this is also a test"/>
//             <h1>Watching:</h1>
//             <Item title="Watching" description="This is description"/>
//             <h1>Listening:</h1>
//             <Item title="Podcast" description="Syntax.fm" />
//         </Container>
//     </div>
//     )
// }

const data = useStaticQuery(graphql`
        query SpotifyTopArtistsQuery {
            allSpotifyTopArtist(
                filter: { time_range: { eq: "short_term" } }
                sort: { fields: order }
              ) {
                edges {
                  node {
                    name
                    genres
                    image {
                        localFile {
                        childImageSharp {
                          fixed(width: 100) {
                            ...GatsbyImageSharpFixed_withWebp
                          }
                        }
                      }
                    }
                  }
                }
              }
        }
    `)
    return (
        <>
            { data.allSpotifyTopArtist.edges &&
                <div className="spotify__top-artists">
                    <h2>Top 20 Artists</h2>
                    <p>
                        These are my top 20 artists from the past four weeks.
                    </p>
                    <div className="spotify__list">
                        {data.allSpotifyTopArtist.edges.map((artist, index) =>
                            <div key={index} className="spotify__list-item d-flex">
                                <div className="spotify__album-cover">
                                    <Img
                                        fixed={artist.node.image.localFile.childImageSharp.fixed} 
                                    />
                                </div>
                                <h3>
                                    <span className="spotify__list-item-number">{index + 1}</span>
                                    { artist.node.name }
                                </h3>
                            </div>
                        )}
                    </div>
                </div>
          }
        </>
    )
}

export default Zen