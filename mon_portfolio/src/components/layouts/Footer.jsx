import "../../SASS/layouts/footer.css"
import  Logogit  from "../../assets/github-mark.svg"

function Footer () {
    return(
        <footer>
            <div className="Footnav">
                <a 
                href="https://github.com/Hai-rou/Mon_Portfolio"
                target="_blank"
                rel="noolpener noreferrer"
                className="github-btn"
                >
                <img src={Logogit} alt="logo du site github" />
                </a>
            </div>
        </footer>
    )
}

export default Footer