const accounts = [
  { id: 0, name: 'chun', last: 'li', age: 25, country: 'china' },
  { id: 1, name: 'sam', last: 'baker', age: 20, country: 'united kingdom' },
  { id: 2, name: 'samuel', last: 'jackson', age: 60, country: 'united states' },
];
const matched = accounts.find((element) => element.name.includes('sam'));
console.log('first matched', matched);
// first matched { id: 1, name: 'sam', last: 'baker', age: 20, country: 'united kingdom' },

const filtered = accounts.filter((element) => element.name.includes('sam'));
console.log('filtered', filtered);

const ages = filtered.map((element) => element.age);
const initialValue = 0;
const sumWithInitial = ages.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial);
// 80
