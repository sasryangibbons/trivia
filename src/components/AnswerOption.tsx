const AnswerOption: React.FC<{ choice: string, handleSelect: (event: any) => void }> = (props) => {

    return (
        <label className='answer' onChange={props.handleSelect} htmlFor={props.choice}>
            <input name="answer" type='radio' id={props.choice} value={props.choice} />
            <span>{props.choice}</span>
        </label>

    )
}

export default AnswerOption