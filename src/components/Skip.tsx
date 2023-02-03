import { useSelector, useDispatch } from 'react-redux';
import { dispatchStore, RootState } from '../store';
import { BsFillSkipForwardFill } from 'react-icons/bs';
import { quizActions } from '../store/quizgame';
import { fetchQuestion } from '../store/game-acitons';

const Skip = () => {
    const dispatch: typeof dispatchStore = useDispatch()
    const skip: boolean = useSelector<RootState>((state) => state.quiz.skip) as boolean

    function handleSkip() {
        dispatch(quizActions.setSkipFalse())
        dispatch(quizActions.unPauseTimer())
        dispatch(fetchQuestion())
    }

    let skipContent = <p>Click To Skip  <BsFillSkipForwardFill onClick={handleSkip} /></p>

    if (!skip) {
        skipContent = <p>You have used all of your skips this round.</p>
    }

    return skipContent
}

export default Skip