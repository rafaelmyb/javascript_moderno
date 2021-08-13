const user = {
  firstName: 'Rafael',
  lastName: 'Barbosa',
  age: 18,
  instagram: '@_rafael_yamada',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
  active: false,
};

// Spread (espalhar) operator
const updatedUser = {
  ...user,
  skills: [...user.skills, 'DevOps'],
  active: true,
}


console.log(updatedUser);