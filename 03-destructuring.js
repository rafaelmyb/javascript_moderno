const user = {
  firstName: 'Rafael',
  lastName: 'Barbosa',
  age: 18,
  instagram: '@_rafael_yamada',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
};

// Destructuring
const { firstName, age, skills } = user;
const [ primary, secondary, tertiary, quaternary ] = skills;

console.log(primary);