import "../../SASS/layouts/footer.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer () {
    return(
        <footer>
            <div className="footnav">
                <div>
                   <a 
                    href="https://github.com/Hai-rou?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                    >
                    <img src="/assets/github-mark.svg" alt="logo du site github" />
                    </a> 
                </div>
                <div>
                    <a 
                        href="mailto:hairou.houmadi@gmail.com"
                        className="mail-btn"
                        >
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <span className="sr-only">Envoyer un e-mail</span>
                    </a>
                </div>
            </div>
            <p>© 2025 Haïrou HOUMADI, Tous droits réservés.</p>
        </footer>
    )
}

export default Footer