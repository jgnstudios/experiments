// [test 0] basic types
// // let id: number = 5;
// // let company: string = "Tech Corp";
// // let isPublished: boolean = true;

// // let ids: number[] = [1, 2, 3, 4, 5];
// // let x: any = "Hello";
// // let xArr: any[] = ["Hello", 0, true]

// [test 1] functions and type usage
const concatenateValues = (a: string, b: string): string => {
    return a + b;
}

console.log(concatenateValues("Hello, ", "World!"));
// console.log(concatenateValues(5, 10));

type UserType = {
    id: number,
    name: string,
    age?: number,
    greet(greeting?: string): string
}

const User: UserType = {
    id: 1,
    name: "Mike",
    age: 35,
    greet(greeting = 'User 1 Greeting') {
        return `${greeting}, ${User.name}`;
    }
}

const User2: UserType = {
    id: 2,
    name: "Sam",
    age: 50,
    greet: (greeting: string = 'User 2 Greeting') => {
        return `${greeting}, ${User2.name}`;
    }
}

console.log(User.greet('Hi'));
console.log(User2.greet());

// [test 2] union types
type IDFieldType = string | number;

const printID = (id: IDFieldType) => {
    console.log(`ID: ${id}`);
}

printID(101);

// [test 3] intersection types
interface BusinessPartner {
    name: string;
    credit: number;
}

interface UserIdentity {
    id: IDFieldType;
    email: string;
}

type Employee = BusinessPartner & UserIdentity;

const signContract = (employee: Employee): void => {
    console.log(`Contract signed with ${employee.name}, with email ${employee.email}`);
}

const testUser: Employee = {
    name: "Fiona",
    credit: 5500,
    id: "1001",
    email: "fi@test.com"
}

signContract(testUser);

// // [test 4] enum types
// enum LoginError {
//     INVALID_USERNAME = "Invalid username",
//     INVALID_PASSWORD = "Invalid password",
//     ACCOUNT_LOCKED = "Account locked",
//     INTERNAL = "Internal error"
// }

// const printErrorMsg = (error: LoginError): void => {
//     console.log(`Error: ${error}`);
// }

// printErrorMsg(LoginError.ACCOUNT_LOCKED);


// [test 5] generics
class StorageContainer<T> {
    private contents: T[];
    constructor() {
        this.contents = [];
    }

    addItem(item: T): void {
        this.contents.push(item);
    }

    getItem(idx: number): T | undefined {
        return this.contents[idx];
    }

    getItems(): T[] {
        return this.contents;
    }
}

const Bin01 = new StorageContainer<string>();
Bin01.addItem("Item A");
Bin01.addItem("Item B");
console.log(Bin01.getItem(1));
console.log(Bin01.getItems());

// [test 6] read-only variables
interface EmployeeInterface {
    employeeId: number;
    startDate: Date;
    readonly name: string;
    department: string;
}

const employeeTest: EmployeeInterface = {
    employeeId: 12345,
    startDate: new Date('2023-01-15'),
    name: "Nate",
    department: "Engineering",
};

console.log(`Employee Name: ${employeeTest.name}`);
employeeTest.department = "Marketing";
console.log(`Updated Department: ${employeeTest.department}`);
// employeeTest.name = "Nathan"; // This will cause a compile-time error