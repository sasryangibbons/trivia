import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { dispatchStore, RootState } from '../store';
import { fetchQuestion } from '../store/game-acitons';
import { quizActions } from '../store/quizgame';


const GameOver = () => {
    const score: number = useSelector<RootState>((state) => state.quiz.score) as number
    const questionsAnswered: number = useSelector<RootState>((state) => state.quiz.questionsAnswered) as number
    const playerName: string = useSelector<RootState>((state) => state.quiz.playerName) as string
    const dispatch: typeof dispatchStore = useDispatch()

    function handlePlayAgain() {
        dispatch(quizActions.resetGame())
        dispatch(fetchQuestion())
    }
    function handleChangeName() {
        dispatch(quizActions.resetGame())
        dispatch(quizActions.endGame())
    }


    return (
        <div className='gameOver'>
            <p>{playerName}, you ended with a score of {score} and answered {questionsAnswered} questions.</p>
            <p>Would you like to play again?</p>
            <div>
                <button onClick={handlePlayAgain}>Play Again</button>
                <button onClick={handleChangeName}>Change Name</button>
                <button>
                    <Link style={{ textDecoration: 'none', color: "black" }} to='/scoreboard'>View Scoreboard</Link>
                </button>
            </div>

        </div>
    )
}

export default GameOver