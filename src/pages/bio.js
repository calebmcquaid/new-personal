import React from "react"
import Header from "../components/Header"
import styled from "styled-components"
import caleb from "../images/caleb.png"

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2em;
  align-items: center;
`

const Content = styled.p`
    display: flex;
    color: white;
    flex-wrap: wrap;
    width: 50em;
    padding: 2em;
    line-height: 1.5em;
    font-size: 1.3em;
    background-color: rgb(128,128,128, .97);
  
  @media (max-width: 1200px) and (min-width: 800px) {
    width: 30em;
  }

  @media (max-width: 799.99px) and (min-width: 550px) {
    width: 20em;
  }

  @media (max-width: 549.99px) and (min-width: 300px) {
    width: 15em;
    padding: 1.3em;
    font-size: 1em;
  }
`

const Container = styled.div`
  background-image: ${props => `url(${props.testing})`};
  background-size: cover;
  border-radius: 8.5em;
  width: 17em;
  height: 17em;

  @media (max-width: 1000px) and (min-width: 300px) {
    width: 17em;
    height: 17em;
    border-radius: 8.5em;
    margin: 0 0 1em 0;
  }
`

const Title = styled.h1`
  color: #8dc53f;
  margin-top: 1em;
`

const BioPage = () => (
  <div>
    <Header />
    <Feed>
        <Container testing={caleb} />
        <Title>Caleb McQuaid</Title>
        <Content>Hello! My name is Caleb McQuaid and I am a software apprentice at Enok Collective. Enok is a small software group that specializes in software craftsmanship. The focus on being a master of my craft has been a great and different way to look at writing code and developing software for me. <br/>While that is my primary postition, I am also available for freelance and contract work! I have experience in building anything from Slack bots in Ruby to writing original OAuth strategies for my cross-platform, fitness application. When I'm not programming, I am typically spending time with my wife and our neighbors. Feel free to poke around my website, Twitter, and reach out if you need anything!<br/><br/> -Caleb</Content>
    </Feed>
  </div>
)

export default BioPage