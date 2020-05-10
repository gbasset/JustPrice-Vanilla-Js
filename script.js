// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix')
let error = document.querySelector('small')
let formulaire = document.querySelector('#formulaire')
let tryAgain = document.querySelector('.try')
let devine = document.querySelector('#devine')

// Etape 2 - Cacher l'erreur
error.style.display = 'none'

// Etape 3 - Générer un nombre aléatoire

let nombreAleatoire = Math.floor(Math.random() * 1001);
//  lien: "https://drive.google.com/uc?id=1Ml6bmV00gOcK8ZR8DAlbpgNLlvL_rS5n",
let coups = 0;
let nombreChoisi;
const arrayArticles = [
    {
        nom: 'Lunettes Alain FlouAffle',
        lien: "./imagesJeux/photo-1475312775467-159e03aaa7cd.jfif",
        message: 'Il est dingue AffleLLou , il est dingue !',
        Prix: '580€'
    },

    {
        nom: 'Baskettes NiKe ',
        lien: "./imagesJeux/photo-1542291026-7eec264c27ff.jfif",
        message: 'Cours Forest cours !! !',
        Prix: '180€'
    },
    {
        nom: 'Avion qui vole !',
        lien: "./imagesJeux/airplane.jpeg",
        message: 'Vroooum !',
        Prix: '180€'
    },
    {
        nom: 'Canard en platock',
        lien: "./imagesJeux/duckplastic.jfif",
        message: 'Coin Coin !',
        Prix: '180€'
    },
    {
        nom: 'NoNoss',
        lien: "./imagesJeux/osos.jfif",
        message: 'On est tombé sur un os !',
        Prix: '180€'
    },
    {
        nom: 'Chaussettes',
        lien: "./imagesJeux/chaussettes.jfif",
        message: 'Un homme qui garde des chaussettes de ville avec un bermuda ne peut pas être totalement mauvais. !',
        Prix: '180€'
    },
    {
        nom: 'Ferrarie',
        lien: "./imagesJeux/ferrarie.jpeg",
        message: 'Allez Schumacher !',
        Prix: '180€'
    },
    {
        nom: 'Arc de Triomphe',
        lien: "./imagesJeux/arctriomphe.jfif",
        message: 'Ah àa, c\'est ma porte ...',
        Prix: '180€'
    },
    {
        nom: 'Cullotte',
        lien: "./imagesJeux/culotte.jfif",
        message: 'T\'as pas vu mon slibard ?',
        Prix: '180€'
    },
    {
        nom: 'PQ',
        lien: "./imagesJeux/pq.jfif",
        message: 'Avant le Covid c\'etait pas cher !',
        Prix: '180€'
    },
    {
        nom: 'Saucisse',
        lien: "./imagesJeux/saucisse.jfif",
        message: 'Barbeuc Party !',
        Prix: '180€'
    },
    {
        nom: 'Fusée',
        lien: "./imagesJeux/rocket.jpg",
        message: 'C’est un petit pas pour l’homme, un grand pas pour l’humanité ',
        Prix: '180€'
    },

    {
        nom: 'Chat de Noel',
        lien: "./imagesJeux/chatnoel.webp",
        message: 'Miaou Miaouh !',
        Prix: '180€'
    },
    {
        nom: 'Un Nokia 3310',
        lien: "./imagesJeux/nokia.webp",
        message: 'Toujours aussi solide  !',
        Prix: '180€'
    },
    {
        nom: 'Un Superbe chandelier',
        lien: "./imagesJeux/chandelier.webp",
        message: 'Aziz, Lumière !',
        Prix: '180€'
    },
    {
        nom: 'Une boite de croquettes',
        lien: "./imagesJeux/croquettes.webp",
        message: 'Parce qu\'il le vaut bien !',
        Prix: '180€'
    },
    {
        nom: 'Une brosse à dents',
        lien: "./imagesJeux/brosseadents.jfif",
        message: 'Le sourire avec des dents !',
        Prix: '180€'
    },
    {
        nom: 'Un mixeur',
        lien: "./imagesJeux/food-mixer-413737__340.webp",
        message: ' Mix by Dj Laurent Garnier',
        Prix: '180€'
    },
    {
        nom: 'Un coupe ongles',
        lien: "./imagesJeux/coupeongle.jfif",
        message: 'Coupe moi donc l\'onglet!',
        Prix: '180€'
    },
    {
        nom: 'Une tondeuse',
        lien: "./imagesJeux/tondeuse.jpg",
        message: 'Coupe coupe!',
        Prix: '180€'
    },
    {
        nom: 'Un rasoir',
        lien: "./imagesJeux/razorpexels-photo-995300.jpeg",
        message: 'Renh t\'es rasoir!',
        Prix: '180€'
    },
    {
        nom: 'Un Mackintosk',
        lien: "./imagesJeux/macintosh.jfif",
        message: 'C\'est donc lui le Mac!',
        Prix: '180€'
    },
    {
        nom: 'Un Valise',
        lien: "./imagesJeux/valise.webp",
        message: 'Tu prends tes clics, tes clacs. Et tu te tailles.',
        Prix: '180€'
    },

    {
        nom: 'Un vachette',
        lien: "./imagesJeux/cow-pasture-animal-almabtrieb.jpg",
        message: 'les produits laitiers sont nos amis pour la vie',
        Prix: '180€'
    },

]
let NumArticleAleatoire;
const getNumber = () => {
    NumArticleAleatoire = Math.floor(Math.random() * Math.floor(arrayArticles.length))
}
getNumber()
let numOfPrevArticle;
if (localStorage.getItem('prev')) {
    numOfPrevArticle = localStorage.getItem('prev')
    if (numOfPrevArticle === NumArticleAleatoire) {
        getNumber()
    }
    localStorage.setItem('prev', NumArticleAleatoire)
}
if (!localStorage.getItem('prev')) {
    localStorage.setItem('prev', NumArticleAleatoire)
}

