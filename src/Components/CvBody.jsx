import JobCard, {EducationCard} from "./Job-Edu-Card";
const uniqid = require('uniqid');
const CvBody = (props) => {
    return (
        <div className="cv-main" id="cv-body" style={props.showCv}>
            <div className="cv-header">
                <h1>{props.info.person.fname} {props.info.person.lname}</h1>
                <p>{props.info.person.profession}</p>
            </div>
            <div className="cv-body">
                <div className="bio">
                    <h3>Personal Info</h3>
                    <div className="info">
                        <div className="mail">
                            <h6>Email</h6>
                            <p>{props.info.person.email}</p>
                        </div>
                        <div className="mobile">
                            <h6>Phone</h6>
                            <p>{props.info.person.mobile}</p>
                        </div>
                    </div>
                </div>
                <div className="cv-details">
                    <div className="description">
                        <h4>Description</h4>
                        <p>{props.info.person.description}</p>
                    </div>
                    <div className="experience">
                        <h4>Work Experience</h4>
                        {props.info.jobs.map((job, index) => {
                            return <JobCard key={uniqid()} id={index} job={job} />
                        })}  
                    </div>
                    <div className="education">
                        <h4>Education Background</h4>
                        {props.info.education.map((ed,index) => {
                            return <EducationCard key={uniqid()} id={index} ed={ed} />
                        })}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CvBody;