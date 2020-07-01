import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  font-weight: 600;
  background: black;
  font-family: "Proxima-Nova", sans-serif;
`
const Title = styled.div`
  justify-content: left;
  margin: 10px 0px 10px 40px;

  @media (max-width: 320px) {
    font-size: 30px;
    margin: 20px 0px 0px 18px;
    line-height: 18px;
  }

  @media (max-width: 600px) {
    margin: 45px 0px 0px 18px;
  }
`
const Nav = styled.div`
  display: flex;
  margin: 20px;

  @media (max-width: 600px) {
    margin: 50px 10px 5px 5px;
  }
`

const MainLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: #8dc53f;
  font-size: 36px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`

const TitleLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: white;
  font-size: 36px;

  @media (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 0px;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  
  margin: 20px;
  color: white;
  text-decoration: none;
  font-size: 25px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    to right,
    #8dc53f,
    #8dc53f 50%,
    white 50%);
    background-size: 200% 100%;
    background-position: 100%;
  &:hover {
      transition: all 0.3s cubic-bezier(0.000, 0.000, 0.230, 1);
      background-position: 0%;
    }
  }

  @media (max-width: 500px) {
    font-size: 15px;
    margin: 5px;
  }
`

class Header extends Component {
  render() {
    return (
      <Container>
        <Title>
          <MainLink to={"/"}>//</MainLink>
          <TitleLink to={"/"}>Caleb McQuaid</TitleLink>
        </Title>
        <Nav>
          <StyledLink to={"/work"}>Work</StyledLink>
          <StyledLink to={"/bio"}>Bio</StyledLink>
          <StyledLink to={"/blog"}>Blog</StyledLink>
          <StyledLink to={"/zen"}>Zen Garden</StyledLink>
          <StyledLink to={"/contact"}>Contact</StyledLink>
        </Nav>
      </Container>
    )
  }
}
export default Header


