// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let p = 0;
 while (p < array.length){
    console.log(array[p]);
    p++;
}
console.log('------------------');

for (let i = 0 ; i < array.length; i++){
    console.log(array[i]);
}
console.log('------------------');

p = 0;
while (p < array.length){
    if(p%2!==0){
        console.log(array[p]);
    }
    p++;
}
console.log('------------------');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < array.length; i++) {
    const arrayElement = array[i];
    if(i%2!==0){
        console.log(arrayElement);
    }
}
console.log('------------------');

// 5. перебрати циклом while та вивести  числа тільки парні  значення
p = 0;
while (p < array.length){
    if (array[p]%2===0) {
        console.log(array[p]);
    }
    p++;
}
console.log('------------------');

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < array.length; i++) {
    if(array[i]%2===0){
        console.log(array[i]);
    }
}
console.log('------------------');

// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < array.length; i++) {
    if(array[i]%3===0){
        array[i] = 'okten';
    }
    console.log(array[i]);
}
console.log('------------------');

// 8. вивести масив в зворотньому порядку.
for (let i = array.length - 1; i >= 0; i--) {
    const arrayElement = array[i];
    console.log(arrayElement);
}
console.log('------------------');

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
console.log('Перше реверс');
// 1. перебрати його циклом while
p=array.length - 1;
while (p >= 0 ){
    console.log(array[p]);
    p--;
}
console.log('------------------');
//     2. перебрати його циклом for
for (let i = array.length - 1; i >= 0; i--) {
    const arrayElement = array[i];
    console.log(arrayElement);
}
console.log('------------------');
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
p=array.length - 1;
while (p >= 0){
    if(p%2!==0){
        console.log(array[p]);
    }
    p--;
}
console.log('------------------');

console.log('Четверте реверс');
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = array.length - 1; i >= 0; i--) {
    const arrayElement = array[i];
    if(i%2!==0){
        console.log(arrayElement);
    }
}
console.log('------------------');

console.log('Пяте реверс');
// 5. перебрати циклом while та вивести  числа тільки парні  значення
p = array.length - 1;
while (p >= 0){
    if (array[p]%2===0) {
        console.log(array[p]);
    }
    p--;
}
console.log('------------------');

console.log('Шосте реверс');
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = array.length - 1; i >= 0; i--) {
    if(array[i]%2===0){
        console.log(array[i]);
    }
}
console.log('------------------');

console.log("Сьоме реверс");
// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = array.length - 1; i >= 0; i--) {
    if(array[i]%3===0){
        array[i] = 'okten';
    }
    console.log(array[i]);
}
console.log('------------------');