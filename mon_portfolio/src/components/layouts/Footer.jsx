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
                        aria-label="Voir mes projets GitHub"
                    >
                        <img src="/assets/github-mark.svg" alt="GitHub" />
                    </a>
                    <a 
                        href="mailto:hairou.houmadi@gmail.com"
                        className="mail-btn"
                        aria-label="M'envoyer un email"
                    >
                        <Icon icon="mdi:email" width="24" height="24" />
                        <span>Me contacter</span>
                    </a>
                </div>
                <p>© 2025 Haïrou HOUMADI • Tous droits réservés</p>
            </div>
        </footer>
    )
}

export default Footer