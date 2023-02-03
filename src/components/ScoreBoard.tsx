import { useEffect } from "react"
import { dispatchStore, RootState } from "../store"
import { useSelector, useDispatch } from 'react-redux';
import { grabAllScores } from "../store/game-acitons";
import { Score } from "../store/quizgame";
import { Link } from "react-router-dom";

const ScoreBoard = () => {
    const dispatch: typeof dispatchStore = useDispatch()
    const scoreBoard: Score[] = useSelector<RootState>((state) => state.quiz.scoreBoard) as Score[]



    useEffect(() => {
        dispatch(grabAllScores())
    }, [])
    return <div>
        <button><Link style={{ textDecoration: 'none', color: "black" }} to='/'>Play Game</Link></button>
        {[...scoreBoard].sort((a, b) => b.score - a.score).map((score, i) => {
            return <div className="score" key={i}>Name: {score.name} | Score: {score.score}</div>
        })}
    </div>
}

export default ScoreBoard