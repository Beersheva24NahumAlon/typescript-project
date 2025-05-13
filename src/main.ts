type StringNumber = Record<string, number>;

function isAnagram(word1: string, word2: string): boolean {
  let res = false;
    if (word1.length == word2.length) {
      const lettersCount: StringNumber = {};
      Array.from(word1).forEach(letter => lettersCount[letter] != undefined ? lettersCount[letter]++ : lettersCount[letter] = 1);
      Array.from(word2).forEach(letter => {
        lettersCount[letter] != undefined ? lettersCount[letter]-- : lettersCount[letter] = -1
        if (lettersCount[letter] == 0) {
          delete lettersCount[letter];
        }
      });
      console.log(lettersCount);
      if (Object.keys(lettersCount).length === 0) {
        res = true;
      }
    }
  return res;
}

console.log(isAnagram("hello", "olljh"));
console.log(isAnagram("hello", "olleh"));