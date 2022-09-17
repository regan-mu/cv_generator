import React from "react";

const InputField = (props) => {
    
    return (
        <input 
            name={props.name} 
            placeholder={props.placeholder} 
            type={props.type} 
            value={props.fieldVal}
            onChange={props.inputChange}
            required
        />
    )
}

export default InputField;