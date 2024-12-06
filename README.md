# Jeopardy Game

This repository contains the source code for a **Jeopardy game** built using **HTML**, **CSS**, and **JavaScript**. The game mimics the format of the popular TV show, allowing players to select questions from different categories and answer them for points. It's a fun and educational way to interact with web technologies and practice basic programming skills.

## Mission Statement

The mission of the Jeopardy Game project is to create an engaging, interactive, and educational web application that allows users to experience the excitement of the popular TV game show, **Jeopardy!**. This project aims to:
- Provide an enjoyable, accessible game for users of all ages.
- Promote learning through fun and interactive gameplay.
- Continuously evolve and improve based on user feedback and contributions.
- Foster an open-source community where anyone can contribute and enhance the project.

Our goal is to make this game a fun and educational experience, encouraging users to learn while playing.

## Code of Conduct

We are committed to providing a welcoming and harassment-free experience for everyone, regardless of their gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, ethnicity, age, religion, or technology choices.

### Our Pledge

In the interest of fostering an open and welcoming environment, we pledge that all participants will:
- Be respectful and considerate to others.
- Communicate openly and respectfully with others, regardless of differences.
- Help others by providing constructive feedback and offering assistance when possible.
- Address negative or harmful behaviors in a respectful manner.

### Our Standards

Examples of behavior that contribute to creating a positive environment include:
- Using welcoming and inclusive language.
- Being respectful of differing viewpoints and experiences.
- Acknowledging and appreciating others’ contributions.

Examples of unacceptable behavior include:
- The use of sexualized language or imagery and unwelcome advances.
- Trolling, insulting/derogatory comments, and personal or political attacks.
- Harassment, intimidation, or bullying.

### Enforcement

Participants asked to stop any unacceptable behavior are expected to comply immediately. If a participant engages in unacceptable behavior, the project maintainers may take any action they deem appropriate, including a temporary or permanent ban from the project.

For questions or concerns, please reach out to the maintainers via [contact information or GitHub issues].

## Project Overview

The Jeopardy game is designed to be a fully interactive, web-based experience. Users can:
- View different categories and their associated questions.
- Click on a question to reveal the answer.
- Earn points based on the difficulty level of the question they choose.
- Track their score as they progress through the game.

The game features a simple, responsive interface that can be played on both desktop and mobile devices.

## Files Included

- **`welcome.html`**: 
   - The `welcome.html` file serves as the entry point for the Jeopardy game. It provides an introductory page where users can learn about the game, see instructions, and navigate to start the game. This page helps set up the user's experience before diving into the gameplay.

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