console.log('NumArticleAleatoire', NumArticleAleatoire);
console.log('numOfPrevArticle', numOfPrevArticle);
// let numberOfLength
// let nombreAleatoire = NumArticleAleatoire.Prix
// Generer un article aléatoire
function getAleatoireArticle(num) {
    numberOfLength = arrayArticles[num]
    return numberOfLength
}
getAleatoireArticle(NumArticleAleatoire)
console.log("numberOfLength", numberOfLength);

let imageOfArticle = document.querySelector('.imageOfArticle')
imageOfArticle.innerHTML = `<img src=${numberOfLength.lien}>`
let player = document.querySelector('#audioPlayer');

let titleAArticle = document.querySelector('.titleAArticle')
titleAArticle.innerHTML = `${numberOfLength.nom}`

let history = document.querySelector('.history')
history.innerHTML = `${numberOfLength.message}`
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
        instruction.textContent = '#' + coups + " C\'est plus que " + nombre + "€" + " !"
        instruction.className = 'instruction plus'
        loose()

    }
    else if (nombre > nombreAleatoire) {
        instruction.textContent = '#' + coups + " C\'est moins que " + nombre + "€" + " !"
        instruction.className = 'instruction moins'
        loose()
    }
    else {
        instruction.textContent = '#' + coups + " Félicitation, vous avez trouvé le juste prix  " + nombre + "€" + " !"
        instruction.className = 'instruction fini'
        input.disabled = true;
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


// window.onscroll = function () { myFunction() };

// function myFunction() {
//     var x = document.body.scrollTop || document.documentElement.scrollTop;
//     if (x > 150) { document.querySelector("container-fluid") }
//     else if (x > 100) {
//         console.log('x>100', x);
//     }
//     else if (x > 50) {
//         console.log('x>50', x);

//     } else {
//         console.log('le firrst', x);

//     }
//     console.log('taille de scroll', x);

// }


// window.onscroll = function getScrollPercent() {
//     var scrollTop = document.body.scrollTop,
//         windowHeight = window.innerHeight,
//         scrollheight = document.body.scrollHeight;
//     scrollTop = (scrollTop / (scrollheight - windowHeight)) * 100
//     console.log(scrollTop)
//     console.log('-------------');

// }
