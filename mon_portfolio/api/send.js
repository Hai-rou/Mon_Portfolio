const nodemailer = require("nodemailer");

module.exports = async function handler(req, res) {
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

  // Vérifier les variables d'environnement
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Variables d\'environnement manquantes');
    return res.status(500).json({ 
      success: false, 
      message: "Configuration du serveur manquante" 
    });
  }

  try {
    // Configuration du transport
    let transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Vérifier la connexion
    await transporter.verify();
    console.log('Connexion SMTP vérifiée avec succès');

    // Options du mail
    let mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Nouveau message de ${nom} - Portfolio`,
      text: message,
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
      `,
    };

    console.log('Tentative d\'envoi d\'email...');
    await transporter.sendMail(mailOptions);
    console.log('Email envoyé avec succès');

    return res.status(200).json({ 
      success: true, 
      message: "Message envoyé avec succès !" 
    });

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