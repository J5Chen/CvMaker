import { useState } from 'react'
import './App.css'
import BackgroundInfo from './components/BackgroundInfo'
import EducationInfo from './components/EducationInfo'
import ExperienceInfo from './components/ExperienceInfo'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [bgInfo, setBgInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [eduInfo, setEduInfo] = useState([]);
  const [expInfo, setExpInfo] = useState([]);

  const handleChange = (name, formData) => {
    console.log(formData);
    if (name == 'bgInfo') {
      setBgInfo(formData);
    } else if (name == 'eduInfo') {
      setEduInfo((oldList) => ([
        ...oldList, formData
      ]));
    } else {
      console.log('here');
      setExpInfo((oldList) => ([
        ...oldList, formData
      ]));
    }
  };

  const handleDelete = (name, id)=>{
    event.preventDefault();
    console.log(id);
    if (name == 'eduInfo') {
      setEduInfo((prevList)=>(prevList.filter((x)=>x.id!==id)))
    } else {
      setExpInfo((prevList)=>(prevList.filter((x)=>x.id!==id)))
    }
}
  return (
    <>
      <div className='flex-container'>
        <div>
          <BackgroundInfo
            name='bgInfo'
            onSubmit={handleChange} />
          <EducationInfo
            name='eduInfo'
            onSubmit={handleChange} />
          <ExperienceInfo
            name='expInfo'
            onSubmit={handleChange} />
        </div>
        <div className='preview'>
          <p style={{ textAlign: "center" }}><b>{bgInfo.name} <br />{bgInfo.email} {bgInfo.phone}</b></p>
          <p><b>Education</b></p>
          <ul style={{ listStyleType: "none" }}>{eduInfo.map((edu) => {
            return <li key={edu.id}>
              <p style={{ textAlign: "left" }}><span style={{ float: "left" }}>{edu.school}</span> <span style={{ float: "right" }}>{edu.startDate}-{edu.endDate}</span><br />{edu.major}</p>
              <button type="submit" onClick={()=>handleDelete('eduInfo',edu.id)}>{edu.id}</button>
            </li>
          })}</ul>
          <p><b>Experience</b></p>
          <ul style={{ listStyleType: "none" }}>{expInfo.map((exp) => {
            return <li key={exp.id}>
              <p style={{ textAlign: "left" }}> <span style={{ float: "left" }}>{exp.company}</span> <span style={{ float: "right" }}>{exp.startDate}-{exp.endDate}</span><br /> {exp.position} <br />{exp.responsibilities} </p>
              <button type="submit" onClick={()=>handleDelete('expInfo',exp.id)}>{exp.id}</button>
            </li>
          })}</ul>
        </div>
      </div>
    </>
  )
}

export default App
