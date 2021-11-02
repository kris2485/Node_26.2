const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Krzysztof', 'Karol', 'Mateusz', 'Marcin', 'Daniel'];
const famaleNames = ['Martynka', 'Justyna', 'Marianka', 'Anna', 'Rozalia'];
const lastNames = ['Green', 'Geller', 'Bing', 'Tribbiani', 'Buffay'];

const randChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

const people = [];

for (let i = 0; i < 20; i++) {
  let person = {};

  person.gender = randChoice(genders);

  if (person.gender === 'M') {
    person.name = randChoice(maleNames);
  } else {
    person.name = randChoice(famaleNames);
  }
  person.surname = randChoice(lastNames);
  person.age = Math.floor(Math.random() * 61) + 18;

  people.push(person);
}

const data = JSON.stringify(people);
fs.writeFile('people.json', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
