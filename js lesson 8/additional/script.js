// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
//
// debugger
function reCall(startElement) {
    let classNames = [];
    for (const el of startElement.children) {
        for (const className of el.classList) {
            classNames.push(className);
        }
        if (el.children.length) {
            reCall(el);
        }
    }
    classNames.length ? console.log(classNames) : false;

}

reCall(document.body);

let array = [1, 2, 3, [11, 12, 13, [24, 25, 26], [37, 38, 39,[40, 41, 42, 43], [55, 65, 75, [85, 95]]]]];

function funcRec(arr){
    let out = [];
    for (const item of arr) {
        if (typeof item === 'object') {
            out = out.concat(funcRec(item));
        } else {
            out.push(item);
        }
    }
    return out;
}

console.log(funcRec(array));

