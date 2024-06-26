
        // Ajoute un écouteur d'événement qui exécute le code après le chargement complet du DOM
        document.addEventListener('DOMContentLoaded', function() {
            // Sélectionne le conteneur des diapositives dans le carrousel
            const slidesContainer = document.querySelector('.carousel .slides');
            // Crée un tableau contenant toutes les diapositives du carrousel
            const slides = Array.from(document.querySelectorAll('.carousel .slide'));
            // Initialise l'index de la diapositive actuelle à 0
            let currentIndex = 0;
            // Définit le temps d'intervalle entre chaque changement de diapositive à 8000 millisecondes (8 secondes)
            const intervalTime = 8000;
            // Déclare une variable pour stocker l'intervalle du diaporama
            let slideInterval;

            // Déplace le carrousel vers la diapositive suivante
            function moveToNextSlide() {
                currentIndex = (currentIndex + 1) % slides.length;
                slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
            }

            // Déplace le carrousel vers la diapositive précédente
            function moveToPrevSlide() {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
            }

            // Ajoute un écouteur d'événement pour le bouton "suivant" afin de passer à la diapositive suivante et de réinitialiser l'intervalle
            document.querySelector('.next').addEventListener('click', function() {
                moveToNextSlide();
                resetInterval();
            });

            // Ajoute un écouteur d'événement pour le bouton "précédent" afin de revenir à la diapositive précédente et de réinitialiser l'intervalle
            document.querySelector('.prev').addEventListener('click', function() {
                moveToPrevSlide();
                resetInterval();
            });

            // Démarre le diaporama en définissant un intervalle pour passer automatiquement à la diapositive suivante
            function startSlideShow() {
                slideInterval = setInterval(moveToNextSlide, intervalTime);
            }

            // Réinitialise l'intervalle du diaporama en l'arrêtant et en le redémarrant
            function resetInterval() {
                clearInterval(slideInterval);
                startSlideShow();
            }

            // Lance le diaporama au chargement de la page
            startSlideShow();
        });
    


    // Attendre que le contenu du document soit chargé avant d'exécuter le script
    document.addEventListener('DOMContentLoaded', function() {
        // Sélectionner le bouton qui permet de basculer le menu
        const menuToggle = document.querySelector('.menu-toggle');
        // Sélectionner l'élément de navigation dans l'en-tête
        const nav = document.querySelector('header nav');

        // Ajouter un écouteur d'événement pour détecter les clics sur le bouton de basculement du menu
        menuToggle.addEventListener('click', function() {
            // Basculer la classe 'open' sur l'élément de navigation pour ouvrir ou fermer le menu
            nav.classList.toggle('open');
        });
    });


// Obtenir le bouton remonter haut de page
let mybutton = document.getElementById("scrollToTopBtn");

// Quand l'utilisateur fait défiler la page de 20px vers le bas, montrer le bouton
window.onscroll = function() {scrollFunction()};

// Fonction pour gérer l'affichage du bouton en fonction du défilement de la page
function scrollFunction() {
  // Si l'utilisateur a fait défiler plus de 20 pixels vers le bas
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // Afficher le bouton
    mybutton.style.display = "block";
  } else {
    // Sinon, cacher le bouton
    mybutton.style.display = "none";
  }
}

// Quand l'utilisateur clique sur le bouton, remonter en haut de la page
mybutton.onclick = function() {
  // Défilement en douceur jusqu'en haut de la page
  window.scrollTo({top: 0, behavior: 'smooth'});
}

// Fonction pour ouvrir le modal et afficher l'image en grand format
function openModal(element) {
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = element.src;
}

// Fonction pour fermer le modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Ferme le modal si l'utilisateur clique en dehors de l'image
window.onclick = function(event) {
    var modal = document.getElementById("imageModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

