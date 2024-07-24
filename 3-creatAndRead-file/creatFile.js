var fs = require('fs');

//variable hello node
var content = 'Hello Node'

//création de welcome.txt
fs.writeFile('welcome.txt',content,function(err){
    if (err){
        console.error(err)
        return
    }
    console.log('Le fichier welcome.txt a été créé avec succès.')
})
