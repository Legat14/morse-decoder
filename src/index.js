const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    ' ': ' '
};

function decode(expr) {

    let decode = '';

    function decodeOneLetter(exprRemains) {
        let currentLetterEncoded;
        if (exprRemains.length > 0) {
            currentLetterEncoded = (+exprRemains.slice(0, 10)).toString();
            let currentLetterMorseCode = '';
            if (exprRemains.slice(0, 10) == '**********') {
                currentLetterMorseCode += ' ';
            } else {
                for (let i = 0; i < currentLetterEncoded.length; i += 2) {
                    if (currentLetterEncoded[i + 1] === '0') {
                        currentLetterMorseCode += '.';
                    } else {
                        currentLetterMorseCode += '-';
                    }
                }
            }
            decode += MORSE_TABLE[currentLetterMorseCode];
            decodeOneLetter(exprRemains.slice(10));
        }
        return decode;
    }

    return decodeOneLetter(expr);
}

module.exports = {
    decode
}