let borderFn = () => console.log('=========================================================');
// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
console.log('отримує текст з параграфа з id "content"');
console.log(document.getElementById('content').innerHTML);

borderFn();

// -- отримує текст з блоку з id "rules"
console.log('отримує текст з блоку з id "rules"');
console.log(document.getElementById('rules').innerHTML);

borderFn();

// -- замініть текст параграфа з id 'content' на будь-який інший
console.log('замініть текст параграфа з id \'content\' на будь-який інший');
let newTextContent = document.getElementById('content').innerHTML = 'Свято наближається!';
console.log(newTextContent);

borderFn();

// -- замініть текст параграфа з id 'rules' на будь-який інший
console.log('замініть текст параграфа з id \'rules\' на будь-який інший');
let newTextRules = document.getElementById('rules').innerText = '(o_0)';
console.log(newTextRules);

borderFn();

// -- змініть кожному елементу колір фону на червоний
let elements = document.body.children;
for (const element of elements) {
    element.style.background = 'red';
}

// -- змініть кожному елементу колір тексту на синій
for (const element of elements){
    element.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log('отримати весь список класів елемента з id=rules і вивести їх в console.log');
console.log(document.getElementById('rules').classList.value);

borderFn()

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let rulesElements = document.getElementsByClassName('fc_rules');
for (const rulesElement of rulesElements) {
    rulesElement.style.background = 'white';
    rulesElement.style.color = 'red';
}
