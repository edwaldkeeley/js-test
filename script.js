
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const Retirement = 65 - age;
//   // return Retirement;
//   return `${firstName} retires in ${Retirement} Years`
// }

// console.log(yearUntilRetirement(1991, 'noob'));

// function cutFruit(fruit) {
//   return fruit * 4;
// }

// function Juice(apples, oranges) {
//   const applePieces = cutFruit(apples);
//   const orangePieces = cutFruit(oranges);

//   console.log(apples, oranges);
//   const juice = ` Juice with ${applePieces} Apples Pieces and ${orangePieces} Oranges Pieces`;
//   return juice;
// }

// console.log(Juice(2, 3))

// const calcAge3 = function (birthYear) {
//   return 2037 - birthYear
// }


// const yearUntilRetirement = function (birthYear, firstName) {
//   const age = 2037 - birthYear;
//   const Retirement = 65 - age;

//   if(Retirement > 0 ) {
//     console.log(`${firstName} retires in ${Retirement} Years`)
//     return Retirement;
//   } else {
//     console.log(`${firstName} Has Already Retired🎉`)
//     return -1;
//   }

  
//   // return `${firstName} retires in ${Retirement} Years`
// }

// console.log(yearUntilRetirement(1991, 'noob'));
// console.log(yearUntilRetirement(1950, 'noob2'));

// const calcAverage = (a, b, c) => (a + b + c);
 
// let scoreNoobie = calcAverage(10, 40, 12);
// let scoreNoobie2 = calcAverage(10, 20, 30);


// const checkWinner = function (avgNoobie, avgNoobie2) {
//   if (avgNoobie > avgNoobie2) {
//     console.log(`Noobie Win 🏆 With the score of ${avgNoobie}`);
//   } else if (avgNoobie2 > avgNoobie) {
//     console.log(`Noobie2 Win 🏆 With the score of ${avgNoobie2}`);
//   } else {
//     console.log('No team Wins:(');
//   }
// }
// checkWinner(scoreNoobie, scoreNoobie2);
 

// const friends = ['Noobie1', 'Noobie2', 'Noobie3'];
// console.log(friends);

// const friends = ['Noobie', 'Noobie2', 'Noobie3'];
// const newLength = friends.push('Noobie4');
// console.log(friends);
// console.log(newLength);

// friends.unshift('Noobies');


// friends.pop();
// friends.pop();
// friends.pop();
// console.log(friends);
// friends.shift();

// console.log(friends.includes('Noobie'));


// const calctip = function (bill){
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bill = [125, 555, 44];
// const tips = [calctip(bill[0]), calctip(bill[1]), calctip(bill[2])];
// const totals = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];

// console.log(bill, tips, totals);




// const InterestedIn = prompt('What Do you want to know About Noobie1')

// if (Noobie1[InterestedIn]) {
//   console.log(Noobie1[InterestedIn]);
// } else {
//   console.log('Wrong request! Choose another One');
// }

// console.log(`${Noobie1.firstName} has ${Noobie1.friends.length} friends, and his best friend is called ${Noobie1.friends[0]}`);


const Noobie1 = {
  firstName: 'Noobie',
  lastName: '1',
  job: 'janitor',
  friends: ['Noobie2', 'Noobie3', 'Noobie4'],
  Weapon: 'sword',
  hasDriverLicense: true,
  
  calcAge: function () {
    // console.log(this);
    return 2037 - this.birthYear;
  },

  getSummary: function () {
    return `${this.firstName} is ${Noobie1.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(Noobie1.getSummary());