//Функція, що поревіряє, чи сило від`ємним
const isNegative = (num) =>{
    if(num < 0) {
        return 'is negative'
    }
    else {
        return 'is positive'
    }
}

//Функція, що повертає день тижня по номеру
const getWeekDay = (num) =>{
    console.log(num);
    switch(num){
        case '1': 
            return 'Monday';            
        case '2':
            return 'Tuesday';
        case '3':
            return 'Wednesday';
        case '4':
            return 'Thursday';
        case '5':
            return 'Friday';
        case '6':
            return 'Saturday';
        case '7':
            return 'Sunday';
        default:
            return 'You wrote incorrect number'
    }
}
//Класс машина
class car {
    constructor(owner, model, engineVolume){
        this.owner = owner,
        this.model = model,
        this.engineVolume = engineVolume
    }
}

const findCar = (carArray) =>{
    let chosenCar = carArray[0]
    for(let i = 0; i < carArray.length; i++){
        if(chosenCar.engineVolume > carArray[i].engineVolume){
            chosenCar = carArray[i]
        }
    }
    return chosenCar   
}

//Функція пошуку мінімального числа з двох
const min = (firstNum, secondNum) =>{
    if (typeof(firstNum) === 'number' && typeof(secondNum)==='number'){
        const res = firstNum < secondNum ? firstNum: secondNum
        return res
    }
    else {
        console.log(typeof(firstNum))
        console.log(typeof(secondNum))
        console.log('Incorrect type!');
    }
}
//Функція, що повертає максимальне число з двох
const max = (firstNum, secondNum) =>{
    if (typeof(firstNum) === 'number' && typeof(secondNum)==='number'){
        const res = firstNum > secondNum ? firstNum: secondNum
        return res
    }
    else {
        console.log(typeof(firstNum))
        console.log(typeof(secondNum))
        console.log('Incorrect type!');
    }
}

//Завданна 5 і 6
const age = prompt('How old are you?');
alert(`You are ${age} years old`);
const isTrue = confirm("Is it your true age?");
alert(`Is it your true age? - ${isTrue}`);
//Завдання 7
const goodAmount = prompt('How many things do you want to buy?');
const pricePerOne = prompt('Price per one thing (dollars)');
alert(`You have to pay ${goodAmount * pricePerOne} dollars`);

//Завдання 8
const numberToCheck = prompt('Print your number');
alert(`Your number ${isNegative(numberToCheck)}`);

//Завдання 9
const weekNumber = prompt('Print number of week');
alert (getWeekDay(weekNumber));

//Завдання 10
const div = document.createElement('div');

for (let i = 0; i <= 10; i++){
    div.innerHTML += `<p>6 * ${i} = ${6 * i} </p>`
}
document.body.append(div);
//Завдання 11
const array = [-5, -2, 10, -129, 33]
div.innerHTML += `<p>${array[2]} ^ 2 = ${Math.pow(array[2], 2)}</p>`
div.innerHTML += `<p>${array[0]} + ${array[4]} = ${array[0] + array[4]}</p>`
let result = 0;
for(let i = 0; i < array.length; i++){
    if (array[i] < 0)
    {result += Math.pow(array[i], 2);}
}
div.innerHTML += `<p>Sum of squares of negative numbers: ${result}</p>`

//Завдання 12.
const cars = [new car('Grigoriy', 'BMW', 10), new car('Alexander', 'Audi', 25), new car('Valera', 'Zhigul', 3)]
let chosenClassCar = findCar(cars)


const arrayObjectCars = [{owner: 'Vasya', model: 'BMW', engineVolume:5}, 
        {owner: 'Kolya', model: 'Mercedes', engineVolume:3}, 
        {owner: 'Petya', model: 'BMW', engineVolume:7}
    ]
const chosenObjectCar = findCar(arrayObjectCars)

alert(`Owner: ${chosenClassCar.owner}, model: ${chosenClassCar.model}, engine volume: ${chosenClassCar.engineVolume}`)
alert(`Owner: ${chosenObjectCar.owner}, model: ${chosenObjectCar.model}, engine volume: ${chosenObjectCar.engineVolume}`)
//Завдання 13.
const first = Number( prompt('Input first number'));
const second = Number(prompt('Input second number'));
const third = Number(prompt('Input third number'));
const fourth = Number(prompt('Input fourth number'));

const firstMin = min(first,second)
const secondMin = min(third, fourth)

alert(max(firstMin, secondMin))

//Завдання 14. 
const word = prompt('Input your word');

const reversedWord = word.split('').reverse().join('')
// for(let i = word.length-1; i >= 0; i--){
//     reversedWord += word[i]
// }
div.innerHTML += `<p>Word: ${word} (length: ${word.length}) - reversed word: ${reversedWord}</p>`