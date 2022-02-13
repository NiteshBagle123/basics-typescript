enum Role {
    ADMIN,
    AUTHOR,
    USER
}
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
    name: 'Nitesh',
    age: 26,
    hobbies: ['1', '2'],
    role: [Role.AUTHOR, 'Author']
}

console.log(person.age, person.name);

