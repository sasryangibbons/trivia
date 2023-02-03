import { useSelector } from 'react-redux';

import Question from './Question';
import GameOver from './GameOver';
import Skip from './Skip';
import Pause from './Pause';
import Timer from './Timer';
import { RootState } from '../store';
import Score from './Score';
import Lives from './Lives';

const GameContent = () => {
    const lives: number[] = useSelector<RootState>((state) => state.quiz.lives) as number[]
    const playerName: string = useSelector<RootState>((state) => state.quiz.playerName) as string

    let content = <div className='gameContent'>
        <p>Hello {playerName}</p>
        <Score />
        <Lives />
        <Skip />
        <Pause />
        <Question />
        <Timer />
    </div>

    if (lives.length === 0) {
        content = <GameOver />
    }

    return content
}

export default GameContent