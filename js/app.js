// les variables
const n = 4
const m = 8
let key = 0
let result

var num = [,];
for (let i = 0; i < n; i++) {   
    for (let j = 0; j < m; j++) {
        num[i,j]= Math.floor(Math.random(6.2)*100)
        console.log(num[i,j]);
        key+= 1
    }
}

console.log("=",key)
