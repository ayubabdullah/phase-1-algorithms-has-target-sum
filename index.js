function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let baseElement = 0; baseElement < array.length; baseElement++) {
    for (let otherELement = 0; otherELement < array.length; otherELement++) {
      if (baseElement === otherELement) continue;
      if (array[baseElement] + array[otherELement] === target) return true;
    }
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
