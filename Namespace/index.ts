export {}
namespace UserResult {
    export class Users {
        getName() {
            return "Shibu Mishra"
        }
    }
}

let u1 = new UserResult.Users();
console.log(u1.getName());