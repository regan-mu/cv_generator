const TextArea = (props) => {
    return (
        <textarea name="description" onChange={props.inputChange} value={props.fieldVal} maxLength={200} required placeholder="Description..." rows="4"></textarea>
    )
}

export default TextArea;