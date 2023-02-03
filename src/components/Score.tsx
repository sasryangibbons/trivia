import { RootState } from "../store"
import { useSelector } from 'react-redux';


const Score = () => {

    const score: number = useSelector<RootState>((state) => state.quiz.score) as number

    return <div>score: {score}</div>
}

export default Score