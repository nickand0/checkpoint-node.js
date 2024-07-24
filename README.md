**I- Dans cette tâche, vous allez :
Créez un fichier nommé hello-world.js
Écrivez un programme pour imprimer "HELLO WORLD" sur la console**

**REPONSE:**

1. création du fichier **hello-world.js**

2. Ajout dans hello-world.js :
```javascript
 console.log('hello world')
```

3. Execution dans le terminal :```"node hello-world.js"```

4. ```'hello world'``` s'affiche dans le terminal

**II-Dans cette tâche, vous allez :
Créer un serveur.
Écrivez un programme qui s'exécute sur le port 3000 et répond avec "<h1>Hello Node !!!! </h1>" quand quelqu'un atteint http://localhost:3000**

**REPONSE:**

1-Creation fichier **server.js**

2-Dans le fichier server.js:

```javascript
//initialisation 
    var http = require('http');
```
Le module http de Node.js est importé.
    
   
```javascript
    //création server
    var server = http.createServer(function(request,response){
    response.setHeader('content-Type','text/html');
    response.end('<h1>Hello Node!!!!</h1>\n')
    })
```
    
Un serveur HTTP est créé en utilisant http.createServer.

Le serveur est configuré pour envoyer une réponse HTML contenant le message "Hello Node!!!!" à chaque requête reçue.
    
```
server.listen(3000,'localhost',function (){
    console.log(`Server running at http://localhost:3000/`)
    })
```

Le serveur commence à écouter les requêtes sur le port 3000 de l'hôte local (localhost).
    
Une fois que le serveur est en cours d'exécution, un message est affiché dans la console indiquant l'URL à laquelle le serveur est accessible.

-accédez à l'URL suivante :
    
    ```http://localhost:3000```

 
"<h1>Hello Node !!!! </h1>"


**III-Dans cette tâche, vous allez :
Tout d'abord, exigez que le système de fichiers crée un fichier nommé "welcome.txt" contenant une ligne "Hello Node".
Deuxièmement, créez un programme qui lit et console.log données à partir de welcome.txt**

**REPONSE:**

Dans **creatfile.js** pour la création du fichier "welcome.txt":

1. **Importation du module `fs`** :
    ```javascript
    var fs = require('fs');
    ```
   - Ce module permet d'interagir avec le système de fichiers.

2. **Définition du contenu** :
    ```javascript
    var content = 'Hello Node';
    ```
    - La variable `content` contient le texte qui sera écrit dans le fichier `welcome.txt`.

3. **Création du fichier** :
    ```javascript
    fs.writeFile('welcome.txt', content, function(err) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Le fichier welcome.txt a été créé avec succès.');
    });
    ```
    - `fs.writeFile` crée un fichier nommé `welcome.txt` et écrit le contenu de la variable `content` dedans.
    - La fonction de rappel  gère les erreurs potentielles lors de la création du fichier. Si une erreur survient, elle est affichée dans la console. Sinon, un message de succès est affiché.

   Exécutez la commande suivante pour créer le fichier `welcome.txt` dans le terminal :
    ```bash
    node createFile.js
    ```
  le message dans la console :```'Le fichier welcome.txt a été créé avec succès.'```

Dans javascript **readFile.js** :création d' un programme qui lit et console.log données à partir de welcome.txt

1. **Importation du module `fs`** :
    ```javascript
    var fs = require('fs');
    ```
   - Ce module permet d'interagir avec le système de fichiers.

2. **lecture de fichier welcome.txt** :
     ```javascript
     fs.readFile('welcome.txt', 'utf8',function (err, data){
      if (err) {
    console.error( err);
    return;
      }
      console.log('Contenu du fichier welcome.txt:', data);
      });
     ```
    - `fs.readFile` lit le contenu du fichier `welcome.txt`.
      
    - Le premier argument est le nom du fichier à lire (`'welcome.txt'`).
      
    - Le deuxième argument spécifie l'encodage (`'utf8'`), indiquant que le contenu du fichier sera lu en tant que texte UTF-8.
    - La fonction de rappel gère les erreurs potentielles lors de la lecture du fichier. Si une erreur survient, elle est affichée dans la console. Sinon, le contenu du fichier est affiché dans la console.

    Exécutez la commande suivante pour lire le fichier `welcome.txt` dans le terminal :
    ```bash
    node readFile.js
    ```
    le message dans la console :```"Hello Node"```

