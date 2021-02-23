import React from "react"
import Header from "../components/Header"
import Post from "../components/Post"
import styled from "styled-components"

const Feed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2em;
`

const BlogPage = () => (
  <div>
    <Header />
    <Feed>
      <Post
        title="Testing"
        text="Testing. That word brings up 2 very different feelings for me. On one hand, when I open up a project with a nicely fleshed out test suite, I am very excited. I don't have to wonder what works and what doesn't! Fully green tests gives me a greater level of confidence that my fix isn't going to bring the app crashing down when I push to production. What a great feeling!<br /><br />
        On the other hand, the thought of *writing* quality tests, fills me with absolute dread. I feel like I can barely write quality production code! What makes me think that I can write quality tests that checks my code?! *Deep Breath* ...Let's talk about tests and what I'm learning.<br /><br />
        I am currently apprenticing with Enok Collective and I love it. The company as a whole is a quality organization. My mentor and I identified some of the areas of my work that could use the most work and would give the most return. I chose testing as a skill that would give me the most benefits starting out. I've been in software for 2 years at this point, and testing has been a part of every job I've worked at. But 2 years in, I still get queasy about the idea of writing a test for my flimsy code (notice, I always write my tests after my code...[more on that later]). Enok strives for Test Driven Development (TDD) in all of the work that they do. TDD is just what it says it is: software development that starts with and is driven by testing. This means **starting** with testing. Starting with testing is a huge mind shift for me. Testing has always been a secondary priority. If I have time, I will throw in a single test and call it a day. With this being my mindset, my code has suffered and I am constantly concerned about the next feature that might break my fragile code and force me to rewrite it.<br /><br />
        This past week I have started a deep dive into best practices of testing and I am attempting to elevate my tests to be &quot;first-class citizens&quot;. Here are the resources that I have taken advantage of: <br/><br />

<ul><li>Blogs and talks</li><br />
    There are so many great blogs and talks out there, but I thoroughly enjoyed these two:<br />
        - [How to Stop Hating Your Tests](https://blog.testdouble.com/talks/2015-11-16-how-to-stop-hating-your-tests/)<br />
        - [First-Class Tests](https://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.html)<br />
<ul><li>Codewars.com</li><br />
    This site allows you to practice coding exercises that are then tested to see if found the correct answer. I have taken the TDD approach to these exercises by first writing failing tests, and then making them pass.<br />
<ul><li>Writing!</li><br />
    This post is my way of solidifying my learning by forcing me to explain my experience.<br /><br />

What I've learned about tests so far:<br /><br />

1. Types of tests<br />

    There are 3 standard types of tests: Unit, Integration, End-to-End. These vary in the amount of code that is being tested. Unit tests are small tests that check individual objects, methods, functions, or components. Unit tests should be small and ubiquitous. If a single unit test just keeps growing and growing, that might be a code-smell that your object/method/function might need to be refactored and split into multiples.<br />

    Integration tests are the next step. These tests ensure that the data is flowing properly between two modules. This should reveal any issues that may arise when you use multiple modules together with each other.<br />

    Finally, there's End-to-End testing. e2e testing is meant to simulate a real user using your application. This provides some more visibility at a higher level by drawing in all of the code from start to finish, dependencies and all, and ensures that everything plays nicely together.<br /><br />

2. Red, Green, Refactor<br />

    Before any production code is written, a *failing* test should be written. This test sets the expectation for what the code should accomplish. After the test is written, the test is run, and you see the red failure, you can now start to write your production code. This code should turn the red test to green, meaning it should fulfill the test's expectation and nothing else! Be sure to keep your code and tests small and simple. Finally, refactor your production code to ensure that the code is efficient and readable. And repeat!<br /><br />

3. Tests are imperative<br />

    Strong, wide-spread tests are the key to writing solid and robust code that can be changed and refactored without the fear of the codebase coming crashing down.<br /><br />

I have so much more to learn and implement in my daily work when it comes to testing and coding in general, but this week has taught me some great lessons and principles."
/>
<div><br/><br/></div>
      <Post
        title="Fortnite Slack App"
        text={
          "I'm lifelong friends with about 4 other guys. And I recently convinced them all to join a Slack channel (one of them is an Android guy, thus the dreaded green messages). Slack is great. I'm a new developer and we've used it at the last two places I've worked. One of the great features of Slack is the great selection of apps and bots that are available to install. I'm attempting to learn backend programming and I'm a big fan of Ruby and Ruby on Rails. Ruby is extremely developer friendly and after you get past it's initial quirks, it's fantastic.<br/><br/>Fortnite is one of the main ways that we all <strike>waste</strike> spend time together and we're always checking in to see when we can all get together and play. All of that culminated in the idea for a Slack bot written in Ruby. This bot allows any of us to ask the bot 'Who is online?'. The bot will go to the Xbox Api and check to see what the status of the 5 guys are, and report back if they are playing Fortnite. The functionality of this is extremely simple. It is built in pure Ruby. No Rails required. There is some external setup required, but the actual program has minimal external specifications.<br/><br/>So lets dive in!<br/><br/>1. Setup<br/><br/>As I said, I used pure Ruby so I started with a gem file and a main file that I named `slack.rb`. I used the following gems:<br/><ul><li>`slack-ruby-bot` --This <a href='https://github.com/slack-ruby/slack-ruby-bot'>gem</a> is crucial to the success of the app as it is what connects the app and Slack</li><li>`xbox-api` --Xbox Doesn't have a Ruby specific API implementation. They do have a C++ <a href='https://docs.microsoft.com/en-us/gaming/xbox-live/introduction-to-xbox-live-apis#xsapi-winrt-based-api'>implementation</a> for all you C++ folk out there. I used the <a href='https://xboxapi.com/'>Unofficial Xbox API</a> provided by <a href='https://github.com/djekl'>Alan Wynn</a>. The docs are great and he provides different implementations for Python and Ruby.</li><li>`json` --JSON is pretty critical when hitting most API's and this [gem](https://github.com/flori/json) allows Ruby and JSON to play nice together.</li><br/><li>`dotenv` --Last but not least, I used [dotenv](https://github.com/bkeepers/dotenv) to hide my Slack and Xbox Api keys.</li></ul> After your gems have been added to your Gemfile, make sure to run <code>bundle install</code> in your terminal to populate your <code>Gemfile.lock</code> file. External set up will require you to get an API key from both Slack and Xbox API. Both keys are fairly straight forward processes.<br/><br/>2. Xbox Api<br/><br/>Before we go too much further, it is important to discuss how this api obtains player data. The api uses the players accountxuid. Instead of adding a separate call to obtain the id of each player, I went ahead and did a bit of the grunt work ahead of time. I used Postman to send a request to the Xbox Api with my friends gamertags (specifically GET 'https://xboxapi.com/v2/xuid/{gamertag}'. Make sure to set your headers with X-AUTH and your api key.) Postman then spit out their xuid and I ended up hard coding this into the program. My thinking behind this is that the program will be slightly more performant without the extra api call.<br/><br/>3. Coding<br/><br/>Head back to your <code>slack.rb</code> file. It's important to require all of your gems at the top of your file so that Ruby knows what to import. I then make my class an instance of the Slack Ruby Bot. After that, I put my api key into a variable named 'client', and I use 'client' as I set up variables for all of my friends. Once those are setup, it's time for the Slack implementation. Slack uses a function called 'command' to provide functionality. This can all be explained much more thoroughly in the Slack Ruby Bot <a href='https://github.com/slack-ruby/slack-ruby-bot'>README</a>. I used the word 'pong' as my Slack keyword for my bot. This keyword will put the bot in motion to go fetch the data and you can change it to whatever keyword you want.<br/><br/>Next comes the functionality. I take the player data I have put into variables and get their 'presence' from the Xbox API and set that to a variable. The data you get back is a Ruby object (I think ¯\\_(ツ)_/¯). I spent the majority of my time on this project looking for some way to parse this data without moving into JSON land. Unfortunately, I was unsuccessful. After I get this Ruby data, I use the JSON gem to get the rest of the data. I call <code>JSON.generate</code> on each of those new variables and set this to <i>another</i> variable. I then call <code>JSON.parse</code> and now I'm in JSON land and I can pull out the data of what they are doing right now. An <code>if</code statement determines what will be printed to Slack, dependent on the player data. After this, save everything, and move over to your terminal and <code>cd</code> into the project. Once you're there, run the following script: <br/><br/><code>SLACK\\_API\\_TOKEN={SLACK API KEY} bundle exec ruby slack.rb</code><br/><br/>This will spin up your app on your local machine. I spent a lot of time trying to push this to Heroku with no luck. Still working on that. Move over to your Slack client and enter the following: @{SLACK BOT  NAME} {YOUR COMMAND} wait a couple seconds and viola! Information!<br/><br/>That's pretty much it! A couple final notes: <ul><li>This is definitely not extremely performant and there are definitely better ways to do this. This is just what I got to work. Let me know what works for you!</li><li>The Xbox API free tier only allows 120 requests per hour. I ran into this limit a couple times during development. The paid tiers aren't too expensive.</li><li>Check out my code on <a href='https://github.com/calebmcquaid/xbox_live_slack_app'>Github</a> to see how I set it up.</li></ul><br/>Thanks for checking out my project! I'd love to hear your experiences and what you think! Happy gaming!"
        }
      />
    </Feed>
  </div>
)

export default BlogPage
