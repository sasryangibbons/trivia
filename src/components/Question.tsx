import AnswerOption from './AnswerOption';
import { useSelector, useDispatch } from 'react-redux';
import { quizActions } from '../store/quizgame'
import { dispatchStore, RootState } from '../store/index'
import { fetchQuestion, addFinalScore } from '../store/game-acitons';

function Question() {
    const dispatch: typeof dispatchStore = useDispatch()
    const question: string = useSelector<RootState>((state) => state.quiz.question) as string
    const correctAnswer: string = useSelector<RootState>((state) => state.quiz.correctAnswer) as string
    const possibleAnswers: string[] = useSelector<RootState>((state) => state.quiz.possibleAnswers) as string[]
    const selectedAnswer = useSelector<RootState>((state) => state.quiz.selectedAnswer)
    const difficulty: string = useSelector<RootState>((state) => state.quiz.difficulty) as string
    const lives: number[] = useSelector<RootState>((state) => state.quiz.lives) as number[]
    const gameScore: string = useSelector<RootState>((state) => state.quiz.score) as string
    const questionsAnswered: string = useSelector<RootState>((state) => state.quiz.questionsAnswered) as string
    const name: string = useSelector<RootState>((state) => state.quiz.playerName) as string



    console.log(correctAnswer);


    function handleSubmit(): void {
        if (!selectedAnswer) {
            alert("Please select an answer")
            return
        }
        dispatch(quizActions.unPauseTimer())
        dispatch(quizActions.incrementQuestionsAnswered())
        let score = 0;
        if (difficulty) {
            if (difficulty.toLowerCase() === "easy") {
                score = 1
            } else if (difficulty.toLowerCase() === "medium") {
                score = 2
            } else if (difficulty.toLowerCase() === "hard") {
                score = 3
            }
        }

        if (selectedAnswer === correctAnswer) {
            dispatch(quizActions.questionCorrect())
            dispatch(quizActions.raiseScore(score))
        } else {
            if (lives.length === 1 || (lives.length === 2 && lives[lives.length - 1] < 3)) {
                dispatch(addFinalScore({
                    name: name,
                    score: gameScore,
                    questionsAnswered: questionsAnswered + 1
                }))
            }
            dispatch(quizActions.lowerLives())
            alert(correctAnswer)
        }
        dispatch(fetchQuestion())
    }

    function handleSelect(event: any) {
        const value = event.target.value
        dispatch(quizActions.setSelectedAnswer(value))
    }

    return (
        <div>
            <div className='question'>{question}</div>
            {possibleAnswers && possibleAnswers.map((choice, i) => {
                return <AnswerOption handleSelect={handleSelect} key={choice} choice={choice} />
            })}
            <button onClick={handleSubmit}>Submit Answer</button>
        </div>
    )
}



export default Question