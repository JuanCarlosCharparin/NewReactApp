import { useState } from "react"

const Props = (props) => {
    
    const [mostrarInfo, setMostrarInfo] = useState('false')

    const showMessage = () => {
        setMostrarInfo(!mostrarInfo)
    }

    return(
        <div className="Props">
            <div className="card">
                <figure>
                    <img className="img-cuerpos" src={props.imagen} alt="Imagen de la tierra"/>
                </figure>
                <div className="titulo">
                    <h1>{props.titulo}</h1>
                </div>
                <div>
                    {mostrarInfo && (
                        <p>
                            {props.texto}
                        </p>
                )}
                    <button onClick={showMessage}>
                    {mostrarInfo ? 'Ver menos' : 'Ver más'}
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Props