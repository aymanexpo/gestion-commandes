var button = document.getElementsByClassName("button");
var divButton = document.getElementsByClassName("divButton");
var input = document.getElementsByClassName("input");
var resultat = document.getElementsByClassName("resultat");
var all = document.getElementsByClassName("all");
var suiv = document.getElementsByClassName("suiv");
var valider = document.getElementById("valider");

var id = 1;
var dd = new Date() ;
var prixU = 0;
var prixHT=0;
var prixR = 0;
var quantite = 0
var prixT = 0;


function prixHorsTaxe(prixU) {
  return prixHT = Math.floor(prixU*0.8);
}

function montantReduction(quantite) {
  if (quantite > 19 && quantite < 50) {
    prixHT -= (prixHT*0.15);
    return prixR = prixHT*0.15;
  }
  else if (quantite > 49 && quantite < 101) {
    prixHT -= (prixHT*0.2);
    return prixR = prixHT*0.2;
  }
  else if (quantite > 100) {
    prixHT -= (prixHT*0.3);
    return prixR = prixHT*0.3;
  }
}

function montantTotal(prixU,quantite,prixR) {
  return prixT = (prixU-prixR) * quantite ;
}


class commande{

  constructor(idCommande,nomClient,nomArticle,prixUnitaire,quantite,dateCommande){
    this.idC = idCommande;
    this.nomCl = nomClient;
    this.nomA = nomArticle;
    this.px = prixUnitaire;
    this.quantit = quantite;
    this.date = dateCommande;
  }


}


valider.addEventListener("click",
  function(){
    quantite = input[2].value;
    resultat[4].textContent = montantReduction(quantite);
    resultat[5].textContent = montantTotal(prixU,quantite,prixR);
});


button[0].addEventListener("click",
  function () {
    divButton[0].classList.add("hidden");
    all[0].classList.remove("hidden");


    prixU = Math.floor(Math.random()*100);

    resultat[0].textContent = id;
    resultat[1].textContent = prixU;
    resultat[2].textContent = dd.getDay() + " " + dd.getMonth() + " " +  dd.getFullYear();
    resultat[3].textContent = prixHorsTaxe(prixU);
});

suiv[0].addEventListener("click",function () {

  divButton[0].classList.remove("hidden");
  all[0].classList.add("hidden");

});


suiv[1].addEventListener("click",function () {
  //  (idCommande,nomClient,nomArticle,prixUnitaire,quantite,dateCommande)
    var c = new commande(id++,input[0].value,input[1].value,prixU,input[2].value,dd);
});
//
