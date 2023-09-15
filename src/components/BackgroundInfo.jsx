import { useState } from 'react'

function BackgroundInfo({onSubmit}) {
  const [formData, setForm] = useState({
    name: '',
    email: '',
    phone: ''
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
    onSubmit('bgInfo', formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p><b>Background: </b></p>
        <div>
          <label> Name </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange} />
        </div>
        <div>
          <label> Email </label>
          <input
            type="text"
            name="email"
            required
            value={formData.email}
            onChange={handleChange} />
        </div>
        <div>
          <label> Phone </label>
          <input
            type="tel"
            name="phone"
            required
            pattern="[0-9]*"
            value={formData.phone}
            onChange={handleChange} />
        </div>
        <div>
        <button type="submit">submit</button>
        </div>
      </form>
    </>
  )
}


export default BackgroundInfo;
