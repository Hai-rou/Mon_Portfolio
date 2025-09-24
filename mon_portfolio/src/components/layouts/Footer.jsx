import "../../SASS/layouts/footer.css"
import { Icon } from '@iconify/react';

function Footer () {
    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a 
                        href="https://github.com/Hai-rou?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-btn"
                    >
                        <img src="/assets/github-mark.svg" alt="logo du site github" />
                    </a>
                    <a 
                        href="mailto:hairou.houmadi@gmail.com"
                        className="mail-btn"
                    >
                        <Icon icon="mdi:email" width="20" height="20" />
                        <span className="sr-only">Envoyer un e-mail</span>
                    </a>
                </div>
            </div>
            <p>© 2025 Haïrou HOUMADI, Tous droits réservés.</p>
        </footer>
    )
}

export default Footer