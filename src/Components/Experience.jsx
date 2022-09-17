import InputField from "./Input-Field";
import ExperienceData from "./DisplayData";
import { useState } from 'react';
const uniqid = require('uniqid');
const Experience = (props) => {
    const [input, setInput] = useState(
        {
            position: "",
            company: "",
            from: "",
            to: ""
        }
    );

    const handleChanges = (e) => {
        const {name, value} = e.target
        setInput(prevVal => {
            return {...prevVal, [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addExperience(e)
        setInput(
            {
                position: "",
                company: "",
                from: "",
                to: ""
            } 
        )
    }
    return (
        <div className="job-experience">
            <h2>Job Experience</h2>
            <form className="experience-form" onSubmit={handleSubmit}>
                <InputField name="position" type="text" placeholder="Job Position" inputChange={handleChanges} fieldVal={input.position} />
                <InputField name="company" type="text" placeholder="Company" inputChange={handleChanges} fieldVal={input.company}/>
                <InputField name="from" type="text" placeholder="From" inputChange={handleChanges} fieldVal={input.from}/>
                <InputField name="to" type="text" placeholder="To" inputChange={handleChanges} fieldVal={input.to}/>
                <button type="submit">Add</button>
            </form>
            <div className="info-display">
                {props.jobs ? 
                    props.jobs.map((job,index) => <ExperienceData 
                        key={uniqid()}
                        id={index}
                        position={job.position} 
                        company={job.company} 
                        from={job.start} 
                        to={job.end}
                        onDelete={props.onDelete} />
                    ): null
                }
            </div>
        </div>
    )
}

export default Experience;