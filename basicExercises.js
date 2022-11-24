function presentation(name, lastName, nickName) {
    return `Mi nombre es ${name} ${lastName}, pero prefiero qué me digas ${nickName}`
};

function dos(name, lastName, nickName) {

}

//If busca hacer condiciones específicas que se puedan cumplir si se cumple con el requisito.
//Swich busca crear una serie de respuestas ante diferentes casos de la variable.

const subType = 'Expert'


//The for loop can create the variable within itself
for (let i = 0; i < 50; i++) {
    console.log(`El valor de i es ${i}`);
}

//With while loop we have to create a variable before

while (i < 5) {
    console.log(`The value of "i" is ${i} `);
    i++;
}




















for (let i = 1; i < 50; i++) {
    if(i % 2 == 0) {
        console.log(`The number ${i} is pair`);
    } else {
        console.log(`The number ${i} is odd`);
    }
}
let i = 0;
while (i < 80) {
    if(i % 15 == 0) {
        console.log(`${i} FizzBuzz`);
    }else if(i % 5 == 0) {
        console.log(`${i} Buzz`);
    }else if( i % 3 == 0) {
        console.log(`${i} Fizz`);
    } 
    i++;
}

for (let i = 1; i < 50; i++) {
    if (i % 15 == 0) {
        console.log(`${i} FizzBuzz`);
    } else if (i % 5 == 0) {
        console.log(`${i} Buzz`);
    } else if (i % 3 == 0) {
        console.log(`${i} Fizz`);
    }
}


// let answer;
// while (answer != 4) {
//     let question = prompt('¿Cuánto es 2 + 2?');
//     answer = question;
// }

for (let answer; answer = 4; ) {

}

function printElementToElement(arr) {
    for(let i = 0; i < arr.length; i++) { //In this occasion cannot be equal because the array starts inside 0 and length only count 3 without include the 0
        console.log(arr[i]);
    }
}
const obj = {
    name: 'Yandel',
    age: 19,
    favoriteFoods: ['Pizza', 'Pizza', 'Pizza']
}

Object.values(obj);

function printElementToElementObj(obj) {
    const arr = Object.values(obj)
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function getInfo(subscription) {

    if(subscription == 'Free' || 'free') {
        console.log(`Your subscription is ${subscription} you only can watch free Platzi videos`);
        return;
    }
    if(subscription == 'Basic' || 'basic') {
        console.log(`Your subscription is ${subscription} you almos can watch all Platzi videos by 1 month`);
        return;
    }
    if(subscription == 'Expert' || 'expert') {
        console.log(`Your subscription is ${subscription} you almos can watch all Platzi videos by 1 Year`);
        return;
    } 
    if(subscription == 'ExpertDuo' || 'expertDuo') {
        console.log(`Your subscription is ${subscription} you and other person can watch all videos in Platzi by 1 year`);
        return;
    }

    console.warn("That subscription type doesn't exist");
}

const subscriptionsTypes = {
    free: 'Your subscription Free, is you only can watch free Platzi courses',
    basic: 'Your subscription is Basic, you almost can watch all Platzi courses by 1 month',
    expert: 'Your subscription is Expert, you almost can watch all Platzi courses by 1 Year',
    expertduo: 'Your subscription is ExpertDuo you and other person can watch all courses in Platzi by 1 year'
}

const example = 'free'

function getSubscriptionsTypes(subscription) {

    if(subscriptionsTypes[subscription]) {
        console.log(subscriptionsTypes[subscription]);
        return;
    }
    console.warn("That subscription type doesn't exist");
}
