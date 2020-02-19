# Snake
This is the repository for the front-end of this Snake game. It is built with React, and basically some div tags pretending to be pixels. The game is controlled and started by the arrow keys (click on the game board and try the arrow keys again if the game is not responding). Your goal is to navigate the green snake toward the red food pellets. Each time you eat one, the snake will get one block longer and increase your score. Colliding with the boundaries or the snake's steadily growing body will end the game. When you lose, you will be able to submit your score to the leaderboard, although only the top ten scores will be displayed. You will also be presented with a "Play Again" button to restart the game and play another round. This information is also available in game by pressing the "Learn How to Play" button.
# Links
- Deployed and Playable: https://snake-game-react-77b60.firebaseapp.com/
- Front-end Repo: https://github.com/CarlKarlQarl/Snake-Game-React
- Back-end Repo: https://github.com/CarlKarlQarl/Snake-Game-Rails
- Local repos (because I'm going to forget): 
    - /Users/flatironschool/Flatirons/4Mod/playground/array-of-array-of-squares
    - /Users/flatironschool/Flatirons/4Mod/playground/snake-highscores
# Legend and Controls
- Green Blocks: Snake
- Red Blocks: Food
- Arrow Keys: Change direction

# Known Bugs and Future Changes
- You are able to move backward into your own body, which is a collision, and will triggger a game over. This should not be difficult to fix, but I'd like to refactor movement code blocks first. They turned into a lot of redundant code when I was working on collisions.
- The alternating colors on the snake make it cute and give it a little more character than a single color, but I've received several complaints about it hurting player's eyes. I'd like to add an option to change some of the style and appearance of the game.
- Pressing any other button than the arrows keys pauses the game. In an earlier version, this would crash the game, so I wrote a dynamic dispatch to ignore anything other than arrow keys. However, while I was writing a way to reinitialize the game board and restart the game, I seem to have circumvented the dynamic dispatch. You can un-pause the game by hitting the arrows again, so I consider this much better than the game crashing, but it does allow for the player to slow the game down and play as carefully as they want.
- The leaderboard will optimistically render the user's new highscore and send a fetch/post request to the back-end, but other user's new highscores will not appear until the game is reloaded. This will likely need more than my simple fetches, but would be a nice addition later on.