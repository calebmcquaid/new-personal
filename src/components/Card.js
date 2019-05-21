import React from "react"
import styled, { keyframes } from "styled-components"
import { fadeIn } from "react-animations"

const fadeAnimation = keyframes`${fadeIn}`

const DivLink = styled.a`
  text-decoration: none;
  &:visited {
    text-decoration: none;
    text-decoration-color: black;
    color: black;
  }
`

const Container = styled.div`
  background-image: ${props => `url(${props.testing})`};
  background-size: cover;
  width: 375px;
  height: 325px;
  display: flex;

  @media (max-width: 1200px) and (min-width: 1000.1px) {
    width: 320px;
    height: 270px;
  }

  @media (max-width: 1000px) and (min-width: 425.1px) {
    width: 375px;
    height: 325px;
    margin: 0 0 1em 0;
  }

  @media (max-width: 425px) {
    width: 305px;
    height: 255px;
    margin: 0 0 1em 0;
  }
`

const SubDiv = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  h2 {
    margin-left: 20px;
    text-decoration: none;
    font-size: 40px;
  }
  p {
    display: none;
    margin-left: 20px;
    text-decoration: none;
    margin-right: 20px;
  }
  &:hover {
    flex: 4;
    p {
      display: flex;
    }
    h2 {
      font-size: 28px;
      margin-bottom: 7px;
    }
    animation: 1s ${fadeAnimation};
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: rgb(141, 197, 63, 1);
  }
`

const Card = props => (
  <DivLink href={props.link}>
    <Container testing={props.testing}>
      <SubDiv>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </SubDiv>
    </Container>
  </DivLink>
)

export default Card
