// Envoie une requête GET à l'URL de l'api pour récupérer des données
fetch("escapeGame.json")
  // Une fois que la réponse est reçue
  .then(rep => {
    // transforme la reponse obtenu en JSON 
    return rep.json();
  })
  // Une fois que les données JSON sont extraites avec succès, jeles transmet à une fonction pour l'utiliser plus tard
  .then(data => {
    // Appelle la fonction addProducts() avec les données JSON en entrée
    escapeGame(data);
  });


// Cette fonction prend les données JSON en entrée et effectue une action sur celles-ci
function escapeGame(data) {
    console.log(data)
    let entreprise= data.entreprise

   

  // Affiche les données dans la console du navigateur
  let salle=""
  entreprise.activites.forEach(element => {
    salle += `<div class="activ"> <div class="absolu"><h3>${element.nom}</h3> <p>${element.description}</p> <a href="">Réserver</a> </div> <img src="${element.image}"alt=""></div>`
  });

  let client=""
  entreprise.avantagesClients.forEach(element => {
    client += `<div class="avantage"> ${element}</div>`
  });
  let present=""
  entreprise.presentation.forEach(element => {
   present += `<div class="presenta"> <div class="card"> <img src="${element.image}"alt=""><h4>${element.titre}</h4> <p class="prentp">${element.texte}</p> </div></div>`
  });

  let temoi=""
  entreprise.temoignages.forEach(element => {
   temoi += `<div class="temoigna"> <div class="carte"><p class="com">${element.prenom}</p> <p class="type">${element.typeExperience}</p> <p>${element.commentaire}</p> <div class="note">${element.note}</div></div></div>`
  });

  document.querySelector("#heroo").innerHTML +=`
  <div class="hero">
  <div class="abso">
    <h1>${data.entreprise.nomCommercial}</h1>
    <p>${data.entreprise.phraseAccroche}</p>
    <a href="" class="reserv">${data.entreprise.texteAppelAction}</a>
    </div>
        <img src="assets/AOT-3.jpg" alt="">
    </div>`

  document.querySelector("#content").innerHTML +=
salle
document.querySelector("#contentavan").innerHTML +=
client
document.querySelector("#contentpre").innerHTML +=
present
document.querySelector("#contenttemoi").innerHTML +=
temoi
}
  