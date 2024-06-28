import React, { useState } from 'react';
import '../components/Pociones.css';

const PocionForm = ({ onAdd }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(name);
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre de la poción"
            />
            <button type="submit">Agregar</button>
        </form>
    );
};

export default PocionForm;
