const user = {
  firstName: 'Rafael',
  lastName: 'Barbosa',
  age: 18,
  instagram: '@_rafael_yamada',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
};

// Rest(resto) operator 
const { firstName, skills, ...restoUser } = user;
const [ primary, secondary, ...restoSkills ] = skills;

console.log(restoSkills);