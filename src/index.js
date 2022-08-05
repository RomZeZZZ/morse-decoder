const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let wordArray = [];
    let dotDashesArray = [];
    let returnWords = '';
    for (let index = 0; index < expr.length; index+=10) {
        wordArray.push((expr.slice(index, index + 10)).slice(expr.slice(index, index + 10).indexOf('*'&&'1')));
    }

    for (let i = 0; i < wordArray.length; i++) {
        let letter = '';
        for (let j = 0; j < wordArray[i].length; j+=2) {
           if (wordArray[i] == '*') {
                letter += '*';
           } else if (wordArray[i][j+1] == 0) {
                letter += '.';
           } else {
                letter += '-';
           }
        }
        dotDashesArray.push(letter);
        letter = '';
    }

    for (let index = 0; index < dotDashesArray.length; index++) {
        if (dotDashesArray[index] == '*') {
            returnWords += ' ';
        } else {
            returnWords += MORSE_TABLE[dotDashesArray[index]];
        }
        
    }
    return returnWords;
}
module.exports = {
    decode
}