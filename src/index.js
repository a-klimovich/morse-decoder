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

const morseSimbol = {
  '10': '.',
  '11': '-',
  '*' : ' '
};

function decode(expr) {
  let arrNumb = [];
  let morseLeters = [];
  let decoding = '';

  for (let i = 0; i < expr.length; i += 10) {
    arrNumb.push(expr.slice(i, i + 10));
  }

  let arrNumbShort = arrNumb.map((item) => {
    if(item.includes('*')) {
      item = '*';
    }
    else if(item.includes('0')) {
      item = item.replace(/^0+/, '');
    }
    return item;
  });

  
  for(let a = 0; a < arrNumbShort.length; a++) {
    let morsLeter = '';
    for(let b = 0; b < arrNumbShort[a].length; b += 2) {
      let part = arrNumbShort[a].slice(b, b + 2);
      morsLeter += morseSimbol[part];
    }
      morseLeters.push(morsLeter);
  }

  
  for(let s = 0; s < morseLeters.length; s++) {
    if(morseLeters[s] === ' ') {
      decoding += morseLeters[s];
    }
    else {
      decoding += MORSE_TABLE[morseLeters[s]];
    }
  }
  return decoding
}

module.exports = {
decode
}