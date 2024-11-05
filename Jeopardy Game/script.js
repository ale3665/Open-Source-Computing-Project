let playerScore = 0;
let currentValue = 0;
let gameMode = 'solo'; // Can be 'solo' or 'team'
let currentTeam = 0;
let teams = [];

const questions = {
    "Movies": {
        100: { question: "Who is Thanos?", answer: "Marvel villain erased half the universe with a snap." },
        200: { question: "Who is Shrek's annoying best friend?", answer: "Donkey." },
        300: { question: "What is Fast & Furious?", answer: 'A film series all about fast cars and "family."' },
        400: { question: "In Kung Fu Panda, What is Po's favorite food/s?", answer: "Dumplings and noodles." },
        500: { question: "What is Inception?", answer: "Leonardo DiCaprio starred as a dream thief in this 2010 film." }
    },
    "Superheroes": {
        100: { question: "What colour is the Hulk?", answer: "Green." },
        200: { question: "Who is Spider-Man?", answer: "This hero is known for his red suit and web-slinging abilities." },
        300: { question: "Who is Batman?", answer: "This superhero wears a black suit and protects Gotham City." },
        400: { question: "What planet is Superman from?", answer: "Planet krypton." },
        500: { question: "What characterizes Wonder Woman?", answer: "This Amazonian warrior wields a Lasso of Truth." }
    },
    "Musical Legends": {
        100: { question: 'Which singer is known for the song "Shape of You"?', answer: "Ed Sheeran." },
        200: { question: "Who is Elton John?", answer: 'A singer known as the "Rocket Man".' },
        300: { question: 'What singer wrote the popular song called "All of Me"?', answer: "John Legend." },
        400: { question: "Who is Michael Jackson?", answer: "He popularized the moonwalk and performed Thriller." },
        500: { question: "What is Beyoncé's fandom?", answer: 'This singer’s fans are called the "Beyhive".' }
    },
    "TV Phenomena": {
        100: { question: "Where The Simpsons live?", answer: "This animated family lives in Springfield." },
        200: { question: "What is Game of Thrones?", answer: "This fantasy show revolves around the Iron Throne." },
        300: { question: "What is The Office?", answer: "This show is set in a paper company in Scranton." },
        400: { question: "What is the name of the small town where the TV show Gilmore Girls takes place?", answer: "Stars Hallow." },
        500: { question: 'What famous sitcom that aired from 1994 to 2004 famously debated about cheating "on a break"?', answer: "Friends." }
    },
    "Pop Icons": {
        100: { question: "Which Justin Bieber song was a hit?", answer: "Baby." },
        200: { question: "Which Gaga's Iconic dress was?", answer: "She wore a meat dress at the VMAs." },
        300: { question: "Who started her career on the TV show Victorious?", answer: "Ariana Grande." },
        400: { question: "Who is a well-known R&B and pop singer from Barbados?", answer: "Rihanna." },
        500: { question: "Who is known for The Blueprint album?", answer: "The rapper Jay-Z." }
    },
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

    // Show the board and team scores
    document.getElementById('team-setup').style.display = 'none';
    document.getElementById('scoreboard').style.display = 'block';
    document.querySelector('.board').style.display = 'grid';

    updateTeamScores();
    updateCurrentTurn();
}

function updateTeamScores() {
    const teamScoresDiv = document.getElementById('team-scores');
    teamScoresDiv.innerHTML = ''; // Clear the previous scores

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
    } else {
        if (isCorrect) {
            teams[currentTeam].score += currentValue;
        } else {
            teams[currentTeam].score -= currentValue;
        }
        updateTeamScores();
        currentTeam = (currentTeam + 1) % teams.length; // Move to the next team's turn
        updateCurrentTurn();
    }

    closeModal();
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}