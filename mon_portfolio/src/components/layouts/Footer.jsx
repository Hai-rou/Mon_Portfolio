import "../../SASS/layouts/footer.css"
import  Logogit  from "../../assets/github-mark.svg"
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer () {
    return(
        <footer>
            <div className="footnav">
                <div>
                   <a 
                    href="https://github.com/Hai-rou?tab=repositories"
                    target="_blank"
                    rel="noolpener noreferrer"
                    className="github-btn"
                    >
                    <img src={Logogit} alt="logo du site github" />
                    </a> 
                </div>
                <div>
                    <a 
                        href="mailto:hairou.houmadi@gmail.com"
                        target="_blank"
                        rel="noolpener noreferrer"
                        className="mail-btn"
                        >
                        <i className="fa fa-envelope"></i>
                    </a>
                </div>

                
            </div>
            <p>© 2025 Haïrou HOUMADI, Tous droits réservés.</p>

        </footer>
    )
}

export default Footer