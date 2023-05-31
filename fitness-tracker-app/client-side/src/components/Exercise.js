import React from 'react';
import { BsEraserFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';

function Exercise({ exercise, onDelete, onEdit }) {

    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.sets}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><BsEraserFill onClick={() => onEdit(exercise)} style={{cursor:'pointer'}}/></td>
            <td><TbTrash onClick={() => onDelete(exercise._id)} style={{cursor:'pointer'}}/></td>
        </tr>
    );
}

export default Exercise;