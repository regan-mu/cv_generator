const JobCard = (props) => {
    return (
        <div className="job">
            <div className="start-end">
                {props.job.start} - {props.job.end}
            </div>
            <div className="job-info">
                <h5>{props.job.position}</h5>
                <p>{props.job.company}</p>
            </div>
        </div>
    )
}

const EducationCard = (props) => {
    return (
        <div className="school">
            <div className="start-end">
                {props.ed.start} - {props.ed.end}
            </div>
            <div className="school-info">
                <h5>{props.ed.uni}, {props.ed.city}</h5>
                <p>Degree: {props.ed.degree}</p>
                <p>Subject: {props.ed.subject}</p>
            </div>
        </div>
    )
}

export default JobCard;
export {EducationCard};