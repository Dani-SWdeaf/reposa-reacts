import React, { useState } from 'react';
import '../components/Pociones.css';

const PocionItem = ({ pocion, onComplete, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(pocion.name);

    const handleEdit = () => {
        onEdit(pocion.id, newName);
        setIsEditing(false);
    };

    return (
        <div className={`pocion-item ${pocion.completed ? 'completed' : 'pending'}`}>
            {isEditing ? (
                <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
            ) : (
                <span>{pocion.name}</span>
            )}
            <button onClick={() => onComplete(pocion.id)}>
                {pocion.completed ? 'completed' : 'pending'}
            </button>
            <button onClick={() => onDelete(pocion.id)}>Delete</button>
            {isEditing ? (
                <button onClick={handleEdit}>Save</button>
            ) : (
                <button onClick={() => setIsEditing(true)}>Edit</button>
            )}
        </div>
    );
};

export default PocionItem;