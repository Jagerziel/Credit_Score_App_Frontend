import React, { useState, useEffect, useRef, useContext } from 'react';
import './HomeTest.scss';
import DisplayTest from '../../components/DisplayTest/DisplayTest';
import { userInfo } from '../../App.js';

export default function Home() {
  const user = useContext(userInfo);

  const [name, setName] = useState('');
  const [creditScore, setCreditScore] = useState('');
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [monthlyBills, setMonthlyBills] = useState('');
  const [tests, setTests] = useState(null);
  const getTestsRef = useRef(null);

  const URL = 'http://localhost:4000/test/';

  const getTests = async () => {
    const token = await user.getIdToken();
    console.log(token);

    const response = await fetch(URL);
    const data = await response.json();
    setTests(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      creditScore: parseInt(creditScore),
      monthlyIncome: parseFloat(monthlyIncome),
      monthlyBills: parseFloat(monthlyBills),
    };

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful response
        console.log('Data sent successfully');
      } else {
        // Handle error response
        console.error('Error sending data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    getTestsRef.current = getTests;
  });

  useEffect(() => {
    if (user) {
      getTestsRef.current();
    } else {
      setTests(null);
    }
  }, [user]);

  return (
    <main>
      <h1>Testing Firebase UID in form submission</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Credit Score:
          <input
            type="number"
            value={creditScore}
            onChange={(e) => setCreditScore(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Monthly Income:
          <input
            type="number"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Monthly Bills:
          <input
            type="number"
            value={monthlyBills}
            onChange={(e) => setMonthlyBills(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <DisplayTest tests={tests} />
    </main>
  );
}
