import React, { Component } from "react"
import styled from "styled-components"

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  font-family: "Cabin", sans-serif;
  margin: 2em;
`

const ContainerDiv = styled.div`
  display: flex;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0px 20px 0px 0px;
`

const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
`

const Titles = styled.h3`
  color: white;
  margin-bottom: 40px;
`

const FormInput = styled.input`
  margin: 0px 0px 20px 0px;
  font-size: 25px;
  padding: 5px;
  border-radius: 3px;
  width: 100%;
  background: black;
  border: none;
  border-bottom: 2px solid #8dc53f;
  font-family: 'Cabin';
  &::placeholder {
    color: white;
  }

  @media (max-width: 400px) {
    font-size: 19px;
  }



`

const FormTextArea = styled.textarea`
  margin: 0px 0px 20px 0px;
  font-size: 25px;
  width: 96.5%;
  background: black;
  border: 2px solid #8dc53f;
  border-top: none;
  border-radius: 3px;
  padding: 5px;
  color: white;
  font-family: "Cabin";
  &::placeholder {
    color: white;
  }
  @media (max-width: 400px) {
    font-size: 19px;
  }
`
const StyledButton = styled.button`
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
  @media (max-width: 400px) {
    font-size: 19px;
  }
`

const Contact = () => (
  <CenteredDiv>
    <Container
      action="https://formspree.io/calebmcquaid@gmail.com"
      method="POST"
    >
      <Titles>
        Thanks for stopping by!<br/><br/>Have a website that needs created or reworked? Have a web application
        that you need help with? Want to just say hi?
        <br />
        <br />
        Contact me below!
      </Titles>
      <ContainerDiv>
        <StyledDiv>
          <FormInput type="name" name="full-name" placeholder="Your name" />
        </StyledDiv>
        <StyledDiv>
          <FormInput type="email" name="email" placeholder="Your email" />
        </StyledDiv>
      </ContainerDiv>
      <FormTextArea name="message" placeholder="Your message" rows="10" />
      <StyledButton>Send</StyledButton>
    </Container>
  </CenteredDiv>
)
export default Contact
