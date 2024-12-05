let playerScore = 0;
let currentValue = 0;
let gameMode = 'solo'; // 'solo' or 'team'
let currentTeam = 0;
let teams = [];

let totalQuestionsAnswered = 0;
const totalQuestions = 25; // 5 categories * 5 questions each

const questions = {
    "movies": {
        100: { question: "Who is Thanos?", answer: "Marvel villain erased half the universe with a snap.", hint: "He collects Infinity Stones." },
        200: { question: "Who is Shrek's annoying best friend?", answer: "Donkey.", hint: "He is a talking donkey." },
        300: { question: "What is Fast & Furious?", answer: 'A film series all about fast cars and "family."', hint: "It's all about speed and bonds." },
        400: { question: "In Kung Fu Panda, What is Po's favorite food/s?", answer: "Dumplings and noodles.", hint: "A type of steamed or boiled delicacy." },
        500: { question: "What is Inception?", answer: "Leonardo DiCaprio starred as a dream thief in this 2010 film.", hint: "Dreams within dreams." }
    },
    "superheroes": {
        100: { question: "What colour is the Hulk?", answer: "Green.", hint: "Think of the color of envy." },
        200: { question: "Who is Spider-Man?", answer: "This hero is known for his red suit and web-slinging abilities.", hint: "Bitten by a spider." },
        300: { question: "Who is Batman?", answer: "This superhero wears a black suit and protects Gotham City.", hint: "He's known as the Dark Knight." },
        400: { question: "What planet is Superman from?", answer: "Planet Krypton.", hint: "It exploded, forcing him to Earth." },
        500: { question: "What characterizes Wonder Woman?", answer: "This Amazonian warrior wields a Lasso of Truth.", hint: "She's from Themyscira." }
    },
    "musical legends": {
        100: { question: 'Which singer is known for the song "Shape of You"?', answer: "Ed Sheeran.", hint: "He's a British singer with red hair." },
        200: { question: "Who is Elton John?", answer: 'A singer known as the "Rocket Man".', hint: "Famous for his flamboyant glasses." },
        300: { question: 'What singer wrote the popular song called "All of Me"?', answer: "John Legend.", hint: "He is named after a title given to historical icons." },
        400: { question: "Who is Michael Jackson?", answer: "He popularized the moonwalk and performed Thriller.", hint: "Known as the King of Pop." },
        500: { question: "What is Beyoncé's fandom?", answer: 'This singer’s fans are called the "Beyhive".', hint: "Think of bees and their Queen." }
    },
    "tv phenomena": {
        100: { question: "Where The Simpsons live?", answer: "This animated family lives in Springfield.", hint: "A common town name in the U.S." },
        200: { question: "What is Game of Thrones?", answer: "This fantasy show revolves around the Iron Throne.", hint: "Winter is coming." },
        300: { question: "What is The Office?", answer: "This show is set in a paper company in Scranton.", hint: "Dunder Mifflin is the company name." },
        400: { question: "What is the name of the small town where the TV show Gilmore Girls takes place?", answer: "Stars Hollow.", hint: "A celestial name paired with a shelter." },
        500: { question: 'What famous sitcom that aired from 1994 to 2004 famously debated about cheating "on a break"?', answer: "Friends.", hint: "Pivot!" }
    },
    "pop icons": {
        100: { question: "Which Justin Bieber song was a hit?", answer: "Baby.", hint: "A simple word often used for affection." },
        200: { question: "Which Gaga's Iconic dress was?", answer: "She wore a meat dress at the VMAs.", hint: "Think of raw material." },
        300: { question: "Who started her career on the TV show Victorious?", answer: "Ariana Grande.", hint: "Her last name means 'large' in Spanish." },
        400: { question: "Who is a well-known R&B and pop singer from Barbados?", answer: "Rihanna.", hint: "She created Fenty Beauty." },
        500: { question: "Who is known for The Blueprint album?", answer: "The rapper Jay-Z.", hint: "Married to Beyoncé." }
    }
};

function startGame(mode) {
    gameMode = mode;
    document.getElementById('mode-selection').style.display = 'none';

    if (gameMode === 'solo') {
        document.getElementById('scoreboard').style.display = 'block';
        document.querySelector('.board').style.display = 'grid';
    } else {
        document.getElementById('team-setup').style.display = 'block';
    }
}

function initializeTeams() {
    const teamCount = parseInt(document.getElementById('team-count').value);
    for (let i = 0; i < teamCount; i++) {
        teams.push({ name: `Team ${i + 1}`, score: 0 });
    }

    document.getElementById('team-setup').style.display = 'none';
    document.getElementById('scoreboard').style.display = 'block';
    document.querySelector('.board').style.display = 'grid';

    updateTeamScores();
    updateCurrentTurn();
}

