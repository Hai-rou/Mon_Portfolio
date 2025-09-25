const nodemailer = require("nodemailer");

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

  try {
    // Configuration du transport
    let transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Options du mail
    let mailOptions = {
      from: process.env.EMAIL_USER, // Utiliser votre email comme expéditeur
      replyTo: email, // L'email du visiteur comme reply-to
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

    // Envoi
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ 
      success: true, 
      message: "Message envoyé avec succès !" 
    });

  } catch (error) {
    console.error('Erreur envoi email:', error);
    return res.status(500).json({ 
      success: false, 
      message: "Erreur lors de l'envoi du message" 
    });
  }
}