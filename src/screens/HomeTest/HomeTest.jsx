import React, { useState, useEffect, useRef, useContext } from 'react';
import './HomeTest.scss';
import DisplayTest from '../../components/DisplayTest/DisplayTest';
import { userInfo } from '../../App.js';

export default function Home() {
  const user = useContext(userInfo);

  const formFields = {
    name: '',
    creditScore: '',
    monthlyIncome: '',
    monthlyBills: '',
  };
  const [newForm, setNewForm] = useState(formFields);
  const [tests, setTests] = useState(null);
  const getTestsRef = useRef(null);

  const handleChange = (event) => {
    setNewForm({
      ...newForm,
      [event.target.name]: event.target.value,
    });
  };

  const URL = 'http://localhost:4000/test/';

  const getTests = async () => {
    const token = await user.getIdToken();
    // console.log(token);
    // this will log the json web token to the console in base64 format

    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    const data = await response.json();
    setTests(data);
  };

  const createTest = async (newForm) => {
    if (!user) return; // prevent function from executing code below without user

    const token = await user.getIdToken();

    await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(newForm),
    });
    getTests();
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // this prevents a page refresh
    createTest(newForm);
    setNewForm(formFields); // reset form to empty fields
  };

  useEffect(() => {
    getTestsRef.current = getTests;
  });

  useEffect(() => {
    if (user) {
      getTestsRef.current();
    } else {
      setTests(null);
      // when user logs out their information is removed from state
    }
  }, [user]);

  let userName = user ? user.reloadUserInfo.displayName : '';

  console.log(tests);

  return (
    <>
      {user ? (
        <div style={{ fontSize: '30px' }}>{`Welcome ${userName}`}</div>
      ) : (
        <div style={{ fontSize: '30px' }}>Home Screen: Please Login</div>
      )}
      <div className="test-wrapper">
        <main>
          <h1>Testing Firebase UID</h1>
          <h1>form submission</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={newForm.name}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Credit Score:
              <input
                type="number"
                name="creditScore"
                value={newForm.creditScore}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Monthly Income:
              <input
                type="number"
                name="monthlyIncome"
                value={newForm.monthlyIncome}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Monthly Bills:
              <input
                type="number"
                name="monthlyBills"
                value={newForm.monthlyBills}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </main>
        <DisplayTest tests={tests} />
      </div>
    </>
  );
}