function updateTeamScores() {
    const teamScoresDiv = document.getElementById('team-scores');
    teamScoresDiv.innerHTML = '';

    teams.forEach((team, index) => {
        const teamDiv = document.createElement('div');
        teamDiv.textContent = `${team.name}: ${team.score}`;
        teamDiv.id = `team-score-${index}`;
        teamScoresDiv.appendChild(teamDiv);
    });

    teamScoresDiv.style.display = 'block';
}

function updateCurrentTurn() {
    document.getElementById('current-turn').textContent = `Current Turn: ${teams[currentTeam].name}`;
    document.getElementById('current-turn').style.display = 'block';
}

function showQuestion(category, value, element) {
    const questionData = questions[category][value];
    if (questionData) {
        currentValue = value;
        document.getElementById('question-text').textContent = questionData.question;
        document.getElementById('answer-text').textContent = questionData.answer;
        document.getElementById('answer-text').style.display = 'none';
        document.getElementById('modal').style.display = 'block';

        element.style.pointerEvents = 'none';
        element.style.backgroundColor = '#aaa';
    }
}

function revealAnswer() {
    document.getElementById('answer-text').style.display = 'block';
}

function addPoints(isCorrect) {
    if (gameMode === 'solo') {
        if (isCorrect) {
            playerScore += currentValue;
        } else {
            playerScore -= currentValue;
        }
        document.getElementById('player-score').textContent = playerScore;
    } else if (gameMode === 'team') {
        if (isCorrect) {
            teams[currentTeam].score += currentValue;
        } else {
            teams[currentTeam].score -= currentValue;
        }
        updateTeamScores();
        currentTeam = (currentTeam + 1) % teams.length;
        updateCurrentTurn();
    }

    totalQuestionsAnswered++;
    if (totalQuestionsAnswered === totalQuestions) {
        endGame(); // Ensure endGame is called
    }

    closeModal();
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Chatbot logic
function toggleChatbox() {
    const chatbox = document.getElementById('chatbox');
    chatbox.classList.toggle('hidden');
}

function askChatbot() {
    const input = document.getElementById('chatbot-input').value.toLowerCase();
    const responseDiv = document.getElementById('chatbot-response');

    const match = input.match(/hint for (.+?) (\d+)/);
    if (match) {
        const category = match[1].toLowerCase();
        const value = parseInt(match[2], 10);

        if (questions[category] && questions[category][value]) {
            responseDiv.textContent = `Hint: ${questions[category][value].hint}`;
        } else {
            responseDiv.textContent = "Sorry, I couldn't find a hint for that category and value.";
        }
    } else {
        responseDiv.textContent = "Please ask in the format: 'Hint for [Category] [Value]'.";
    }

    document.getElementById('chatbot-input').value = '';
}

// End game logic
function endGame() {
    console.log("EndGame triggered");
    console.log("Game Mode:", gameMode);
    console.log("Teams:", teams);

    const endGameMessageDiv = document.getElementById('end-game-message');

    if (gameMode === 'solo') {
        console.log("Solo Mode Final Score:", playerScore);
        if (playerScore > 3750) {
            endGameMessageDiv.textContent = `🎉 Congratulations! You won with a total score of ${playerScore}! 🎉`;
        } else {
            endGameMessageDiv.textContent = "😔 Better luck next time! Keep practicing for the next game.";
        }
    } else if (gameMode === 'team') {
        console.log("Team Mode: Calculating winning team...");
        let winningTeam = teams[0];
        for (let i = 1; i < teams.length; i++) {
            if (teams[i].score > winningTeam.score) {
                winningTeam = teams[i];
            }
        }
        console.log("Winning Team:", winningTeam);

        if (winningTeam) {
            endGameMessageDiv.textContent = `🎉 Congratulations ${winningTeam.name}! You won with a score of ${winningTeam.score}! 🎉`;
        } else {
            endGameMessageDiv.textContent = "It's a tie! No clear winner this time.";
        }
    }

    // Display the message and launch confetti
    endGameMessageDiv.style.display = 'block';
    console.log("Displaying endGame message");
    launchConfetti();
    console.log("Confetti launched");

    // Disable the game board
    document.querySelector('.board').style.pointerEvents = 'none';
    document.querySelector('.board').style.opacity = '0.5';
}

function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) {
        console.error("Confetti canvas not found!");
        return;
    }
    const myConfetti = confetti.create(canvas, { resize: true });
    myConfetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });
    console.log("Confetti function executed");
}
