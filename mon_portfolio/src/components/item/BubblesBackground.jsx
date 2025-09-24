import { memo } from "react";
import "../../SASS/item/bubblebackground.css";

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function BubblesBackground() {
  // Réduire le nombre de bulles pour améliorer les performances
  const bubbleCount = 12; // Réduit de 20 à 12
  
  return (
    <div className="bubbles-background">
      {[...Array(bubbleCount)].map((_, i) => {
        const size = random(15, 60); // Taille optimisée
        const duration = random(8, 15); // Durée plus longue pour moins de calculs
        const left = random(5, 85); // Position de départ
        const delay = random(0, 3); // Délai d'animation réduit
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

// Mémorisation pour éviter les re-renders inutiles
export default memo(BubblesBackground);