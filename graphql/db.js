export const people = [
  {
    id: '0',
    name: 'jh3618.kim',
    age: 30,
    gender: 'male'
  },
  {
    id: '1',
    name: 'dadfd',
    age: 30,
    gender: 'male'
  },
  {
    id: '2',
    name: 'fdgeim',
    age: 30,
    gender: 'male'
  },
  {
    id: '3',
    name: 'geim',
    age: 30,
    gender: 'male'
  },
  {
    id: '4',
    name: 'jh3qwqwm',
    age: 30,
    gender: 'male'
  },
  {
    id: '5',
    name: 'jsdkim',
    age: 30,
    gender: 'male'
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};
