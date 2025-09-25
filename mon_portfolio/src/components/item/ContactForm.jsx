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

    console.log("🚀 Début de l'envoi du formulaire...");
    console.log("Données à envoyer:", formData);

    try {
      // Pour Vercel, l'API est accessible via /api/send
      console.log("📡 Envoi de la requête à /api/send");
      
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      console.log("📥 Réponse reçue - Statut:", response.status);

      let data;
      try {
        data = await response.json();
        console.log("📄 Données de la réponse:", data);
      } catch (jsonError) {
        console.error("❌ Erreur lors du parsing JSON:", jsonError);
        throw new Error("Réponse du serveur invalide");
      }

      // Vérifier si la réponse est OK
      if (!response.ok) {
        const errorMessage = data?.message || `Erreur HTTP: ${response.status}`;
        console.error("❌ Erreur HTTP:", errorMessage);
        throw new Error(errorMessage);
      }
      
      if (data.success) {
        console.log("✅ Message envoyé avec succès");
        alert("✅ Message envoyé avec succès !");
        
        // Réinitialiser le formulaire
        setFormData({
          nom: "",
          email: "",
          message: "",
        });
      } else {
        const errorMessage = data.message || "Erreur lors de l'envoi du message";
        console.error("❌ Échec de l'envoi:", errorMessage);
        alert(`❌ ${errorMessage}`);
      }
    } catch (error) {
      console.error("💥 Erreur complète:", error);
      
      let userMessage = "❌ ";
      
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        userMessage += "Impossible de contacter le serveur API. Vérifiez que Vercel dev est lancé.";
        console.error("💡 Suggestion: Lancez 'vercel dev' pour démarrer l'environnement local");
      } else if (error.message.includes('JSON')) {
        userMessage += "Erreur de communication avec le serveur.";
      } else {
        userMessage += error.message;
      }
      
      alert(userMessage);
      
      // En mode développement, afficher plus d'infos
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log("🔧 Mode développement détecté");
        console.log("🔍 Vérifiez que:");
        console.log("  1. Vercel CLI est installé: npm i -g vercel");
        console.log("  2. Vercel dev est lancé: vercel dev");
        console.log("  3. Variables d'environnement configurées (.env.local)");
        console.log("  4. Port correct (généralement 3000)");
      }
    } finally {
      setLoading(false);
      console.log("🏁 Fin de la tentative d'envoi");
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