import { useState, useEffect } from "react";


const Api = () => {

    const [dato, setDato] = useState(null)

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/characters')
            .then((response) => response.json())
            .then((dato) => setDato(dato))
    }, [])

    return(
        <div className="App">
            <h1>Fetch</h1>
            <div className="Card">
                <ul>
                    {/* {dato.map(character =>(
                        <li key={character.id}></li>
                    ))} */}
                    
                </ul>
            </div>
        </div>
    )
}

export default Api