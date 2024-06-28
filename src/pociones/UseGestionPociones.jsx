import { useState, useEffect } from 'react';

const useGestionPociones = () => {
    const [pociones, setPociones] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const savedPociones = JSON.parse(localStorage.getItem('pociones')) || [];
        setPociones(savedPociones);
    }, []);

    useEffect(() => {
        localStorage.setItem('pociones', JSON.stringify(pociones));
    }, [pociones]);

    const agregarPocion = (name) => {
        setPociones([...pociones, { id: Date.now(), name, completed: false }]);
    };

    const completarPocion = (id) => {
        setPociones(pociones.map(p => p.id === id ? { ...p, completed: !p.completed } : p));
    };

    const eliminarPocion = (id) => {
        setPociones(pociones.filter(p => p.id !== id));
    };

    const editarPocion = (id, newName) => {
        setPociones(pociones.map(p => p.id === id ? { ...p, name: newName } : p));
    };

    const filteredPociones = pociones.filter(p => {
        if (filter === 'completed') return p.completed;
        if (filter === 'pending') return !p.completed;
        return true;
    });

    return {
        pociones: filteredPociones,
        agregarPocion,
        completarPocion,
        eliminarPocion,
        editarPocion,
        setFilter,
    };
};

export default useGestionPociones;
