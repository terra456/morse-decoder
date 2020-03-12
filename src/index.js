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
    // write your solution here
    var arr = Array.from(expr);
    
    var finishArr = [];

    for (let i = 0; i < arr.length; i=i+10) {
      var decSymbArr = arr.slice(i, i+10);

      if (decSymbArr[0] == "*") {
          finishArr.push(" ");
      } else {
        var dotWord = "";
          for (let j = 0; j < decSymbArr.length; j = j+2) {
            const twoSymb = decSymbArr[j] + decSymbArr[j+1];
            var obj = {
              "00": "",
              "10": ".",
              "11": "-",
            };

            dotWord = dotWord + obj[twoSymb];
          }

          finishArr.push(MORSE_TABLE[dotWord]);
        }
    }
      return finishArr.join("");
}

module.exports = {
    decode
}