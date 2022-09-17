import InputField from "./Input-Field";
import {EdData} from "./DisplayData";
import { useState } from 'react';
const uniqid = require('uniqid');

const Education = props => {
    const [edu, setEdu] = useState(
        {
            university: "",
            city: "",
            degree: "",
            subject: "",
            from: "",
            to: ""
        }
    );
    const handleChanges = (e) => {
        const {name, value} = e.target
        setEdu(prevVal => {
            return {...prevVal, [name]: value}
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addEd(e)
        // Reset
        setEdu(
            {
                university: "",
                city: "",
                degree: "",
                subject: "",
                from: "",
                to: ""
            }  
        )
    }
    return (
        <div className="education">
            <h2>Education Background</h2>
            <form className="experience-form" onSubmit={handleSubmit}>
                <InputField name="university" type="text" placeholder="University" inputChange={handleChanges} fieldVal={edu.university}/>
                <InputField name="city" type="text" placeholder="City" inputChange={handleChanges} fieldVal={edu.city}/>
                <InputField name="degree" type="text" placeholder="Master, Bachelors, PhD" inputChange={handleChanges} fieldVal={edu.degree}/>
                <InputField name="subject" type="text" placeholder="Subject" inputChange={handleChanges} fieldVal={edu.subject}/>
                <InputField name="from" type="text" placeholder="From" inputChange={handleChanges} fieldVal={edu.from}/>
                <InputField name="to" type="text" placeholder="To" inputChange={handleChanges} fieldVal={edu.to}/>
                <button type="submit">Add</button>
            </form>
            <div className="info-display">
                {props.edInfo ? 
                    props.edInfo.map((ed, index) => <EdData 
                        key={uniqid()}
                        id={index}
                        uni={ed.uni} 
                        city={ed.city}
                        degree={ed.degree}
                        subject={ed.subject}
                        from={ed.start} 
                        to={ed.end} 
                        onDelete={props.onDelete} />
                    ): null
                }
            </div>
        </div>
    )
}

export default Education;