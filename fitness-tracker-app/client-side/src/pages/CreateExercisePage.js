import React from 'react';      // import React when creaeting component
import Navigation from '../components/Navigation';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
;
function CreateExercisePage() {

    const history = useHistory();

    // 5 parameters --> create 5 useState functions
    const [name, setName] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('');

    const addExercise = async () => {
        const newExercise = { name, sets, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert('Success! Exercise was created');
        } else {
            alert(`Fail! Exercise was not created. Status code ${response.status}`);
        }
        history.push("/");
    };

    return (
        <div>
            <h1>Add Exercise</h1>
            <input
                className='form'
                type="text"
                placeholder="exercise name"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                className='form'
                type="number"
                placeholder="number of sets"
                value={sets}
                onChange={e => setSets(e.target.valueAsNumber)} />
            <input
                className='form'
                type="number"
                placeholder="number of reps"
                value={reps}
                onChange={e => setReps(e.target.valueAsNumber)} />
            <input
                className='form'
                type="number"
                placeholder="Enter weight"
                value={weight}
                onChange={e => setWeight(e.target.valueAsNumber)} />
            <select value={unit} name="unit" id="unit-select" onChange={e => setUnit(e.target.value)} >
                <option value="lbs">lbs</option>
                <option value="kgs">kgs</option>
            </select>
            <input
                className='form'
                type="text"
                placeholder="date: MM-DD-YY"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button className='submit-button' onClick={addExercise}>Submit Exercise</button>
            <Navigation />

        </div>
    );
}

export default CreateExercisePage