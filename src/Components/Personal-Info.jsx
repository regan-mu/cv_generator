import InputField from "./Input-Field";
import TextArea from "./TextArea";
import { PersonalData } from "./DisplayData";
import { useState } from 'react';

const PersonalInfo = props => {

    const [input, setInput] = useState(
        {
            fname: "",
            lname: "",
            profession: "",
            email: "",
            mobile: "",
            description: ""
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
        props.submitInfo(e)
        setInput(
            {
                fname: "",
                lname: "",
                profession: "",
                email: "",
                mobile: "",
                description: ""
            }
        )
    }
    return (
        <div className="personal-info">
            <h2>Personal Information</h2>
            <form className="info-form" onSubmit={handleSubmit}>
                <InputField name="fname" type="text" placeholder="First Name" inputChange={handleChanges} fieldVal={input.fname}/>
                <InputField name="lname" type="text" placeholder="Last Name" inputChange={handleChanges} fieldVal={input.lname}/>
                <InputField name="profession" type="text" placeholder="Profession" inputChange={handleChanges} fieldVal={input.profession}/>
                <InputField name="email" type="email" placeholder="Email Address" inputChange={handleChanges} fieldVal={input.email}/>
                <InputField name="mobile" type="text" placeholder="Phone Number" inputChange={handleChanges} fieldVal={input.mobile}/>
                <TextArea fieldVal={input.description} inputChange={handleChanges} />
                <button type="submit">Save</button>
            </form>
            {props.user.person ? <PersonalData 
                fname={props.user.person.fname} 
                lname={props.user.person.lname} 
                profession={props.user.person.profession} 
                email={props.user.person.email}
                mobile={props.user.person.mobile}
                description={props.user.person.description}
            />: null}
        </div>
    )
}


export default PersonalInfo;