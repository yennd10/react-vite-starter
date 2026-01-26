import { sayHi, sayBye } from "./test/say";

const MyFirstComponent = () => {

  sayHi("Yen");
  sayBye("Dao");
  
  return (
    <div>slkjadflasjkf</div>
  );
}

export default MyFirstComponent;

// type User = {
//   name: string;
//   age: number;
//   address: string;
// };

// const MyFirstComponent = (): JSX.Element => {
//   const user: User = {
//     name: "Yen",
//     age: 25,
//     address: "Ha Noi"
//   }

//   //Destructuring Assignment
//   //Object Destructuring
//   const { name, age, address } = user; 

//   //Array Destructuring
//   const level = ["internship", "fresher", "junior", "middle", "senior" ]

//   const [internship, fresher, junior, middle, senior] = level;


//   return (
//     <div>
//       <p>Object Destructuring: {name} {age} {address}</p>
//       <p>Array Destructuring: {internship}</p>
//     </div>
//   )
// }

// export default MyFirstComponent;