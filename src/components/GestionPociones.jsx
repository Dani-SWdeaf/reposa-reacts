import React from 'react';
import PocionList from '../pociones/PocionList';
import PocionForm from '../pociones/PocionForm';
import UseGestionPociones from '../pociones/UseGestionPociones';
import '../components/Pociones.css';

const GestionPociones = () => {
    const { pociones, agregarPocion, completarPocion, eliminarPocion, editarPocion, setFilter } = UseGestionPociones();
  
    return (
      <div className="gestion-pociones">
        <h1>Gestión de Pociones</h1>
        <PocionForm onAdd={agregarPocion} />
        <div className="filters">
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('completed')}>Completed</button>
          <button onClick={() => setFilter('pending')}>Pending</button>
        </div>
        <PocionList
          pociones={pociones}
          onComplete={completarPocion}
          onDelete={eliminarPocion}
          onEdit={editarPocion}
        />
      </div>
    );
  };
  
  export default GestionPociones;
