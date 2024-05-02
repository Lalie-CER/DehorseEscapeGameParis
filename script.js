
    
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

   

  // Affiche les données dans l'html de la page
  let salle=""
  entreprise.activites.forEach(element => {
    salle += `<div class="activ" data-aos="zoom-in"> <section class="absolu"><h3>${element.nom}</h3> <p>${element.description}</p> <a href=""><i class="fa-solid fa-calendar-week"></i>Réserver</a></section> <img src="${element.image}"alt=""></div>`
  });
//Variables dont ont ajoute les données puis qui est pousser dans l'html
  let client=""
  entreprise.avantagesClients.forEach(element => {
    client += `<div class="avantage" data-aos="flip-up" style="background-image: url('${element.image}')"> <p>${element.texte}</p> </div>`
  });
  let present=""
  entreprise.presentation.forEach(element => {
   present += `<div class="presenta" data-aos="flip-left"> <div class="card "> <img src="${element.image}"alt=""><h4>${element.titre}</h4> <p class="prentp">${element.texte}</p> </div></div>`
  });

  let temoi=""
  entreprise.temoignages.forEach(element => {
   temoi += `<div class="carte" data-aos="flip-down">  <div class="note">${avis(element.note)}</div><p class="com">${element.prenom}</p> <p class="type">${element.typeExperience}</p> <p>${element.commentaire}</p></div>`
  });
//Ont pousse les données dans l'html
  document.querySelector("#heroo").innerHTML +=`
  <div class="abso">
    <h1>${data.entreprise.nomCommercial}</h1>
    <p>${data.entreprise.phraseAccroche}</p>
    <a href="" class="reserv"><i class="fa-solid fa-calendar-week"></i>${data.entreprise.texteAppelAction}</a>
    </div>
        <img src="assets/AOT-3.jpg" alt="">`
        //Ont pousse les varialbes aupréalablement rempli par le foreach dans l'html
  document.querySelector("#content").innerHTML +=
salle
document.querySelector("#contentavan").innerHTML +=
client
document.querySelector("#contentpre").innerHTML +=
present
document.querySelector("#contenttemoi").innerHTML +=
temoi
document.querySelectorAll(".rating").note +=
chaine
}
//Une fonction pour que les notes sois sous forme d'étoiles, et qui rempli bien le nombre d'étoiles par rapport a la note
function avis(note){
  let chaine=""
  for(let i=1; i<=note; i++){
    chaine+="★"
  }

  for(let j=0; j<5-note; j++){
    chaine+="☆"
  }
  
  return chaine
}
//Pour afficher une carte avec un ping avec dessus marquers les informations du lieu
var map = L.map('map').setView([48.851308, 2.289109], 13);

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
    minZoom: 0,
    maxZoom: 20,
    attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    ext: 'png'
}).addTo(map);

L.marker([48.851308, 2.289109]).addTo(map)
    .bindPopup('<h2>Dehors! EscapeGames Paris<br> 06 56 76 23 98 <br> escapegame.paris@gmail.com')
    .openPopup();
//Laisse le temps au carte d'être fini pour afficher les animations
setTimeout(()=>{
   AOS.init();
},500)


// Sélectionne tous les éléments HTML avec la classe "rating__star" et les stocke dans un tableau.
const tableauEtoiles = [...document.getElementsByClassName("rating__star")];

// Fonction pour gérer l'évaluation en fonction des étoiles cliquées.
function creerNote(etoiles) {
  // Classes CSS pour les étoiles actives et inactives.
  const classeEtoileActive = "rating__star fas fa-star";
  const classeEtoileInactive = "rating__star far fa-star";
  // Longueur du tableau d'étoiles.
  const longeurTableauEtoiles = etoiles.length;
  
  //initialiser une variable i nécessaire pour plus tard.
  let i;

    // Pour chaque étoile dans le tableau...
  etoiles.forEach(etoile => {
    
    etoile.onclick = () => {
      // Trouve l'index de l'étoile cliquée.
      i = etoiles.indexOf(etoile);
  
      // Si l'étoile est inactive, active toutes les étoiles précédentes jusqu'à celle-ci.
      if (etoile.className === classeEtoileInactive) {
        for (i; i >= 0; --i) etoiles[i].className = classeEtoileActive;
      } else {
        // Sinon, désactive toutes les étoiles suivantes à partir de celle-ci.
        for (i; i < longeurTableauEtoiles; ++i) etoiles[i].className = classeEtoileInactive;
      }
    };
  });

}

// Appelle la fonction executerNotation avec le tableau d'étoiles en tant qu'argument.
creerNote(tableauEtoiles);