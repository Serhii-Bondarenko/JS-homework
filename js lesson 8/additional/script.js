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

