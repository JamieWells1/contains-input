// #383 Ransom Note
// Difficulty: Easy
// Tests passed: 128/128
// Runtime: 104ms

function canConstruct(ransom, magazine) {
  let count = 0;
  let magArray = [];

  for (let i = 0; i < magazine.length; i++) {
    magArray.push(magazine[i]);
  }

  for (let i = 0; i < ransom.length; i++) {
    for (let j = 0; j < magArray.length; j++) {
      if (ransom[i] === magArray[j]) {
        count += 1;
        magArray.splice(j, 1);
        break;
      }
    }
  }
  if (count !== ransom.length) {
    return false;
  } else {
    return true;
  }
}
