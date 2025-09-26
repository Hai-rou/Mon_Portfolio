import { Resend } from 'resend';

// Remplacer "module.exports = async function" par:
export default async function handler(req, res) {
  // Autoriser uniquement les requêtes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Méthode non autorisée' 
    });
  }

  // Headers CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Gérer les requêtes OPTIONS (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { nom, email, message } = req.body;

  // Validation des données
  if (!nom || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Tous les champs sont requis' 
    });
  }

  // Log pour debug
  console.log('Variables environnement:', {
    EMAIL_USER: process.env.EMAIL_USER ? 'Défini' : 'Non défini',
    EMAIL_PASS: process.env.EMAIL_PASS ? 'Défini' : 'Non défini'
  });

  // Vérifier TOUTES les variables d'environnement nécessaires
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.RESEND_API_KEY) {
    console.error('Variables d\'environnement manquantes', {
      EMAIL_USER: process.env.EMAIL_USER ? 'Défini' : 'Non défini',
      EMAIL_PASS: process.env.EMAIL_PASS ? 'Défini' : 'Non défini',
      RESEND_API_KEY: process.env.RESEND_API_KEY ? 'Défini' : 'Non défini'
    });
    return res.status(500).json({ 
      success: false, 
      message: "Configuration du serveur manquante" 
    });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // Remplacer par votre domaine une fois vérifié
      to: process.env.EMAIL_USER,
      reply_to: email,
      subject: `Nouveau message de ${nom} - Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #58A6FF;">Nouveau message depuis votre portfolio</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
            <p><strong>Nom:</strong> ${nom}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
      `
    });
    
    if (error) throw new Error(error.message);
    
    return res.status(200).json({ success: true, message: "Message envoyé avec succès !" });
  } catch (error) {
    console.error('Erreur détaillée:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response
    });
    
    return res.status(500).json({ 
      success: false, 
      message: `Erreur: ${error.message}` 
    });
  }
}