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
let coups = 0;
let nombreChoisi;
const arrayArticles = [
    {
        nom: 'Lunettes Alain FlouAffle',
        lien: "https://drive.google.com/uc?id=1Ml6bmV00gOcK8ZR8DAlbpgNLlvL_rS5n",
        message: 'Il est dingue AffleLLou , il est dingue !',
        Prix: '180€'
    },

    {
        nom: 'Baskettes NiKe ',
        lien: "https://drive.google.com/uc?id=1FkDiwQRuh7RE3WZ3efBlp_rkVFmj43nq",
        message: 'Il jhjhj , il est dingue !',
        Prix: '180€'
    },
    {
        nom: 'Airbus de mes deux',
        lien: "https://drive.google.com/uc?id=1WF03epKk-umeHW_myjxjUjXam3jZlhbL",
        message: 'Il jhjhj , il est dingue !',
        Prix: '180€'
    },
    {
        nom: 'Canard en platock',
        lien: "https://drive.google.com/uc?id=1i5si7XpPrySWbghSrvH4BfO81QChMQGB",
        message: 'Il jhjhj , il est dingue !',
        Prix: '180€'
    },
    {
        nom: 'NoNoss',
        lien: "https://drive.google.com/uc?id=1JjfYvUqAj2AkC6dSp5W0-0c1YitaQ-yv",
        message: 'Il jhjhj , il est dingue !',
        Prix: '180€'
    },
    {
        nom: 'Chaussettes',
        lien: "https://drive.google.com/uc?id=1WjrztSjyaK6DdgjHB5Q-yT-9H0aF4EFV",
        message: 'Il jhjhj , il est dingue !',
        Prix: '180€'
    },
    {
        nom: 'Ferrarie',
        lien: "https://drive.google.com/uc?id=1hvAN-RP5MhaGyo0aNHsrT6X_n9WIud5W",
        message: 'Il jhjhj , il est dingue !',
        Prix: '180€'
    },
    {
        nom: 'Arc de Triomphe',
        lien: "https://drive.google.com/uc?id=1E7mscyceZ46-j9P_N5h1GRiiD-nR6kad",
        message: 'Il jhjhj , il est dingue !',
        Prix: '180€'
    },
    {
        nom: 'Cullotte',
        lien: "https://drive.google.com/uc?id=1fVwGhXk1I5a2fHZv8BIfxvbS1lTAHpJA",
        message: 'Il jhjhj , il est dingue !',
        Prix: '180€'
    },
    {
        nom: 'PQ',
        lien: "https://drive.google.com/uc?id=1wd65HORR5_XrpqWW9QxaDYE6XNoCbaWu",
        message: 'Il jhjhj , il est dingue !',
        Prix: '180€'
    },
    {
        nom: 'Saucisse',
        lien: "https://drive.google.com/uc?id=1mJXiaACS1m2Eyipi0tMaszCh8mRa_uT9",
        message: 'Il jhjhj , il est dingue !',
        Prix: '180€'
    },
    {
        nom: 'Fusée',
        lien: "https://drive.google.com/uc?id=1SNo4TDm9wCpdwNN8aKeCCWPXr-iBX2Hf",
        message: 'Il jhjhj , il est dingue !',
        Prix: '180€'
    },
    ,
    {
        nom: 'Chat de Noel',
        lien: "https://drive.google.com/uc?id=18HKr-ei6dNobxlJn7sXA68mj63YS15Yk",
        message: 'Il jhjhj , il est dingue !',
        Prix: '180€'
    },
    {
        nom: 'Un Nokia 3310',
        lien: "https://drive.google.com/uc?id=191OXx3rXHheogMweXq47p0vp8jfoPh87",
        message: 'Il jhjhj , il est dingue !',
        Prix: '180€'
    },
    {
        nom: 'Un Superbe chandelier',
        lien: "https://drive.google.com/uc?id=1mAr3DM_C7lC6eKkFLBMFgEHP4hpdLEG9",
        message: 'Il jhjhj , il est dingue !',
        Prix: '180€'
    },
    {
        nom: 'Un Nokia 3310',
        lien: "https://drive.google.com/uc?id=1mAr3DM_C7lC6eKkFLBMFgEHP4hpdLEG9",
        message: 'Il jhjhj , il est dingue !',
        Prix: '180€'
    },
    {
        nom: 'Une boite de croquettes',
        lien: "https://drive.google.com/uc?id=1mAr3DM_C7lC6eKkFLBMFgEHP4hpdLEG9",
        message: 'Il jhjhj , il est dingue !',
        Prix: '180€'
    },
    {
        nom: 'Une brosse à dents',
        lien: "https://drive.google.com/uc?id=1_hsfUTSpvQLtHnTZQgC6sJ1GrVQMntIh",
        message: 'Il jhjhj , il est dingue !',
        Prix: '180€'
    },
    {
        nom: 'Un mixeur',
        lien: "https://drive.google.com/uc?id=1C98CNhiXY4vTe3_u45ALJSnsWKCDQIbB",
        message: 'Il jhjhj , il est dingue !',
        Prix: '180€'
    },
    {
        nom: 'Un coupe ongles',
        lien: "https://drive.google.com/uc?id=1GF0Y9VofkeRduLuN9zTHTqKk7X6NgxsZ",
        message: 'Il jhjhj , il est dingue !',
        Prix: '180€'
    },
    {
        nom: 'Une tondeuse',
        lien: "https://drive.google.com/uc?id=1pB1RmVSXmDICSQyOesqjDhAgQXVE7WIq",
        message: 'Il jhjhj , il est dingue !',
        Prix: '180€'
    },
    {
        nom: 'Un rasoir',
        lien: "https://drive.google.com/uc?id=1UMjjWQ3Z7ELykO0DsZ-4JQENJtM2tUPY",
        message: 'Il jhjhj , il est dingue !',
        Prix: '180€'
    },
    {
        nom: 'Un Mackintosk',
        lien: "https://drive.google.com/uc?id=1oNA77a7l3A2CSkexaFePraozDFwBVkNg",
        message: 'Il jhjhj , il est dingue !',
        Prix: '180€'
    },
    {
        nom: 'Un Valise',
        lien: "https://drive.google.com/uc?id=1GuCaiZLr3fqzV9dXz3EYzOBkqzcaVMO0",
        message: 'Il jhjhj , il est dingue !',
        Prix: '180€'
    },

]
let NumArticleAleatoire = Math.floor(Math.random() * arrayArticles.length);
let numberOfLength
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
