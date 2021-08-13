function minhaFunction() {
  this.name = 'Mateus';

  const minhaArrowFunction = () => {
    this.lastname = 'Silva';
  }

  minhaArrowFunction();
}

console.log(new minhaFunction());
console.log(this);




