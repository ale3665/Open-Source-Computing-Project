# Jeopardy Game

This repository contains the source code for a **Jeopardy game** built using **HTML**, **CSS**, and **JavaScript**. The game mimics the format of the popular TV show, allowing players to select questions from different categories and answer them for points. It's a fun and educational way to interact with web technologies and practice basic programming skills.

## Project Overview

The Jeopardy game is designed to be a fully interactive, web-based experience. Users can:
- View different categories and their associated questions.
- Click on a question to reveal the answer.
- Earn points based on the difficulty level of the question they choose.
- Track their score as they progress through the game.

The game features a simple, responsive interface that can be played on both desktop and mobile devices.

## Files Included

- **`index.html`**: 
   - This is the main structure of the game. It contains the HTML layout for the game board, where categories and questions are displayed. It also includes placeholders for the player score and game flow elements.
  
- **`script.js`**: 
   - The JavaScript file handles the game's logic. This file manages the interaction between the user and the game, including:
     - Displaying questions when they are selected.
     - Updating the player's score based on their choices.
     - Keeping track of which questions have been answered.
     - Resetting or starting a new game when needed.
  
- **`style.css`**: 
   - This is the stylesheet that defines the game's visual design. It controls the layout, colors, fonts, button styles, and overall aesthetic. The CSS ensures that the game is responsive and user-friendly on different devices (desktop, tablet, and mobile).

## Features

- **Interactive Game Board**: The main board displays multiple categories with a set of questions. Players click on the value of a question to select it.
- **Dynamic Scoring**: Each question has a point value associated with it. Players earn points by correctly answering questions, and the score updates live.
- **Category Selection**: Players can choose from multiple categories, and each category has a set of questions with varying point values.
- **Answer Reveal**: After selecting a question, players can reveal the answer and see if they were correct.
- **Responsive Design**: The game adapts to different screen sizes and works seamlessly on both desktop and mobile devices.

## How to Run the Game

1. **Clone the repository**: 
   To get started, you can clone the repository to your local machine using the following command:
   ```bash
   git clone https://github.com/ale3665/Open-Source-Computing-Project.git
   ```

2. **Open the Game**:
   - Navigate to the folder where you cloned the repository.
   - Open the `index.html` file in any modern web browser (Google Chrome, Mozilla Firefox, etc.).
   - The game will load, and you can start playing!

3. **Play the Game**:
   - Click on any category and select a question.
   - The question will reveal, and you will have the option to answer.
   - Based on your answer, your score will be updated.

## Technologies Used

This project uses the following technologies:

- **HTML5**: Used for creating the structure and layout of the game.
- **CSS3**: Used for styling the game interface and ensuring it is responsive.
- **JavaScript**: Handles the dynamic behavior of the game, such as the interactivity of the board, scorekeeping, and game flow.

## Future Enhancements

There are several ways this project can be expanded in the future:

- **Winning or Losing Moments**: Add a sound when a player or a team wins or loses.
- **Question Database**: Implement an external database to pull questions from, making the game easily scalable with new categories and questions.
