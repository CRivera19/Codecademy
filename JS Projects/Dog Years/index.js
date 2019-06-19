// This is my age
let myAge = 26;
// earlyYears explains the dogs first two years
let earlyYears = 2;
earlyYears = earlyYears * 10.5;
console.log(earlyYears);
// since we account for the two years we subtract 2
laterYears = myAge - 2;
console.log(laterYears);
// we now multiply my age time 4 for dog years
laterYears *= 4;
console.log(laterYears);
// We can now add together the years to see how old I am in dog years
myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);
// Lets put my name in variable and lowercase.
let myName = "Chris".toLowerCase();
console.log(myName);
// Console.log the variable in sentence.
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which are ${myAgeInDogYears} year old in dog years.`
);
