/******************************************************************************

                    Chiffrement de Cesar avec mot cle.
                Code fait et realise par Jacques Katsuva
 Le travail est realise avec l'alphabet russe qui contient ici 33 lettres

*******************************************************************************/


// les variables
const n = 4
const m = 8
const esp = 5
const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
const alph = alphabet.split('')
const word = "работа"
const word_tab = word.split('')
const txt = "прилетаю завтра"
const txt_tab = txt.split('')
let key
let result = []
let multiple = []
let rs = []


// Division de l'alphabet et nettoyage de la cle
key = cleanArray(word_tab)
console.log("Alphabet =", alph)


// Ajout des espace avant la cle
let rev =[]
for (let j = alph.length-esp; j < alph.length; j++) {
    let symbol = alph[j]
    for (let i = 0; i < esp; i++) {
        rev.unshift(symbol)
        i=esp
    }
}
key = rev.reverse().concat(key)
console.log("Key =", key)

// Melange des deux tables et nettoyage des doublons - Table de trisemus 
melange = result.concat(key)
melange2 = cleanArray(melange.concat(alph))


// Resultat tableau global
console.log("Result =", melange2)


// Division De la table generale en 4 table de 8 element
let master = []
let k = 0
for (let i = 0; i < 4; i++) {
    master.push([melange2.slice(k, k + 8)])
    k += 8
}
console.log("Master =", master) //Ref: master[3][0][2]


// Chiffrement des lettres
for (let k = 0; k < txt_tab.length; k++) {
    let symbol = txt_tab[k]
    for (let i = 0; i < alph.length; i++) {
            if (symbol == alph[i]) {
                symbol = melange2[i]
                i = alph.length
                break
        }
    }
    rs[k] = symbol
}
console.log("Key =", word)
console.log("Word =", txt_tab.join(""))
console.log("Cesar with key chiff =", rs.join(""))

//Fonction pour supprimer les doublons
function cleanArray(array) {
    var i, j, len = array.length, out = [], obj = {};
    for (i = 0; i < len; i++) {
        obj[array[i]] = 0;
    }
    for (j in obj) {
        out.push(j);
    }
    return out;
}



