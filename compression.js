const uncompressedString = "QQQUUUUUUUlllllllqqQQQQQQQQQTTA";

function RLE(text) {
  if (text === "") return "";
  let input = text;
  let regex = /(.)\1*/g;
  let result = "";
  let match = regex.exec(input);
  do {
    match[0].length > 1
      ? (result += match[0].length + match[1])
      : (result += match[1]);
    match = regex.exec(input);
  } while (match);

  return result;
}

console.log(RLE(uncompressedString));
