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
        title="Clean Code - Naming"
        text="This week I moved on from automated testing to starting to study clean code. A few weeks ago, I was not at all interested in writing tests. I knew that I should be writing tests, but the execution was lacking. Now I know testing is one of the essential building blocks to writing great production code. While I was learning how to write proper tests, I spent some time reading as well. I started with The Clean Coder by Robert Martin. I would highly recommend this book. The book covers topics from why developers should lead with tests to how to interact with other teammates and stakeholders.<br/><br/>
        Here are some of my biggest takeaways from The Clean Coder on the topic of Test Driven Development:<br/><br/>
        1. “How can you consider yourself to be a professional if you do not know that all your code works?”<br/><br/>
        - It’s easy to guess around at an answer to a coding problem and stumble upon the right answer. You shrug and say “well, if it works, it works!”, and move on. As professional developers, we must know how our code works and understand what it’s doing. The best way to do that is to declare the “boundaries” for how the code should operate by writing a test before the production code.<br/><br/>
        2. TDD provides a cycle for producing code.<br/><br/>
        - As I have said before, I like having processes I can follow in my workflow. The Red/Green/Refactor cycle is a great way to efficiently produce good quality code.<br/><br/>
        3. “The tests you write first are offense. The tests you write after production code are defense.”<br/><br/>
        - Writing tests after you have written the code is just confirming the biases you have already placed into your code. Always write your tests first.<br/><br/>
        While the book is titled The Clean Coder, it does not take much time delving into what Clean Code is. This is the topic that I have been studying the past few days and what I will be working on going forward.<br/><br/>
        So what is clean code? Clean code is efficient, human-readable code. Oftentimes, code is written that runs and works well for its intended purpose, but when the next developer comes in to look at the code, they are lost or they might need to spend a large amount of time getting up to speed on how the code works. Or maybe the code works but it only works if you run the code on a specific machine, in the Eastern Standard timezone, while standing on your head. The next developer to work on the project will probably find it easier and faster to scrap the project and start over.<br/><br/>
        Clean code should read as close to written prose as possible and this starts with naming things properly. Instead of declaring methods and variables with single letters or non-descriptive names, we should be naming them with names that illustrate their purpose and what they might accomplish.<br/><br/>
        i.e. <code>var totalSalesTax = orderTotal * percentSalesTax</code> is better than <code>var tST = oT * pST</code><br/><br/>
        Many people believe that if a developer needs to add comments in their code to document what is happening, the naming is not descriptive enough. Code that is understandable without comments or dedicated documentation is called “self-documenting code”.<br/><br/>
        What constitutes a good name? Does it have to be a long name? Not necessarily. Long names can be descriptive but they can also get confusing when there are other similar names. Take this example from “Uncle Bob” Martin in Clean Code: <pre><code>XYZControllerForEfficientHandlingOfStrings</code></pre> and <pre><code>XYZControllerForEfficientStorageOfStrings</code></pre> These are both very descriptive names, but if they are used in conjunction with one another, it could be very easy to confuse the two. Human-readable doesn’t just mean a long name.<br/><br/>
        Does this degrade the performance of the application? Back in the days of punch-card programming, a descriptive name may have been a drag on the overall system. With the processors and computers we have today, this should not be a concern. Any performance hits will be outweighed by the benefits of having clean code.<br/><br/>
        What elements in the code get the special naming treatment? <i>All of it.</i> Professional developers should strive to name everything in their application descriptively. Tests should perfectly describe what they are testing. Variable names should state what they contain. Function names should be a good representation of what happens in the function. Even your commit messages should be descriptive and self-explanatory.<br/><br/>
        What are the benefits of proper naming? The benefits of proper naming can be boiled to more time, less stress, and more money! Understanding what each piece of the code does right away will allow you to quickly read through the codebase saving you time and the headache of testing each module. And we all know that time is money. The more time that can be spent writing new features and fixing bugs is more money in everyone’s pocket.<br/><br/>
        Here is some more reading material on the proper way to implement good names in clean code:<br/><br/>
        <a href='https://dzone.com/articles/naming-conventions-from-uncle-bobs-clean-code-phil'>Naming Conventions</a><br/><br/>
        <a href='https://sourcemaking.com/refactoring/rename-method'>Rename Method</a><br/><br/>
        More to come on clean code! Stay tuned."
        />
        <div><br/><br/></div>
      <Post
        title="Mocks"
        text="This past week I have been developing a command-line todo app. This app is one of my first forays in using Test Driven Development in a “production” environment. Before any commands go into the command line, I set out to write a decent suite of tests that will dictate where my application would go and what it would ultimately be capable of. This new way of developing is a difficult change of pace, but I am learning to love it. In my previous jobs, there has always been a multi-step process for how to accomplish a task, with little deviation. Since getting into programming, I have felt like there is rarely an exact step-by-step process for anything and it has felt overwhelming at times. The TDD approach brings back a bit of that feeling of step-by-step processes. Instead of feeling like I need to develop this huge, nebulous project, I am only having to deal with bite-sized functions that have 1 purpose. A much less anxiety-inducing task.<br/><br/>
        While this has been a great revelation, it hasn’t all been rainbows and butterflies. I tried to get creative with my tests and decided to test whether the returning message in the console had color. Adding color to the node console doesn’t come built-in, so I added the chalk package to my project. The test started as follows:<br/><br/>
        <pre><code>test(“should return a colorful message”, () => {})</code></pre><br/><br/>
        So how do I test this? What a great question. This was where I was introduced to using mocks. I have heard of mocks before but in my limited testing experience, I’ve never really taken the time to determine how they work and the processes underlying them. Mocks are fake objects that are created in tests to simulate the actions of real objects or modules. They are also referred to as “test doubles”. Once the mocks are properly set up, they can be inserted into tests and the test runner will assume that whatever is mocked will act properly.<br/><br/>
        In the example above, I decided to use the chalk package to add a little color to my application. I use this package by calling the chalk object, the color method I want to display, and inside that method, I will put the text that I want to color. It looks like the following:<br/><br/>
        <pre><code>function colorTodo(todo) {
          return chalk.green(todo)
       }</code></pre><br/><br/>
       One concept I had to “work through” was the concept of what I wanted out of this test. Do I want to test the package that I am importing? Or do I want to just see the output that I am expecting to come out of this method? I am just looking for the output. The job of testing outside modules should fall to the developers of those modules and I can assume that these modules will work as intended.<br/><br/>
       I will go ahead and assume that everything in that module is working correctly and mock that method. So let’s set that up. I am using Jest as my test runner, and I get some great mocking functionality out of the box. Because I am going to be using chalk in my testing file, I will go ahead and require it like I would in other files.<br/><br/>
       <pre><code>const chalk = require('chalk')</code></pre><br/><br/>
       Next, in my test that I set up above, I will mock out the chalk module.<br/><br/>
       <pre><code>test('should return a colorful message', () => {
        chalk.green = jest.fn()
     })</code></pre><br/><br/>
     To me, this line is saying “if you come across chalk.green in this test, substitute that with a fake function that will work every time.”
     Now, I should be able to write the rest of my test just like normal:<br/><br/>
      <pre><code>const chalk = require('chalk')
      test('should return a colorful message', () => {
         chalk.green = jest.fn()
         const todo = 'This message looks cool!'
         colorTodo(todo)
         expect(chalk.green).toHaveBeenCalledTimes(1)
      })<br/><br/>
      As you can see, the only verification we are doing is verifying that the mocked method was called successfully.
      Now that we have a (hopefully) failing test, let’s write the code to make it pass. Because we are only testing the chalk method, we shouldn’t try to do anything else. We should only try to call the method once.<br/><br/>
      <pre><code>const chalk = require(‘chalk’)
      function colorTodo(todo) {
         return chalk.green(todo)
      }</code></pre><br/><br/>
      Now your test and output are both green!
This example was extremely helpful for me to wrap my mind around mocking and testing in general. On to more testing practice!
"
      />
      <div><br/><br/></div>
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
