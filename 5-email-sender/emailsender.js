//pour sécuriser les mot de passe et email
require('dotenv').config();

var nodemailer = require('nodemailer')

//transporteur de courrier
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
        }
  });

//option d'envoi et le text à envoyer
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'nickandon07.com',
    subject: 'Test Nodemailer',
    text: 'Hello, this is a test email sent using Nodemailer from Node.js!'
  };
  
//envoyer email
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log("Erreur lors de l'envoi de l'e-mail:", error);
    } else {
      console.log('E-mail envoyé:', info.response);
    }
  });
  
