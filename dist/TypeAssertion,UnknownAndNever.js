"use strict";
// type assertion means that,
//  "I am telling to the typescript that trust me the given value or response is in string, number, boolean or anyother dataype"
Object.defineProperty(exports, "__esModule", { value: true });
let response = "42";
let numbericValue = response.length;
let bookString = `{"name":"Steve jobs","age":20}`; // suppose this is the data comming form localstorage
let bookObject = JSON.parse(bookString); // and we forcefully said to the TS that the value is Book datatype
console.log(bookObject.name);
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}
function redirectBasedOnRole(role) {
    if (role === "admin") {
        console.log("Refirection to admin dashboard");
        return;
    }
    if (role === "user") {
        console.log("Refirection to user dashboard");
        return;
    }
    role;
}
//# sourceMappingURL=TypeAssertion,UnknownAndNever.js.map