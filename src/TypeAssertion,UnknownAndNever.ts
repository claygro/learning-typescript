// type assertion means that,
//  "I am telling to the typescript that trust me the given value or response is in string, number, boolean or anyother dataype"

let response: any = "42";

let numbericValue: number = (response as string).length;
//suppose a book data is comming from localstorage
// in localstorage we store data in string.

// so we make a type for book and give name type string
type Book = {
  name: string;
  age: number;
};
let bookString = `{"name":"Steve jobs","age":20}`; // suppose this is the data comming form localstorage
let bookObject = JSON.parse(bookString) as Book; // and we forcefully said to the TS that the value is Book datatype
console.log(bookObject.name);

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}

//never
type Role = "admin" | "user" | "superAdmin";
function redirectBasedOnRole(role: Role): void {
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
