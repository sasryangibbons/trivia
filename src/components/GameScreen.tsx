import { RootState } from "../store"
import { useSelector } from 'react-redux';
import PreGame from "./PreGame";
import GameContent from "./GameContent";


const GameScreen = () => {
    const gameStarted = useSelector<RootState>((state) => state.quiz.gameStarted)

    return <>{!gameStarted ? <PreGame /> : <GameContent />}</>
}

export default GameScreen