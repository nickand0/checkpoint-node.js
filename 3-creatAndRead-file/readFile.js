var fs = require('fs');

// Lire le fichier welcome.txt
fs.readFile('welcome.txt', 'utf8',function (err, data){
  if (err) {
    console.error( err);
    return;
  }
  console.log('Contenu du fichier welcome.txt:', data);
});
