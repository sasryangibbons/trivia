import { useSelector } from 'react-redux';
import { BsHeart, BsHeartFill, BsHeartHalf } from "react-icons/bs"
import { RootState } from "../store"

const Lives = () => {
    const lives: number[] = useSelector<RootState>((state) => state.quiz.lives) as number[]


    const lifeContent = <div>lives:       {lives.map((x, i) => {
        return (<div key={i} style={{ width: "2rem", display: "inline-block" }}>
            {x === 3 && <BsHeartFill color='red' />}
            {x === 2 && <BsHeartHalf color='red' />}
            {x === 1 && <BsHeart color='red' />}
        </div>)
    })}</div>

    return lifeContent
}

export default Lives