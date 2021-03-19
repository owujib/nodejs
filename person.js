const students = [
  { name: 'smith' },
  { name: 'john' },
  { name: 'doe' },
  { name: 'raymond' },
  { name: 'joe' },
];

function sayHello(name) {
  return `Hello ${name}`;
}

//defualt export
module.exports = {
  sayHello,
  students,
};
