##Trivia Game
*Explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.*
**Installation**
Simply fork this repo and clone it to your computer.

**Approach**
Initially I used separate arrays for my questions and answers. This turned out to be a terrible idea down the line. I was able to rectify the situation by instead creating a class constructor and 10 new variables, each containing one question, set of choices, and an answer. This turned out to be easier in the long run. I ended up using a switch/case method inside of a function to link the questions in the answers. One of my unsolved problems was finding a DRYer way to code this.

**Unsolved Problems**
1. I'm using .splice() to remove the *current* item from the question/answer array. Meaning, after 'next' is clicked, the question should be removed from the array (basically not allowing the question to appear again.) However this method does not work. The splice appears to remove a different item in the array instead of the one I'm asking it to and the questions still repeat.
2. I couldn't figure out how to restart the game (and therefore refilling my question array) without refreshing the page. Once the question Array is emptied it can't seem to refresh.
3. The switch case method was not the greatest idea. It works but it's a cop out. I was trying to find a way to consolidate my correct answer variables.

**Credit**
1. I modeled by button styles after [this](https://tympanus.net/Development/CreativeButtons/)
2. I used my stop watch js exercise almost exactly for the timer on this game
3. I made up all of the questions except for the one about the Gibson guitars [this](http://chartcons.com/120-music-trivia-questions-answers/)

### User Stories

1. The user can read a series of questions and select an answer out of three possible answers.
2. They can click on an answer and find out immediately if they answered correctly or incorrectly.
3. They can move on to the next question whether or not their answer is correct.
4. They can see their final score at the end of the game and exit or play the game again if desired.
5. They can click on the button on the homepage and start playing the game.
