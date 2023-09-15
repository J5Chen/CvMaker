import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function EducationInfo({onSubmit}) {
    const [formData, setForm] = useState({
        school: '',
        major: '',
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
        onSubmit('eduInfo', {...formData, id:newId})
        setForm({ school: '', major: '', startDate: '', endDate: '', id:''});
    }

    return (
        <>
            
            <form onSubmit={handleSubmit}>
                <p><b>Education: </b></p>
                <div>
                    <label> School </label>
                    <input
                        type="text"
                        name="school"
                        required
                        value={formData.school}
                        onChange={handleChange} />
                </div>
                <div>
                    <label> Major </label>
                    <input
                        type="text"
                        name="major"
                        required
                        value={formData.major}
                        onChange={handleChange} />
                </div>
                <div>
                    <label> Start Date </label>
                    <input
                        type="date"
                        name="startDate"
                        required
                        value={formData.startDate}
                        onChange={handleChange} />
                </div>
                <div>
                    <label> End Date </label>
                    <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange} />
                </div>
                <div><button type="submit">submit</button></div>
            </form>
        </>
    )
}

export default EducationInfo;