// On cible le formulaire par son ID
const formulaire = document.getElementById('monFormulaire');

if (formulaire) {
    formulaire.addEventListener('submit', function(event) {
        // 1. On empêche le rechargement de la page
        event.preventDefault();

        // 2. On récupère le nom saisi
        const nom = document.getElementById('nom').value;

        // 3. On affiche le vrai message de succès
        alert("Merci " + nom + " ! Votre message a bien été envoyé (simulation). Mioramalala vous répondra bientôt.");

        // 4. On vide les champs du formulaire
        this.reset();
    });
}