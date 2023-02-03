import { quizActions } from "./quizgame";
import QuestionModel from '../models/question'
import { Dispatch } from "react";
import { dispatchStore } from '../store/index'



export const fetchQuestion = () => {
    return async (dispatch: typeof dispatchStore) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://the-trivia-api.com/api/questions?limit=1&region=US'
            );

            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }

            const data = await response.json();

            return data[0];
        };
        try {
            const questionData: QuestionModel = await fetchData()
            dispatch(
                quizActions.newQuestion({
                    correctAnswer: questionData.correctAnswer,
                    possibleAnswers: shuffle(questionData.incorrectAnswers.concat(questionData.correctAnswer)),
                    question: questionData.question,
                    difficulty: questionData.difficulty
                })
            );
            dispatch(quizActions.setSelectedAnswer(""))
        } catch (error) {
            throw new Error('bad');
        }
    }
}

export const addFinalScore = (game) => {
    return async () => {
        const sendRequest = async () => {
            const response = await fetch(
                'https://trivia-f7a0b-default-rtdb.firebaseio.com/scoreboard.json',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        name: game.name,
                        score: game.score,
                        questionsAnswered: game.questionsAnswered
                    }),
                }
            );

            if (!response.ok) {
                throw new Error('Sending data failed.');
            }
        };
        try {
            await sendRequest()
        } catch {
            throw new Error('uh oh.');
        }
    }
}

export const grabAllScores = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://trivia-f7a0b-default-rtdb.firebaseio.com/scoreboard.json'
            );

            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }

            const data = await response.json();

            return data;
        };

        try {
            const scoreBoardData = await fetchData();
            dispatch(quizActions.setScoreBoard(Object.values(scoreBoardData)))
        } catch {
            throw new Error
        }
    };
}

function shuffle(array: string[]): string[] {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}



