// Service qui va faire du CRUD avec les livres

export const insererLivre= (titre,auteur,resume,estLu) => {
    // ******************************* //
    // Sauvegarder les données saisies //
    // ******************************* //

    // 1° Créer un objet JavaScript à partir des données saisies
    const livre={
        titre: titre,
        auteur: auteur,
        resume: resume,
        estLu: estLu,
        id: crypto.randomUUID(), // ID unique
        createdAt: new Date().toDateString()
    }

    // 2° Sérialiser ( transformer ) en JSON ( chaine de caractères )
    const livreJson=JSON.stringify(livre)

    // 3° Sauvegarde dans le localStorage
    // 3°1 Récupérer dans le localStorage la valeur lié à la clé "livres"
    const livresJson = localStorage.getItem('livres')
    // 3°1 Désérialiser le JSON dans un tableau JavaScript
    const livres = livresJson ? JSON.parse(livresJson):[]
    // 3°3 Ajouter l'objet livre dans le tableau
    livres.push(livre)
    // 3°4 Sauvegarder le tableau livre dans le localStorage sous la clé "livres"
    localStorage.setItem("livres",JSON.stringify(livres))
}

export const rechercherTousLesLivres = () => {

    // 1° Récupérer dans le localStorage la valeur lié à la clé "livres"
    const livresJson = localStorage.getItem('livres')
    // 2° Désérialiser le JSON dans un tableau JavaScript
    const livres = livresJson ? JSON.parse(livresJson):[]
    return livres
}

export const supprimerLivre = id =>{

    // 1° Récupérer tous les livres depuis le localStorage
    const livresJson = localStorage.getItem('livres')
    // 2° Désérialiser le JSON dans un tableau JavaScript
    const livres = livresJson ? JSON.parse(livresJson):[]
    // 3° Supprimer le livre avec l'id 'id' dans le tableau livre
    const livreRestants=livres.filter(livre => livre.id !== id)
    // 4° Sauvegarder le tableau livre dans le localStorage sous la clé "livres"
    localStorage.setItem("livres",JSON.stringify(livreRestants))
}

export const estLu = id =>{

    // Récupérer tous les livres depuis le localStorage
    const livresJson = localStorage.getItem('livres')
    // Désérialiser le JSON dans un tableau JavaScript
    const livres = livresJson ? JSON.parse(livresJson):[]



    // Sauvegarder le tableau livre dans le localStorage sous la clé "livres"
    localStorage.setItem("livres",JSON.stringify(livres))
}