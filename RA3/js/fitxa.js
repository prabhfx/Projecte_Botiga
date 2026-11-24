// Fitxa de producte dinàmica (fitxa.html): llegeix ?id=CODI de l'adreça i omple la pàgina.
const idProducte = new URLSearchParams(window.location.search).get("id");
const producte = PRODUCTES.find((element) => element.id === idProducte);

// Omple la fitxa (imatge, títol, preu, estoc, etc.).
function ompleFitxa(producte) {
}

if (producte !== undefined) {
  ompleFitxa(producte);
}
