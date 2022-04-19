const username: string = 'Jeison';
const sum = (a: number, b: number) => {
  return a + b;
}
sum(1,2);

class Person {

  constructor(private age: number, public lastName: string) {}
}

const jei = new Person(24, 'Briceño');
