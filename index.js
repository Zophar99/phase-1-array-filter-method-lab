function findMatching(drivers, query){
    return drivers.filter(driver =>driver.toLowerCase() === query.toLowerCase());
}
console.log(findMatching(['Bobby', 'bobby', 'Sammy'], 'Bobby'));
// Expected: ['Bobby', 'bobby']

function fuzzyMatch(drivers,query){
    return drivers.filter(driver =>driver.toLowerCase().startsWith(query.toLowerCase()));
}
console.log(fuzzyMatch(['Bobby', 'Sammy', 'Sally', 'Sarah'], 'Sa'));
// Expected output: ['Sammy', 'Sally', 'Sarah']

function matchName(drivers, name){
    return drivers.filter(driver => driver.name === name);
}
const driverData = [
  { name: 'Bobby', hometown: 'Pittsburgh' },
  { name: 'Sammy', hometown: 'New York' },
  { name: 'Bobby', hometown: 'Tampa Bay' },
];

console.log(matchName(driverData, 'Bobby'));
// Expected:
// [
//   { name: 'Bobby', hometown: 'Pittsburgh' },
//   { name: 'Bobby', hometown: 'Tampa Bay' }
// ]
