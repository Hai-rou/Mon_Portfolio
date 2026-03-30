import { useState, useEffect } from 'react';
import '../../SASS/item/viewcounter.css';

function ViewCounter() {
  const [views, setViews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Récupérer et incrémenter le compteur de vues
    const fetchViews = async () => {
      try {
        const response = await fetch('/api/views');
        
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des vues');
        }

        const data = await response.json();
        
        if (data.success) {
          setViews(data.views);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Erreur compteur de vues:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchViews();
  }, []); // Ne s'exécute qu'une fois au montage

  if (loading) {
    return (
      <div className="view-counter">
        <span className="view-counter__icon">👁️</span>
        <span className="view-counter__text">Chargement...</span>
      </div>
    );
  }

  if (error) {
    // Afficher un message d'erreur au lieu de masquer le composant
    return (
      <div className="view-counter view-counter--error">
        <span className="view-counter__icon">👁️</span>
        <span className="view-counter__text">Compteur temporairement indisponible</span>
      </div>
    );
  }

  // Formatter le nombre avec des espaces (ex: 1 234)
  const formatNumber = (num) => {
    return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <div className="view-counter">
      <span className="view-counter__icon">👁️</span>
      <span className="view-counter__number">{formatNumber(views)}</span>
      <span className="view-counter__text">
        {views > 1 ? 'visites' : 'visite'}
      </span>
    </div>
  );
}

export default ViewCounter;
