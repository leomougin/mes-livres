// Gestionnaires d'évènement

import {estLu, insererLivre, supprimerLivre} from "../services/livreService.js";
import {afficherLivres} from "./render.js";

export const setupGestionnaire =  () => {

    // Récupérer les éléments dans le DOM
    const toggleFormBtn = document.querySelector('#toggleFormBtn')
    const formSection = document.querySelector('#formSection')
    const formCollapse = new bootstrap.Collapse(formSection,{toogle:false})
    const livreForm = document.querySelector('#bookForm')

    // Gestionnaire clic bouton toggleFormBtn
    toggleFormBtn.addEventListener('click', () => {
        formCollapse.toggle()
    })

    // On reset le formulaire quand il est caché
    formSection.addEventListener('hidden.bs.collapse',(evt)=>{
        livreForm.reset();
    })

    // Traitement du formulaire
    livreForm.addEventListener('submit',(evt)=> {
        // Empêcher le rechargement de la page
        evt.preventDefault()
        console.log(evt.target)
        // Récupérer les données saisies
        const titre = livreForm.title.value
        const auteur = livreForm.author.value
        const resume = livreForm.summary.value
        const estLu = livreForm.isRead.checked

        // ******************************* //
        // Sauvegarder les données saisies //
        // ******************************* //

        insererLivre(titre, auteur, resume, estLu)

        // Cacher le formulaire
        formCollapse.hide()

        // Afficher la liste des livres
        afficherLivres()
    })
    // Traitement de la suppréssion d'un livre
        // Délegation d'évènement
        const listeLivre = document.querySelector('#booksList')
        listeLivre.addEventListener('click',(evt)=>{
            // Récupération de 'élément sur lequel on a cliqué
            const target =evt.target.closest(".delete-btn,.toggle-read-btn")
            if(target===null)return;
            // Récupérer l'id du livre à supprimer grâce à data-id et dataset
            const idLivre = target.dataset.id
            // Déterminer sur quel élément on a cliqué
            if (target.classList.contains("delete-btn")){
                // Clique sur le bouton supprimé
                console.log("Livre supprimé !")
                supprimerLivre(idLivre)
                afficherLivres()
            }else if(target.classList.contains("toggle-read-btn")){
                console.log("Bouton changé !")
                estLu()
            }
        })
    }

