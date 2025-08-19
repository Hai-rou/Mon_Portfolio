import "../../SASS/item/banner.css"


export function AnimatedBanner() {
    return (
        <div className="banner">
            <svg className="animated-bg" viewBox="0 0 1200 400">
                <circle className="floating-circle" cx="100" cy="100" r="20" fill="#4f46e5" />
                <circle className="floating-circle delay-1" cx="300" cy="200" r="15" fill="#06b6d4" />
                <circle className="floating-circle delay-2" cx="500" cy="150" r="25" fill="#8b5cf6" />
                {/* Ajoutez plus de formes */}
            </svg>
            <div className="banner-content">
                <p>Bonjour</p>
                <h1 className="typing-wrapper">
                    <span className="line line1">Je suis Haïrou Houmadi</span><br />
                    <span className="line line2">développeur Web</span>
                    <span className="caret" aria-hidden="true"></span>
                </h1>
                <p>Création moderne et responsive pour web</p>
            </div>
        </div>
    )
}