**IV- Dans cette tâche, vous allez :
Créez un fichier nommé "générateur de mot de passe"
(utilisez npm install generate-password : (https://www.npmjs.com/package/generate-password).
Créez une fonction qui génère des mots de passe aléatoires et console.log() ce mot de passe.**

**REPONSE :**

- Initialisation d'un nouveau projet Node.js :
    ```bash
    npm init -y
    ```
- Installation du module `generate-password` :
    ```bash
    npm install generate-password
    ```
- Création d' un fichier `passwordGenerator.js`:

  **Importation du module `generate-password`** :
    ```javascript
    const generatePassword = require('generate-password');
    ```
    le module `generate-password`, qui permet de générer des mots de passe aléatoires.

**Définition de la fonction `generateRandomPassword`** :

```javascript
    function generateRandomPassword() {
      const password = generatePassword.generate({
        length: 10, 
        numbers: true,
        symbols: true,
        uppercase: true,
        lowercase: true
      });
     console.log('Mot de passe généré:', password);
    }
```

-La fonction `generateRandomPassword` utilise le module `generate-password` pour créer un mot de passe aléatoire.

-Les options fournies à `generatePassword.generate` spécifient que le mot de passe doit avoir une longueur de 10 caractères et inclure des chiffres, des symboles, des lettres majuscules et des lettres minuscules.

  **Appel de la fonction `generateRandomPassword`** :

```javascript
    generateRandomPassword();
```
-La fonction `generateRandomPassword` est appelée pour générer un mot de passe et l'afficher dans la console.
 
**executer la commande suivante dans terminal**
 ```bash
    node passwordGenerator.js
 ```


 le mot de passe géneré s'affiche dans la console à chaque fois qu'on execute la commande

**V- Dans cette tâche, vous allez :
Créer un fichier nommé e-expéditeur d'e-mail:
npm install nodemailer (https://www.w3schools.com/nodejs/nodejs_email.asp).
Essayez d'envoyer votre propre e-mail en utilisant ce**

- Initialisation d' un nouveau projet Node.js :
    ```bash
    npm init -y
    ```
- Installation du module `nodemailer` :
    ```bash
    npm install nodemailer
    ```
- Installation du module `dontev`:
```bash
    npm install dontev
```
pour securiser les informations personnelles

-Creation d'un fichier `.env`
```env
  EMAIL_USER = exemple@gmail.com
  EMAIL_PASS = *********
```

- Création d un fichier `emailsender.js`:

 **Importation du module `dontev`et `nodemailer`** :
 
```javascript
  //pour sécuriser les mot de passe et email
  require('dotenv').config();

  var nodemailer = require('nodemailer')
```
**definition de transporteur de courrier gmail**

```javascript
  //transporteur de courrier
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
        }
  });
```
- `nodemailer.createTransport` configure le transporteur pour utiliser Gmail pour l'envoi d'e-mails.
  
- Les informations de connexion (e-mail et mot de passe) sont lues depuis les variables d'environnement.

**Définition des options d'e-mail** :
```javascript
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'nickandon07@gmail.com',
        subject: 'Test Nodemailer',
        text: 'Hello, this is a test email sent using Nodemailer from Node.js!'
    };
```
- Les options définissent l'expéditeur, le destinataire, l'objet et le texte de l'e-mail.

**Envoi de l'e-mail** :

```javascript
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log("Erreur lors de l'envoi de l'e-mail:", error);
        } else {
            console.log('E-mail envoyé:', info.response);
        }
    });
```

- `transporter.sendMail` envoie l'e-mail avec les options définies.
- La fonction de rappelgère les erreurs éventuelles et affiche une confirmation si l'e-mail est envoyé avec succès.

la commande pour envoyer un e-mail :
```bash
    node emailsender.js
```
**le mail est envoyé**










