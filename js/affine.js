var textOr2 = document.querySelector('.txtOr2')
var textCr2 = document.querySelector(".txtCr2")
var key_A = document.querySelector('#inlineFormCustomSelectA')
var key_B = document.querySelector('#inlineFormCustomSelectB')
var erreur2 = document.querySelector('.erreur2')



/* конец оформления */
var cipher = new AffinCipher('source', 'dest');
cipher.init();
document.getElementById('source').oninput = function () {
     cipher.decrypt();
 }
 document.getElementById('source').oninput = function () {
    cipher.encrypt();
}

 document.getElementById('alphabet').onkeyup = function () {
     this.setAttribute('title', this.value.length + ' символов');
}
document.getElementById('alphabet').onkeyup();

// Traduction sur texte original Cesar 2
txtOr2.addEventListener("input", (e) => {
    // Recuperation valeur de la cle
    if (key_A.value == 'Choose the key A') {
        erreur2.innerHTML = '*Choose the key A'
        erreur2.style.color = 'red'}
    else if (key_B.value == 'Choose the key B') {
        erreur2.innerHTML = '*Choose the key B'
        erreur2.style.color = 'red'}
    if (option1.checked === true) {
        source.onkeyup = function () {
            cipher.encrypt();
        }
        erreur2.innerHTML = ''
    } else {
        source.onkeyup = function () {
            cipher.encrypt();
        }
        erreur.innerHTML = ''
    } 
})

/**
* @param string source id textarea с исходным текстом
* @param string dest id textarea с зашифрованным текстом
*/
function AffinCipher(source, dest) {
    this.src = document.getElementById(source);
    this.dst = document.getElementById(dest);

    this.init = function () {
        this.alphabet = document.getElementById('alphabet').value;
        this.kInput = document.getElementById('inlineFormCustomSelectA');
        this.aInput = document.getElementById('inlineFormCustomSelectB');
        this.prevAlph = this.alphabet.toLowerCase();
        this.symbols = [];
        for (var i = 0; i < this.prevAlph.length; i++) {
            this.symbols.push(this.prevAlph.charAt(i));
        }
    };
    /**
     * Проверяет, являются ли два числа взаимно простыми.
     * @param a int число
     * @param b int число
     * @return boolean true, если являются, false - иначе
     **/
    this.isCoprime = function (a, b) {
        var min = Math.min(a, b);
        for (var i = 2; i <= min; i++) {
            if (!(a % i) && !(b % i))
                return false;
        }
        return true;
    };
    /**
     * Возвращает номер буквы c в алфавите symbols
     * @param symbols array буквы
     * @param c буква
     * @return int номер позиции c в symbols, -1,
     * если такая отсутствует.
     */
    this.getPos = function (c) {
        for (var i = 0; i < this.alphabet.length; i++) {
            if (this.alphabet.charAt(i) == c)
                return i;
        }
        return -1;
    };
    this.encrypt = function () {
        this.alphabet = document.getElementById('alphabet').value;
        var k = parseInt(this.kInput.value);
        var a = parseInt(this.aInput.value);
        this.kInput.value = k;
        this.aInput.value = a;
        if (!this.validate(a, k)) {
            return;
        }
        document.getElementById('error').style.display = 'none';
        var n = this.alphabet.length;
        var text = this.src.value.toLowerCase();
        var encryptedT = '';
        for (var i = 0; i < text.length; i++) {
            var c = text.charAt(i);
            var pos = this.alphabet.indexOf(c);
            if (pos < 0) {
                encryptedT += c; // не шифруем данный символ
                continue;
            }
            var newPos = (parseInt(pos) * k + a) % n;
            var newC = this.alphabet.charAt(newPos);
            encryptedT += newC;
        }
        this.dst.value = encryptedT;
    };
    this.decrypt = function () {
        this.alphabet = document.getElementById('alphabet').value;
        var k = parseInt(this.kInput.value);
        var a = parseInt(this.aInput.value);
        this.kInput.value = k;
        this.aInput.value = a;
        if (!this.validate(a, k)) {
            return;
        }
        document.getElementById('error').style.display = 'none';
        var n = this.alphabet.length;
        var kInverse = this.calcInverse(k, n);
        var text = this.dst.value.toLowerCase();
        var decryptedT = '';
        for (var i = 0; i < text.length; i++) {
            var c = text.charAt(i);
            var pos = this.alphabet.indexOf(c);
            if (pos < 0) {
                decryptedT += c; // не расшифровываем данный символ
                continue;
            }
            var newPos = (kInverse * (parseInt(pos) + n - a)) % n;
            var newC = this.alphabet.charAt(newPos);
            decryptedT += newC;
        }
        this.src.value = decryptedT;
    };
    /**
     * Проверяет, корректны ли значения A и K.
     * Устанавливает текст ошибки в div#error
     * @param a int число A из формы
     * @param k int число K из формы
     * @return boolean true если всё верно, иначе - false.
     */
    this.validate = function (a, k) {
        var coprime = '<a href="http://ru.wikipedia.org/wiki/Взаимно_простые_числа" target="_blank">взаимно простыми</a>';
        var errorDiv = document.getElementById('error');
        if (a != parseInt(a) || k != parseInt(k)) {
            errorDiv.style.display = 'block';
            errorDiv.innerHTML = 'A и K должны быть целыми числами.';
            return false;
        }
        if (k <= 0 || a < 0) {
            errorDiv.style.display = 'block';
            errorDiv.innerHTML = 'A и K не могут быть отрицательными; K не может быть равен нулю.';
            return false;
        }
        if (!this.isCoprime(this.alphabet.length, k)) {
            errorDiv.style.display = 'block';
            errorDiv.innerHTML = 'Длина алфавита (' +
                this.alphabet.length +
                ') и K не должны быть ' + coprime + '.';
            return false;
        }
        return true;
    };
    this.calcInverse = function (k, n) {
        for (var i = 1; i < n; i++) {
            if ((k * i) % n == 1)
                return i;
        }
        return 1;
    };
}