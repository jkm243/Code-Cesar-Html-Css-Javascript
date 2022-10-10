var option1 = document.querySelector('#option1')
var option2 = document.querySelector("#option2")
var key = document.querySelector('#inlineFormCustomSelect')
var txtOr = document.querySelector('.original')
var txtCr = document.querySelector(".crypted")
var bout1 = document.querySelector('.bout1')
var bout2 = document.querySelector(".bout2")
var erreur = document.querySelector('.erreur')


// Changement option de traduction
option1.addEventListener("click", (e) => {
    bout2.classList.remove('active');
    bout1.classList.add('active');
    option1.checked = true
    option2.checked = false
    txtOr.innerHTML = ''
})
option2.addEventListener("click", (e) => {
    bout1.classList.remove('active');
    bout2.classList.add('active');
    option1.checked = false
    option2.checked = true
    txtOr.innerHTML = ''
})

// Traduction sur texte original
txtOr.addEventListener("input", (e) => {
    // Recuperation valeur de la cle
    if (key.value == 'Choose the key...') {
        erreur.innerHTML = '*Choose the key...'
        erreur.style.color = 'red'
    } else if (option1.checked === true) {
        txtCr.innerHTML = cesar(txtOr.value, parseInt(key.value))
        erreur.innerHTML = ''

    } else if (option2.checked === true) {
        txtCr.innerHTML = cesar(txtOr.value, 26 - (parseInt(key.value)))
        erreur.innerHTML = ''
    }
})


function cesar(str, amount) {
    if (amount < 0)
        return cesar(str, amount + 26);

    // variable pour stocker le résultat
    var res = '';
    // Parcourir chaque caractére
    for (var i = 0; i < str.length; i++) {
        // Récupérer le caractére que nous allons ajouter
        var c = str[i];
        // Vérifier si c'est une lettre
        if (c.match(/[a-z]/i)) {
            // Récupérer son code
            var code = str.charCodeAt(i);
            // Lettres majuscules
            if ((code >= 65) && (code <= 90))
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            // Lettres minuscules
            else if ((code >= 97) && (code <= 122))
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }
        // Ajouter le caractére
        res += c;
    }
    // Résultat
    return res;
}

if (option2.checked === true) { cesar('sdsd', 26 - (parseInt(key.value))) }