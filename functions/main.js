const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach
  // companies.forEach(function(company) {
  //   console.log(company.name);
  // });

// filter
// filter things out from array


//Filters 21 and over from ages
// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
//
// console.log(canDrink);

// const canDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true;
//   }
// });

//arrow function of the above
// const canDrink = ages.filter(age => age >= 21);
//
// console.log(canDrink);

//sorting out companies by category
// const retailCompanies = companies.filter(company => company.category === "Retail");
// console.log(retailCompanies);

//sorting company by age
// const companies80s = companies.filter(company => company.start < 1990);
// console.log(companies80s);

//sorting company by length of age
// const oldCompanies = companies.filter(company => (company.end - company.start >= 10));
// console.log(oldCompanies);

// map
//create array of company names
// const companyNames = companies.map(function(company) {
//   return company.name;
// });
// console.log(companyNames);

//show company name with start and end date
// const testMap = companies.map(function(company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });
// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(testMap);

// const ageSquare = ages.map(age => Math.sqrt(age));
// console.log(ageSquare);

// sort
// Sort companies by start year
// const sortedCompanies = companies.sort(function(c1, c2) {
//   if(c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

//sort ages
// const sortAges = ages.sort((a, b) => (a > b ? 1 : -1));
// console.log(sortAges);

// reduce
//add all ages together
// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

//total age of all companies
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);
