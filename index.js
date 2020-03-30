// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix')
let error = document.querySelector('small')
let formulaire = document.querySelector('#formulaire')
let tryAgain = document.querySelector('.try')
let submit = document.querySelector('.btn-primary')

// Etape 2 - Cacher l'erreur
error.style.display = 'none'


// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001);
let coups = 0;
let nombreChoisi;

let player = document.querySelector('#audioPlayer');
formulaire.addEventListener('click', () => {
    player.play()
    player.volume = 0.03
})
let perduSound = document.querySelector('#perduSound');
const loose = () => {
    perduSound.play()
    perduSound.volume = 0.3
}
let victory = document.querySelector('#victorySound')
const win = () => {
    victory.play()
    player.pause()
    perduSound.volume = 0.3
}

// Etape 6 - Créer la fonction vérifier
function verifier(nombre) {
    let instruction = document.createElement('div')
    if (nombre < nombreAleatoire) {
        instruction.textContent = '#' + coups + " C\'est plus que " + nombre + " !"
        instruction.className = 'instruction plus'
        loose()

    }
    else if (nombre > nombreAleatoire) {
        instruction.textContent = '#' + coups + " C\'est moins que " + nombre + " !"
        instruction.className = 'instruction moins'
        loose()
    }
    else {
        instruction.textContent = '#' + coups + " Félicitation, vous avez trouvé le juste prix  " + nombre + " !"
        instruction.className = 'instruction fini'
        input.disabled = true;
        submit.disabled = true;
        win()
    }
    document.querySelector('#instructions').prepend(instruction)

}
tryAgain.style.display = 'none'
function tryVar(e) {
    e.preventDefault(e)
    window.location.reload()
}
tryAgain.addEventListener('click', tryVar)

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    if (isNaN(input.value)) {
        error.style.display = 'inline'
    }
    else {
        error.style.display = 'none'
    }
})
// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isNaN(input.value) || input.value == '') {
        input.style.borderColor = 'red'
        input.value = ''
    }
    else {
        input.style.borderColor = 'silver'
        coups++
        nombreChoisi = input.value;
        input.value = ''
        verifier(nombreChoisi)
        tryAgain.style.display = 'block'
    }

})

