const Person = {
  name: 'jh3618.kim',
  age: 30,
  gender: 'male'
};

const resolvers = {
  Query: {
    person: () => Person
  }
};

export default resolvers;
