import React from "react"
import Typing from "react-typing-animation"
import Cursor from "react-typing-animation/dist/Cursor"

const Hero = props => (
  <div>
    <Typing speed={200} hideCursor={false}>
      <span>
        <h1>Web</h1>
        <h2>Development</h2>
      </span>
    </Typing>
    <p>
      Professional web development is only an email away. Hi, I'm Caleb and I
      spend the majority of my time doing web design and development. Need a
      website, web app, or even a mobile app? You've come to the right place. I
      specialize in frontend technologies such as HTML, CSS, Javascript, and
      React. I also do a bit of backend work as well. Contact me for a quote or
      check out some of my recent work.
    </p>
  </div>
)

export default Hero
