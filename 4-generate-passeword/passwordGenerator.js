const generatePassword = require('generate-password');

// Fonction pour générer un mot de passe aléatoire
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 10, 
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true
    
  })

  console.log('Mot de passe généré:', password)
}

//appelle de la fonction
generateRandomPassword()


