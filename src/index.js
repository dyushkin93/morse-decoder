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
    let letter="";
    let decoded="";
      for (let i=0; i<expr.length; i+=10) {
        letter=expr.slice(i, i+10);
        letter=letter.replace(/00/g,"");
        letter=letter.replace(/10/g,".");
        letter=letter.replace(/11/g,"-");
        letter=letter.replace(/\*+/g," "); //one "*" or more replace to " "
        letter!=" " ? decoded+=MORSE_TABLE[letter] : decoded+=letter;
      }
    return decoded;
  }

module.exports = {
    decode
}