import { Link } from "react-router-dom"


function Error () {
    return(
        <>
            <main>
                <div className="error">
                    <h1>Error 404</h1>
                    <p>Oups ! La page que vous demandez n'existe pas</p>
                </div>
                <Link to="/">Retourner à la page d'accueil</Link>
            </main>
        </>
    )
}

export default Error