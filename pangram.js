const panagram = "abcdefghijklmnopqrstuvwxyz";
const notAPanagram = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

function pangrams(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let regex = /\s/g;
  let lowercase = string.toLowerCase().replace(regex, "");

  for (let i = 0; i < alphabet.length; i++) {
    if (lowercase.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }

  return true;
}

console.log(pangrams(panagram));
console.log(pangrams(notAPanagram));
