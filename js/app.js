// les variables
const n = 4
const m = 8
const alphabet = "абвгдежзийклмнопрстуфхцчшщъыьэюя"
const alph = alphabet.split('')
const word = "работа"
const word_tab = word.split('')
const txt = "прилетаю завтра"
const txt_tab = txt.split('')
let key
let m1=[],m2=[],m3=[],m4=[]
let result = []
let multiple = []
var num = [];

// var num = [,];
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//         num[i, j] = Math.floor(Math.random(6.2) * 100)
//         console.log(num[i, j]);
//         key += 1
//     }
// }


// Division de l'alphabet et nettoyage de la cle
key = cleanArray(word_tab)
console.log("Alphabet =", alph)
console.log("Key =", key)


// Melange des deux tables et nettoyage des doublons - Table de trisemus 
melange = result.concat(key)
melange2 = cleanArray(melange.concat(alph))


// Resultat tableau global
console.log("Result =",melange2)


// Division De la table generale en 4 table de 8 element
let master = []
let k = 0
for (let i = 0; i < 4; i++) {
    master.push([melange2.slice(k,k+8)])
    k+=8
}
console.log("Master =",master) //master[3][0][2]

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



