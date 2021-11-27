let borderFn = () => console.log('================');

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
console.log('Створити функцію конструктор яка дозволяє створювати об\'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об\'єм двигуна. додати в об\'єкт функції');

function Car(model, producer, bornYear, maxSpeed, engine) {
    this.producer = producer;
    this.model = model;
    this.bornYear = bornYear;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function () {
        for (const key in this) {
            typeof this[key] !== 'function' ? console.log(`${key}: ${this[key]} `) : false;
        }
    }
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newValue) {
        this.bornYear = newValue;
    }
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let myCar = new Car('corolla', 'toyota', '2010', 200, 1.33);
console.log(myCar);
myCar.drive();
myCar.info();
myCar.increaseMaxSpeed(40);
myCar.changeYear(2015);
myCar.addDriver({isName: 'Serhii', surname: 'Bondarenko', age: 23});
console.log(myCar);

//
borderFn();
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
console.log('Те саме, тільки через клас');

class ClassCar {
    constructor(model, producer, bornYear, maxSpeed, engine) {
        this.model = model;
        this.producer = producer;
        this.bornYear = bornYear;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }
    //drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info() {
        for (const key in this) {
            typeof this[key] !== 'function' ? console.log(`${key}: ${this[key]} `) : false;
        }
    }
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear(newValue) {
        this.bornYear = newValue;
    }
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver(driver) {
        this.driver = driver;
    }
}

let someCar = new ClassCar('rexton', 'ssangyong', 2010, 220, 2.7);
console.log(someCar);
someCar.drive();
someCar.info();
someCar.increaseMaxSpeed(30);
someCar.changeYear(2011);
someCar.addDriver({isName: 'Michael', surname: 'Zubenko', age: 53});
console.log(someCar);

borderFn();
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
console.log('створити класс/функцію конструктор попелюшка з полями ім\'я, вік, розмір ноги. Створити масив з 10 попелюшок');

class Cinderella {
    constructor(isName, age, footSize) {
        this.isName = isName;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellaArray = [];
for (let i = 1; i <= 10; i++) {
    cinderellaArray.push(new Cinderella('Cinderella ' + [i], Math.round(Math.random() * (40 - 18) + 18), Math.round(Math.random() * (46 - 30) + 30)));
}
cinderellaArray.sort(() => Math.random() - 0.5);

console.log(cinderellaArray);

console.log('-------------------');

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
console.log('Сторити об\'єкт класу "принц" за допомоги класу який має поля ім\'я, вік, туфелька яку він знайшов.');

class Prince extends Cinderella {
    constructor(isName, age, shoesFound, footSize) {
        super(isName, age, footSize);
        this.shoesFound = shoesFound;
    }
}

let prince = new Prince('Kevin', 34, 40, false);
console.log(prince);

console.log('----------------------');

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
console.log('За допомоги циклу знайти яка попелюшка повинна бути з принцом');

for (const princes of cinderellaArray) {
    princes.footSize === prince.shoesFound ? console.log(`${princes.isName} має бути з ${prince.isName}`) : false;
}

console.log('-------------------');

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log('Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку');

let cinderellaTarget = cinderellaArray.find(princes => princes.footSize === prince.shoesFound);

console.log(cinderellaTarget);