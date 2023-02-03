import { useSelector, useDispatch } from 'react-redux';
import { dispatchStore, RootState } from '../store';
import { BsFillPauseFill } from 'react-icons/bs';
import { quizActions } from '../store/quizgame';

const Pause = () => {
    const dispatch: typeof dispatchStore = useDispatch()
    const pausedAlready: boolean = useSelector<RootState>((state) => state.quiz.pausedAlready) as boolean

    let pauseContent = <p>Click To Pause the Time  <BsFillPauseFill onClick={handlePause} /></p>

    if (pausedAlready) {
        pauseContent = <p>You have already paused this round.</p>
    }

    function handlePause() {
        dispatch(quizActions.pauseTimer())
    }


    return pauseContent
}

export default Pause