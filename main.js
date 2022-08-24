//Exercice 1
function entierEnChaine(x) {
  return Number.isInteger(x)
    ? x.toString()
    : `Erreur conversion de type de ${x}`;
}
console.log(entierEnChaine(56));
console.log(entierEnChaine(500));
console.log(entierEnChaine({ x: 15 }));
//Exercice 2
function sommeTableau(T) {
  return T.length == 0
    ? "La somme des elements est egale a 0"
    : T.reduce(function (acc, current) {
        return acc + current;
      });
}
console.log(sommeTableau([1, 2, 3, 4]));
console.log(sommeTableau([0, 6, 11, -8]));
// Exercice 3
function moyenneTableau(T) {
  return T.length == 0
    ? "moyenne Tableau  est egale a 0"
    : sommeTableau(T) / T.length;
}
console.log(moyenneTableau([1, 2, 3, 4]));
console.log(moyenneTableau([0, 6, 11, -8]));
// Exercice 4
function getUserById(users, id) {
  let indexi = T.map((ele) => ele.id).indexOf(id);
  return indexi == -1 ? "pas d’utilisateur avec cet ID" : users[indexi];
}

let T = [
  {
    id: 1,
    first: "ahmed",
    last: "ben ali",
    age: 23,
    email: "ahmed.benali@gmail.com",
    address: "Tunis",
  },
  {
    id: 2,
    first: "aziz",
    last: "ameri",
    age: 44,
    email: "ahmed.benali@gmail.com",
    address: "Tunis",
  },
  {
    id: 3,
    first: "khalil",
    last: "ben lamine",
    age: 18,
    email: "ahmed.benali@gmail.com",
    address: "Tunis",
  },
];
console.log(getUserById(T, 7));
console.log(getUserById(T, 1));
console.log(getUserById(T, 2));
// Exercice 5
function sortUsers(users) {
  let usersfiltred = users.map((ele) => {
    let x = {
      age: ele.age,
      name: ele.first,
    };
    return x;
  });
  let age = usersfiltred.map((ele) => ele.age);
  let ageSeperatlySorted = usersfiltred.map((ele) => ele.age).sort();
  let saye = [];
  ageSeperatlySorted.forEach((ele, index) => {
    let indice = age.indexOf(ele);
    saye.push(usersfiltred[indice].name);
  });
  console.log(saye);
}
sortUsers(T);
