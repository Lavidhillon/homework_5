const array = [
  "apple",
  "pear",
  "bananas",
  "watermelon",
  "mango",
  "pear",
  "apple",
  "bananas",
  "pear",
  "strawberry",
  "pineapple",
];

const string_lengths = (string_array) => {
  const object = {};
  for (let index = 0; index < string_array.length; index++) {
    const element = string_array[index];
    const hasElement = object.hasOwnProperty(element);
    if (hasElement) {
      object[element] = object[element] + 1;
    } else {
      object[element] = 1;
    }
  }
  return object;
};

console.log(string_lengths(array));
