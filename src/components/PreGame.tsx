import { quizActions } from "../store/quizgame"
import { useDispatch } from 'react-redux';
import { dispatchStore } from "../store";
import { useState } from "react";
import { fetchQuestion } from "../store/game-acitons";
import { Link } from 'react-router-dom';


const PreGame = () => {
    const dispatch: typeof dispatchStore = useDispatch()
    const [enteredName, setEnteredName] = useState("")

    const handleGameStart = (e) => {
        if (enteredName.trim().length === 0) {
            alert("Please enter a name")
            return
        }
        e.preventDefault()
        dispatch(fetchQuestion())
        dispatch(quizActions.startGame())
        dispatch(quizActions.setPlayerName(enteredName))
        setEnteredName("")
    }

    return (
        <div>
            <h1>Trivia Game</h1>
            <form onSubmit={handleGameStart}>
                <div>
                    <label>Name: </label>
                    <input type='text'
                        value={enteredName}
                        onChange={(e) => setEnteredName(e.target.value)}
                    />
                </div>
                <button type="submit" >Start Game</button>
                <button style={{ marginLeft: '1rem' }}>
                    <Link style={{ textDecoration: 'none', color: "black" }} to='/scoreboard'>View Scoreboard</Link>
                </button>
            </form>
        </div>
    )

}

export default PreGame