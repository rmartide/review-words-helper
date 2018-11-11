
const shuffle = (array, array2) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
      temporaryValue = array2[currentIndex];
      array2[currentIndex] = array2[randomIndex];
      array2[randomIndex] = temporaryValue;
    }
    return [array, array2]
  }

export default {
    shuffle
}