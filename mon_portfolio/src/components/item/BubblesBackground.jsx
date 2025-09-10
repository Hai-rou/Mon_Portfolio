import "../../SASS/item/bubblebackground.scss";

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function BubblesBackground() {
  return (
    <div className="bubbles-background">
      {[...Array(20)].map((_, i) => {
        const size = random(10, 90); // Taille entre 20px et 60px
        const duration = random(6, 12); // Durée entre 6s et 12s
        const left = random(0, 90); // Position de départ
        const delay = random(0, 5); // Délai d'animation
        return (
          <span
            key={i}
            className="bubble"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          ></span>
        );
      })}
    </div>
  );
}

export default BubblesBackground;