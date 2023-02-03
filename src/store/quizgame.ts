import { createSlice } from '@reduxjs/toolkit';
import ScoreBoard from '../components/ScoreBoard';


type stateType = {
    gameStarted: boolean
    selectedAnswer: string,
    possibleAnswers: string[],
    correctAnswer: string,
    question: string,
    score: number,
    lives: number[],
    difficulty: string,
    questionsAnswered: number,
    skip: boolean,
    timerIsPlaying: boolean,
    pausedAlready: boolean,
    playerName: string,
    scoreBoard: Score[]
}

export type Score = {
    name: string,
    score: number,
    questionsAnswered: number
}

const initialQuizState: stateType = {
    gameStarted: false,
    selectedAnswer: "",
    possibleAnswers: [],
    correctAnswer: "",
    question: "",
    score: 0,
    lives: [3, 3, 3],
    difficulty: "",
    questionsAnswered: 0,
    skip: true,
    timerIsPlaying: true,
    pausedAlready: false,
    playerName: "",
    scoreBoard: []
};


const quizSlice = createSlice({
    name: 'quiz',
    initialState: initialQuizState,
    reducers: {
        setSelectedAnswer(state, action) {
            state.selectedAnswer = action.payload
        },
        newQuestion(state, action) {
            state.correctAnswer = action.payload.correctAnswer;
            state.possibleAnswers = action.payload.possibleAnswers;
            state.question = action.payload.question
            state.difficulty = action.payload.difficulty
            state.selectedAnswer = ""
        },
        setAllAnswers(state, action) {
            state.possibleAnswers = action.payload
        },
        startGame(state) {
            state.gameStarted = true
        },
        endGame(state) {
            state.gameStarted = false
        },
        raiseScore(state, action) {
            state.score += action.payload
        },
        lowerScore(state, action) {
            state.score -= action.payload
        },
        raiseLives(state) {
            state.lives.push(3)
        },
        questionCorrect(state) {
            let lastElement = state.lives.length - 1
            if (state.lives[lastElement] === 3) {
                state.lives.push(1)
            } else {
                state.lives[lastElement]++
            }
        },
        lowerLives(state) {

            let lastElement = state.lives.length - 1
            if (state.lives[lastElement] === 3) {
                state.lives.pop()
            } else {
                state.lives.pop()
                state.lives.pop()
            }
        },
        incrementQuestionsAnswered(state) {
            state.questionsAnswered++
        },
        resetQuestionsAnswered(state) {
            state.questionsAnswered = 0
        },
        resetGame(state) {
            state.questionsAnswered = 0;
            state.score = 0;
            state.lives = [3, 3, 3];
            state.skip = true;
            state.pausedAlready = false
        },
        resetScore(state) {
            state.score = 0
        },
        setSkipFalse(state) {
            state.skip = false
        },
        setSkipTrue(state) {
            state.skip = true
        },
        pauseTimer(state) {
            state.timerIsPlaying = false
            state.pausedAlready = true
        },
        unPauseTimer(state) {
            state.timerIsPlaying = true
        },
        setPlayerName(state, action) {
            state.playerName = action.payload
        },
        setScoreBoard(state, action) {
            state.scoreBoard = action.payload
        }
    },
});

export const quizActions = quizSlice.actions;



export default quizSlice.reducer;


