const americanOnly = require('./american-only.js');
const a2bS = require('./american-to-british-spelling.js');

let a2bT = require("./american-to-british-titles.js");
a2bT = Object.fromEntries(Object.entries(a2bT).map(kv=>kv.map(a=>a.charAt(0).toUpperCase()+a.slice(1))));

const american = Object.assign({},americanOnly,a2bS,a2bT);


const britishOnly = require('./british-only.js');
const b2aS = Object.fromEntries(Object.entries(a2bS).map(kv=>kv.reverse()));
const b2aT = Object.fromEntries(Object.entries(a2bT).map(kv=>kv.reverse()));
const british = Object.assign({},britishOnly,b2aS,b2aT);



const pchange = {
  ".":":",
  ":":"."
}



class Translator {
  translate(text, obj, p, highlight) {
    let result = text;
    if (highlight) {
      for (let i in obj) {
        result = result.replace(new RegExp(`(?<![a-z-])${i}(?!\\w)`,"gi"),`<span class="highlight">${obj[i]}</span>`);
      }
      result = result.replace(new RegExp(`\\d?\\d${p}\\d\\d?`,"g"), (x)=>`<span class="highlight">${x.replace(p,pchange[p])}</span>`);
    } else {
      for (let i in obj) {
        result = result.replace(new RegExp(`(?<![a-z-])${i}(?!\\w)`,"gi"), obj[i]);
      }
      result = result.replace(new RegExp(`\\d?\\d${p}\\d\\d?`,"g"), (x)=> x.replace(p,pchange[p]));
    }
    if (result == text) {
      return "Everything looks good to me!";
    } 
    return result;
  }

  a2b(text, highlight) {
    return this.translate(text, american, ":", highlight);
  }

  b2a(text, highlight) {
    return this.translate(text, british, "\.", highlight);
  }
}

module.exports = Translator;