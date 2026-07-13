 
 // 1. const & let
const company = "OpenAI";
let totalEmployees = 0;

// 2. Class
class Employee {
  constructor(id, name, role, salary = 30000) { // Default Parameter
    this.id = id;
    this.name = name;
    this.role = role;
    this.salary = salary;
  }

  // Class Method
  getDetails() {
    return `${this.name} works as ${this.role}`;
  }
}

// 3. Inheritance
class Manager extends Employee {
  constructor(id, name, role, salary, department) {
    super(id, name, role, salary);
    this.department = department;
  }

  manageTeam() {
    return `${this.name} manages ${this.department} department`;
  }
}

// 4. Objects
const emp1 = new Employee(1, "Navneet", "Frontend Developer", 50000);
const emp2 = new Employee(2, "Rahul", "Backend Developer");
const emp3 = new Manager(3, "Priya", "Manager", 80000, "Engineering");

// 5. Array
const employees = [emp1, emp2, emp3];

// 6. Arrow Function + map()
const names = employees.map(emp => emp.name);

console.log(names);

// ["Navneet", "Rahul", "Priya"]


// 7. Destructuring
const { name, salary } = emp1;

console.log(name, salary);

// Navneet 50000


// 8. Template Literal
console.log(`${name} earns ₹${salary}`);


// 9. Spread Operator
const newEmployees = [...employees];

console.log(newEmployees);


// 10. Rest Operator
const calculateSalary = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

console.log(calculateSalary(10000, 20000, 30000));


// 11. for...of
for (const emp of employees) {
  console.log(emp.getDetails());
}


// 12. find()
const manager = employees.find(emp => emp.role === "Manager");

console.log(manager);


// 13. filter()
const highSalary = employees.filter(emp => emp.salary > 40000);

console.log(highSalary);


// 14. reduce()
const totalSalary = employees.reduce(
  (sum, emp) => sum + emp.salary,
  0
);

console.log(totalSalary);


// 15. Set (Remove Duplicate)
const skills = new Set([
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "React"
]);

console.log(skills);


// 16. Map
const employeeMap = new Map();

employeeMap.set(emp1.id, emp1.name);
employeeMap.set(emp2.id, emp2.name);

console.log(employeeMap.get(1));


// 17. Optional Chaining
const city = emp1.address?.city;

console.log(city);

// undefined


// 18. Nullish Coalescing
const location = city ?? "Not Available";

console.log(location);


// 19. Promise
const fetchEmployees = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(employees);
    }, 1000);
  });
};


// 20. Async / Await
async function loadEmployees() {
  const data = await fetchEmployees();

  console.log("Employees Loaded");

  console.table(data);
}

loadEmployees();


// 21. Object Shorthand
const department = "IT";
const office = "Bangalore";

const companyInfo = {
  department,
  office
};

console.log(companyInfo);


// 22. Object Destructuring in Function
const printEmployee = ({ name, role }) => {
  console.log(`${name} is ${role}`);
};

printEmployee(emp1);


// 23. Array Destructuring
const [firstEmployee, secondEmployee] = employees;

console.log(firstEmployee.name);
console.log(secondEmployee.name);


// 24. includes()
const technologies = ["HTML", "CSS", "JavaScript", "React"];

console.log(technologies.includes("React"));


// 25. Object.entries()
console.log(Object.entries(companyInfo));


// 26. Object.keys()
console.log(Object.keys(companyInfo));


// 27. Object.values()
console.log(Object.values(companyInfo));


// 28. String Methods
console.log(company.startsWith("Open"));
console.log(company.endsWith("AI"));
console.log("=".repeat(20));


// 29. Array.from()
const letters = Array.from("ES6");

console.log(letters);


// 30. Array.of()
const nums = Array.of(10, 20, 30);

console.log(nums);