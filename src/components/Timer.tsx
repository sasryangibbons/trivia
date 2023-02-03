import { CountdownCircleTimer } from "react-countdown-circle-timer"
import { useSelector, useDispatch } from 'react-redux';
import { dispatchStore, RootState } from "../store";
import { fetchQuestion } from "../store/game-acitons"
import { quizActions } from "../store/quizgame"

const Timer = () => {
    const dispatch: typeof dispatchStore = useDispatch()
    const question: string = useSelector<RootState>((state) => state.quiz.question) as string
    const correctAnswer: string = useSelector<RootState>((state) => state.quiz.correctAnswer) as string
    const timerIsPlaying: boolean = useSelector<RootState>((state) => state.quiz.timerIsPlaying) as boolean


    function handleTimerEnded() {
        dispatch(quizActions.lowerLives())
        alert(correctAnswer)
        dispatch(fetchQuestion())
    }

    const timerContent = <CountdownCircleTimer
        key={question}
        isPlaying={timerIsPlaying}
        duration={20}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}
        onComplete={handleTimerEnded}
    >
        {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>

    return timerContent
}

export default Timer