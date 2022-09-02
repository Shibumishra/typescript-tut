"use strict";
exports.__esModule = true;
var UserResult;
(function (UserResult) {
    var Users = /** @class */ (function () {
        function Users() {
        }
        Users.prototype.getName = function () {
            return "Shibu Mishra";
        };
        return Users;
    }());
    UserResult.Users = Users;
})(UserResult || (UserResult = {}));
var u1 = new UserResult.Users();
console.log(u1.getName());
