import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import PersonalInfo from './Components/Personal-Info';
import Experience from './Components/Experience';
import Education from './Components/Education';
import CvContainer from './Components/CvContainer'

function App() {
  const [userInfo, setInfo] = useState({})
  const handlePersonalInfo = e => {
    const targetForm = e.target
    const person = {
      fname: targetForm.fname.value,
      lname: targetForm.lname.value,
      profession: targetForm.profession.value,
      email: targetForm.email.value,
      mobile: targetForm.mobile.value,
      description: targetForm.description.value
    }
    //userInfo.person = personalinfo
    setInfo((preVal) => {
      return {...preVal, person}
    })
  }

  const handleExperience = e => {
    const target = e.target;
    const jobInfo = {
      position: target.position.value,
      company: target.company.value,
      start: target.from.value,
      end: target.to.value
    }
    const allJobs = userInfo.jobs ? userInfo.jobs: []
    allJobs.push(jobInfo)
    setInfo((preVal) => {
      return {...preVal, jobs:allJobs}
    })
  }

  const handleEducation = e => {
    const target = e.target;
    const edInfo = {
      uni: target.university.value,
      city: target.city.value,
      degree: target.degree.value,
      subject: target.subject.value,
      start: target.from.value,
      end: target.to.value
    }
    const ed = userInfo.education ? userInfo.education: []
    ed.push(edInfo)
    setInfo((preVal) => {
      return {...preVal, education:ed}
    })
  }

  const deleteEducation = (id) => {
    const newEd = userInfo.education.filter((edu, index) => {
      return index !== id;
    })
    setInfo(preVal => {
      return {...preVal, education: newEd}
    })
  }

  const deleteJob = id => {
    const newJobs = userInfo.jobs.filter((job, index) => {
      return index !== id;
    })
    setInfo(preVal => {
      return {...preVal, jobs: newJobs}
    })
  }

  
  return (
    <div className="main-app">
      <Header />
      <div className="form-section">
        <PersonalInfo submitInfo={handlePersonalInfo} user={userInfo}/>
        <Experience addExperience={handleExperience} jobs={userInfo.jobs} onDelete={deleteJob}/>
        <Education addEd={handleEducation} edInfo={userInfo.education} onDelete={deleteEducation}/>
      </div>
      {userInfo.person && userInfo.jobs && userInfo.education ? <CvContainer user={userInfo} /> : null}
    </div>
  );
}

export default App;
