// - Дано натуральное число n. Выведите все числа от 1 до n.
document.write(`<h5>Дано натуральное число n. Выведите все числа от 1 до n.</h5>`);

let numList = (n) => {
    for (let i = 1; i < n; i++) {
        document.write(i + ' ');
    }
}
numList(10);

document.write('<br>');
document.write('<hr>');

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
document.write(`<h5>Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если
    A < B, или в порядке убывания в противном случае</h5>`);
let numWay = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            document.write(i + " ");
        }
    } else {
        for (let i = a; i >= b; i--) {
            document.write(i + " ");
        }
    }
}
numWay(22, 12);
document.write('<hr>');
//
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
document.write(`<h5>функція Приймає масив та число "i", та міняє місцями об\`єкт який знаходиться в індексі "i" на "i+1"</h5>`);

let elementChange = (array, i) => {
    let index = array[i];
    for (let j = 0; j < array.length; j++) {
        if (index === array[j]) {
            array[j] = array[i + 1];
            array[i + 1] = index;
        }
    }
    return array;
}

document.write(elementChange([9, 8, 0, 4], 0));
document.write('<hr>');
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
document.write(`<h5>Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.</h5>`);

let zeroDown = (array) => {
    let zeroArr = [];
    let numArr = [];
    for (let i = 0; i < array.length; i++) {
        array[i] === 0 ? zeroArr[zeroArr.length] = array[i] : numArr[numArr.length] = array[i];
    }
    for (let i = 0; i < zeroArr.length; i++) {
        numArr[numArr.length] = zeroArr[i];
    }
    array = numArr;
    return array;
}

document.write(zeroDown([0,0,1,0]));

// функція приймає години , хвилини, секунди
document.write('<hr>');
document.write(`<h5>ДОДАТКОВЕ ЗАВДАННЯ ГОДИННИК</h5>`);

let clock = (hour) => {
    if (hour <= 24) {
        for (let i = 0; i < hour; i++) {
            for (let min = 0; min < 60; min++) {
                for (let sec = 0; sec < 60; sec++) {
                    document.write(`<div>${i} : ${min} : ${sec}</div>`);
                }
            }
        }
    }else {
        document.write(`<div>Доба містить 24 години</div>`);
    }
}

clock(1);