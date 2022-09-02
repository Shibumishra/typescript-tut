function users<T>(data: T): T {
    return data;
}

var userData = users({ name: 'shibu', age: 23, });
console.log(userData)