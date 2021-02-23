import React from "react"
import Card from "../components/Card"
import Header from "../components/Header"
import wecompete from "../images/wecompete.png"
import songspot from "../images/songspot.png"
import slack from "../images/slack.png"
import styled from "styled-components"

//mobile: 0-600
//tablet: 600 - 900
//reg desktop: 1200 - 1800
//large desktop: 1800 - 2200

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 150px;
  font-family: "Cabin", sans-serif;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`

const WorkPage = () => (
  <div>
    <Header />
    <Container>
      <Card
        link="https://wecompete.herokuapp.com"
        testing={wecompete}
        title="WeCompete"
        content="This Ruby project was our final project in my coding bootcamp. It is a cross-platform, fitness competition app. You can compete with your friends on Strava or Fitbit. This was a technically difficult project as it required me to write 2 original OAuth implementations to get user data."
      />{" "}
      <Card
        link="https://songspot.co"
        testing={songspot}
        title="SongSpot"
        content="Songspot was built for NodeKnockout, a hackathon that requires a Node implementation. It's essentially Instagram for music. We ended up doing the majority of the project in React with a Node backend. I was on a team of 4 people and we were super happy with our product. No awards, but we thought ours was the best :)"
      />{" "}
      <Card
        link="https://github.com/calebmcquaid/xbox_live_slack_app"
        testing={slack}
        title="Slack App"
        content="I built this Slack bot in Ruby in a day. Fortnite is big in my friend group and we are always wondering who's online? This bot makes things much easier. Check out the blog post I wrote about my experience!"
      />{" "}
    </Container>
  </div>
)

export default WorkPage
