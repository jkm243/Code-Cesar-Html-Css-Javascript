// les variables
const n = 4
const m = 8
const alphabet = "абвгдежзийклмнопрстуфхцчшщъыьэюя"
const alph = alphabet.split('')
const word = "работа"
const word_tab = word.split('')
let key = 0
let result = []
let multiple = []

// var num = [,];
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//         num[i, j] = Math.floor(Math.random(6.2) * 100)
//         console.log(num[i, j]);
//         key += 1
//     }
// }

console.log("Alphabet =", alph)
console.log("Key =", cleanArray(word_tab))


// Melange des deux tables
melange = result.concat(cleanArray(word_tab))
melange2 = melange.concat(alph)

// Resultat tableau global
console.log("Result =", cleanArray(melange2))



m1 = diviseArray(multiple,melange2,num)
console.log("M1",m1)
multiple.splice(0,8)
m2 = diviseArray(multiple,melange2,num)
console.log("M2",m2)


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




// Fonction pour diviser le tableau general
function diviseArray(arr,arr2,res){
    arr = cleanArray(arr2)
    var res = [,,,];
    for (let j = 0; j < 8; j++) {
        res[j]=arr[j]
    }
    return res
}


