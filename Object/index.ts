interface User {
    id: number
    firstName: string
    lastName: string
    age: number
    role: string
}


var user: User = {
    id: Math.floor(Math.random() * 100) + 1,
    firstName: "Angela",
    lastName: "Davis",
    age: 28,
    role: "Professor",
}

console.log(user)