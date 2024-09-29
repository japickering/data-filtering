const accounts = [
  { id: 0, username: 'chun', last: 'li', age: 25, country: 'china' },
  { id: 1, username: 'sam', last: 'baker', age: 20, country: 'united kingdom' },
  { id: 2, username: 'samuel', last: 'jackson', age: 60, country: 'united states' },
];
const matched = accounts.find((element) => element.username.includes('sam'));
console.log('first matched', matched);
// first matched { id: 1, name: 'sam', last: 'baker', age: 20, country: 'united kingdom' },

const filtered = accounts.filter((element) => element.username.includes('sam'));
console.log('filtered', filtered);

const ages = filtered.map((element) => element.age);
const initialValue = 0;
const sumWithInitial = ages.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial);
// 80
