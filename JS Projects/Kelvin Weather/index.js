// Create Const Kelvin to 293
let kelvin = 293
console.log(`Kelvin is equal to ${kelvin}`)
document.getElementById(kelvin).innerHTML(${kelvin});
// Celsius is 273 less than kelvin so subtract.
let celsius = kelvin - 273
console.log(`Celsius is equal to ${celsius}`)
// Fahrenheit is Celsius * (9/5) + 32. Plug in equation.
let fahrenheit = celsius * (9/5) + 32
console.log(`Fahrenheit is equal to ${fahrenheit}`)
// round down the fahrenheit temperature
fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees Fanrenheit`);
let newton = Math.floor(celsius * (33/100));
console.log(`Newton is equal to ${newton}`)
