import React from 'react';      // import React when creaeting component
import Navigation from '../components/Navigation';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


function EditExercisePage({ exerciseToEdit }) {

    const history = useHistory();

    // 5 parameters --> create 5 useState functions
    const [name, setName] = useState(exerciseToEdit.name);
    const [sets, setSets] = useState(exerciseToEdit.sets);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const editExercise = async () => {
        const editedExercise = { name, sets, reps, weight, unit, date };
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert('Success! Exercise was edited')
        } else {
            alert(`Fail! Exercise was not edited. Status code ${response.status}`);
        }
        history.push("/");
    };

    return (
        <div>
            <h1>Edit Exercise</h1>
            
            <input
                className='form'
                type="text"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                className='form'
                type="number"
                value={sets}
                onChange={e => setSets(e.target.valueAsNumber)} />
            <input
                className='form'
                type="number"
                value={reps}
                onChange={e => setReps(e.target.valueAsNumber)} />
            <input
                className='form'   
                type="number"
                value={weight}
                onChange={e => setWeight(e.target.valueAsNumber)} />
            <select 
                
                value={unit} name="unit" id="unit-select" onChange={e => setUnit(e.target.value)} >
                <option value="lbs">lbs</option>
                <option value="kgs">kgs</option>
            </select>
            <input
                className='form'
                type="text"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button className = 'submit-button' onClick={editExercise} style={{cursor:'pointer'}}>Save</button>
            <Navigation />

        </div>
    );
}

export default EditExercisePage