import PocionItem from "./PocionItem";
import '../components/Pociones.css';

const PocionList = ({ pociones, onComplete, onDelete, onEdit }) => {
    return (
        <div className="pocion-list">
            {pociones.map(pocion => (
                <PocionItem
                    key={pocion.id}
                    pocion={pocion}
                    onComplete={onComplete}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </div>
    );
};

export default PocionList;
