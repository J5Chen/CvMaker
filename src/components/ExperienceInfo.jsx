import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
function ExperienceInfo({onSubmit}) {
    const [formData, setForm] = useState({
        company: '',
        position: '',
        responsibilities: '',
        startDate: '',
        endDate: '',
        id: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newId = uuidv4();
        console.log(newId)
        setForm((prevData) => ({
            ...prevData,
            id:newId,
        }));
        onSubmit('expInfo', {...formData, id:newId})
        setForm({ company: '', position: '', responsibilities: '', startDate: '', endDate: '', id:'' });
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <p><b>Experience: </b></p>  
                <div>
                    <label>Company Name</label>
                    <input
                        type="text"
                        name="company"
                        required
                        onChange={handleChange}
                        value={formData.company} />
                </div>
                <div>
                    <label>Position Title</label>
                    <input
                        type="text"
                        name="position"
                        required
                        onChange={handleChange}
                        value={formData.position} />
                </div>
                <div>
                    <label>Main Responsibilities</label>
                    <textarea
                        name="responsibilities"
                        onChange={handleChange}
                        value={formData.responsibilities} />
                </div>
                <div>
                    <label>Start Date</label>
                    <input
                        type="date"
                        name="startDate"
                        required
                        onChange={handleChange}
                        value={formData.startDate} />
                </div>
                <div>
                    <label>End Date</label>
                    <input
                        type="date"
                        name="endDate"
                        onChange={handleChange}
                        value={formData.endDate} />
                </div>
                <div><button type="submit">submit</button></div>
            </form>
        </>
    )
}

export default ExperienceInfo;
