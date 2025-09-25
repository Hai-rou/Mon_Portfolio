import { useState } from "react";
import '../../SASS/item/contact.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Pour Vercel, l'API est accessible via /api/send
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      // Vérifier si la réponse est OK
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success) {
        alert("✅ Message envoyé avec succès !");
        // Réinitialiser le formulaire
        setFormData({
          nom: "",
          email: "",
          message: "",
        });
      } else {
        alert("❌ Erreur lors de l'envoi du message");
      }
    } catch (error) {
      console.error("Erreur:", error);
      
      // Messages d'erreur plus informatifs
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        alert("❌ Impossible de contacter le serveur. Vérifiez que votre serveur est démarré sur le port 5000.");
      } else if (error.message.includes('Failed to fetch')) {
        alert("❌ Problème de connexion. Vérifiez votre serveur et la configuration CORS.");
      } else {
        alert(`❌ Erreur: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-content">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom</label>
        <input
          id="nom"
          type="text"
          name="nom"
          placeholder="Nom"
          value={formData.nom}
          onChange={handleChange}
          required
          disabled={loading}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Votre e-mail"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={loading}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          className="message"
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={loading}
        />
        <input 
          type="submit" 
          value={loading ? "Envoi en cours..." : "Contactez-moi"}
          disabled={loading}
        />
      </form>
    </div>
  );
}

export default ContactForm;