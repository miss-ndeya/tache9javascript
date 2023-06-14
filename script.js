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
    const positiftab1 = tab1.filter((num) => num > 0);    

    // remplacer les elements de tab2  par des zeros 
    tab2.fill(0);

    // fusionnage des deux tableaux
    const tab3 = positiftab1.concat(tab2);

    // afficher les resultats dans le DOM
    const resultats = document.getElementById("resultats");

    // Afficher le  nouveau tableau
    const tab3Paragraph = document.createElement("p");
    tab3Paragraph.textContent =" tab3 = [ " + tab3.join(", ") + " ]";
    resultats.appendChild(tab3Paragraph);
    
  }