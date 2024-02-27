import style from '../assets/style/ComponenteNuevo.module.css'
import ComenpoenteHijo from './ComponenteHijo';
function ComponenteNuevo() {
    return ( <><h1 style={{ borderBottom: 'solid 1px black', color: 'red'}} className={style.fondo}> Componente Nuevo Subido a la red HERMOSO</h1>
    <ComenpoenteHijo></ComenpoenteHijo>
    </> );
}

export default ComponenteNuevo;