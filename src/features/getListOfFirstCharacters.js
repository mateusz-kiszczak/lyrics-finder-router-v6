const getListOfFirstCharacters = (arr, dataObj) => {
  // Create an empty array to callect a first character from title.
  let firstCharactersCollection = [];
  // For every element in array...
  arr.forEach(element => {
    // Get the first character...
    let firstCharacter = dataObj[element].character;
    // if 'firstCharactersCollection' does not have this character add it.
    if (!firstCharactersCollection.includes(firstCharacter)) {
      firstCharactersCollection.push(firstCharacter);
    }
  });
  // Sort the characters in array (numbers first).
  firstCharactersCollection.sort();
  
  return firstCharactersCollection;
};

export default getListOfFirstCharacters;
