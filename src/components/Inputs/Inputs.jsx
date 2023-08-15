import React, { useState } from 'react';

function Inputs() {
  const formFields = {
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
  };

  const [form, setForm] = useState(formFields);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/process-data/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      console.log(data.result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form onClick={handleSubmit} style={{ marginTop: '100px', zIndex: '4' }}>
        <input
          type="text"
          name="input1"
          value={form.input1}
          onChange={handleChange}
        />
        <input
          type="text"
          name="input2"
          value={form.input2}
          onChange={handleChange}
        />
        <input
          type="text"
          name="input3"
          value={form.input3}
          onChange={handleChange}
        />
        <input
          type="text"
          name="input4"
          value={form.input4}
          onChange={handleChange}
        />
        <input
          type="text"
          name="input5"
          value={form.input5}
          onChange={handleChange}
        />
        <input type="submit" value="Submit Values" />
      </form>
    </div>
  );
}

export default Inputs;
