import React from "react"
// import Header from "../components/Header"
import Contact from "../components/Contact"
import { Link } from "gatsby"
import Header from "../components/Header"
import styled, { keyframes } from "styled-components"
import { fadeIn } from "react-animations"

const fadeAnimation = keyframes`${fadeIn}`

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: ${props => props.divMargin}
  align-items: center;
  animation: 4s ${fadeAnimation};
  font-family: 'Cabin', sans-serif;

  @media (max-width: 600px){
    margin: ${props => props.phoneMargin}
  }
  @media (max-width: 800px){
    margin: ${props => props.divMargin}
  }
`

const Title = styled.h1`
  display: flex;
  color: white;
  font-size: 70px;
  margin-bottom: 0px;

  @media (max-width: 600px) {
    text-align: center;
    font-size: 40px;
  }
  @media (max-width: 800px) and (min-width: 600.1px) {
    text-align: center;
    font-size: 60px;
  }
  @media (max-width: 1100px) and (min-width: 800.1px) {
    text-align: center;
    font-size: 50px;
  }
`

const Subheading = styled(props => <Link {...props} />)`
  display: flex;
  color: ${props => props.color};
  font-size: ${props => props.size};
  margin: 10px 8px 40px 7px;
  text-decoration: none;
`

const Button = styled(props => <Link {...props} />)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  width: 140px;
  height: 45px;
  border-radius: 5px;
  border: 1.5px solid #8dc53f;
  font-size: 20px;
  font-family: "Cabin", sans-serif;
  text-decoration: none;
  &:hover {
    background-color: #8dc53f;
    color: black;
    text-decoration: none;
  }
`

const Line = styled.hr`
  display: flex;
  width: 0.5px;
  background-color: white;
  height: 30px;
  border: 1px solid white;
  margin: -30px 5px 0px 5px;
`

function App() {
  return (
    <div>
      <Header />
      <FlexDiv divMargin="80px 0px 10px 0px" phoneMargin="20px 0px 10px 0px">
        <Title>We'll make something great together</Title>
      </FlexDiv>
      <FlexDiv divMargin="0px">
        <Subheading color="grey" size="24px" to="/work">
          See my work
        </Subheading>
        <Line />
        <Subheading color="grey" size="24px" to="/blog">
          I have a blog
        </Subheading>
      </FlexDiv>
      <FlexDiv divMargin="0px">
        <Button to="/contact">Let's Talk</Button>
      </FlexDiv>
    </div>
  )
}
export default App

// animation: ${fade} fade-in 3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
