// Demarrer server : node server.js
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Route POST pour le formulaire
app.post("/send", async (req, res) => {
    const { nom, email, message } = req.body;

    console.log("Données reçues du front:", req.body);


  try {
    // Configuration du transport (ici Gmail, mais tu peux mettre SMTP OVH, Outlook, etc.)
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // ton email
        pass: process.env.EMAIL_PASS, // mot de passe ou App Password
      },
    });

    // Options du mail
    let mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // là où tu reçois
      subject: `Nouveau message de ${nom}`,
      text: message,
      html: `<p><strong>Nom:</strong> ${nom}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    };

    // Envoi
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Message envoyé !" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erreur serveur" });
  }
    console.log("Email user:", process.env.EMAIL_USER);
    console.log("Email pass:", process.env.EMAIL_PASS ? "****" : "MISSING");
});

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});


