import React from "react"
import styled from "styled-components"
import Markdown from 'markdown-to-jsx'

const Color = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 700px;
  background-color: rgb(128,128,128, .97);
  font-family: 'Cabin', sans-serif;
  padding: 10px 30px 30px;
`


const Title = styled.div`
  color: #8dc53f;
`

const ContentDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  a:link {
    color: #8dc53f;
  }
  a:visited {
    color: #8dc53f;
  }
`

const Date = styled.p`
  margin-top: 0px;
`



const Post = props => (
  <Color>
    <Title>
      <h1>{props.title}</h1>
    </Title>
    <Date>
      - {props.date}
    </Date>
    <ContentDiv>
      <Markdown>{props.text}</Markdown>
    </ContentDiv>
  </Color>
)

export default Post
