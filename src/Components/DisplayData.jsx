const ExperienceData = props => {
    const deleteJob = () => {
        props.onDelete(props.id)
    }
    return  (
            <div className="info" id={props.id}>
                <p>Position: <span>{props.position}</span></p>
                <p>Company: <span>{props.company}</span></p>
                <p>From: <span>{props.from}</span></p>
                <p>To: <span>{props.to}</span></p>
                <button className="delete" onClick={deleteJob}>Remove</button>
            </div>
    )
}

const PersonalData = props => {
    return (
        <div className="info-display">
            <div className="info">
                <p>First Name: <span>{props.fname}</span></p>
                <p>Last Name: <span>{props.lname}</span></p>
                <p>Profession: <span>{props.profession}</span></p>
                <p>Email: <span>{props.email}</span></p>
                <p>Mobile: <span>{props.mobile}</span></p>
                <p>Description: <span>{props.description}</span></p>
            </div>
        </div>
    )
}

const EdData = props => {
    const deleteSchool = () => {
        props.onDelete(props.id)
    }
    return (
        <div className="info" id={props.id}>
            <p>University: <span>{props.uni}</span></p>
            <p>City: <span>{props.city}</span></p>
            <p>Degree: <span>{props.degree}</span></p>
            <p>Subject: <span>{props.subject}</span></p>
            <p>From: <span>{props.from}</span></p>
            <p>To: <span>{props.to}</span></p>
            <button className="delete" onClick={deleteSchool}>Remove</button>
        </div>
    )
}

export default ExperienceData;
export {PersonalData, EdData}