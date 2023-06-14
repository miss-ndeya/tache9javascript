//1. soit deux tableaux (tab1 et tab2) de nombre positif et negatif saisis par l'utilisateur :
// Écrire un programme permettant de recopier dans tab3 tous les éléments positifs de tab1, et 
// remplacer les éléments de tab2  par des zéros sans utiliser une boucle, et afficher les resultats dans le DOM.


function maFonction() {
    // declaration variable pour les tableaux
    const tab1Input = document.getElementById("tab1-input");
    const tab2Input = document.getElementById("tab2-input");

    const tab1 = tab1Input.value.split(",");
    const tab2 = tab2Input.value.split(",");

    // Filtrer les elements positifs de tab1
    const tab3 = tab1.filter((num) => num > 0);    

    // remplacer les elements de tab2  par des zeros 
    tab2.fill(0);

    // afficher les resultats dans le DOM
    const resultats = document.getElementById("resultats");

    // Afficher les elements positifs de tab1
    const tab3Paragraph = document.createElement("p");
    tab3Paragraph.textContent = "les element positives de votre tab1 sont : " + " tab3= [ " + tab3.join(", ") + " ]";
    resultats.appendChild(tab3Paragraph);

    // Afficher les nouveaux elements de tab2 
    const tab2Paragraph = document.createElement("p");
    tab2Paragraph.textContent = "les element de votre tab2 sont remplacer par des zero :" + " tab2= [ " +  tab2.join(", ") + " ]";
    resultats.appendChild(tab2Paragraph);
  }