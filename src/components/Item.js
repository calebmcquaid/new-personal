import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
    h2 {
        color: white;
    }
    p {
        color: white;
    }
    margin: 40px;
`

const Item = props => (
    <Container>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <img />
    </Container>
)

export default Item