
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

let wrapper = document.getElementsByClassName('wrapper')[0];
let header = document.getElementsByTagName('header')[0];
let main = document.getElementsByTagName('main')[0];
let footer = document.getElementsByTagName('footer')[0];
let ul = document.getElementsByTagName('ul')[0];

function navOnPage(domParentElement) {

    const btnDown = document.createElement('button');
    btnDown.classList.add('navBtn');
    btnDown.id = 'btnDown';
    btnDown.innerText = 'DOWN';

    const btnUp = document.createElement('button');
    btnUp.classList.add('navBtn');
    btnUp.id = 'btnUp';
    btnUp.innerText = 'UP';
    if (document.getElementsByClassName('navBtn').length === 0) {
        document.body.append(btnDown, btnUp);
    }

    let childBox = [];
    let step = (domElement) => {
        if (domElement.children.length) {
            for (let child of domElement.children) {
                if (child.children.length) {
                    step(child);
                } else {
                    childBox.push(child);
                }
            }
        }
    }

    let current = 0;
    btnDown.addEventListener('click', () => {
        step(domParentElement);
        childBox.forEach(child => child.style.backgroundColor = '#F6DB5EEF');
        current + 1 === childBox.length ? current = 0 : current++;
        childBox[current].style.backgroundColor = '#0076CCFF';
    })

    btnUp.addEventListener('click', () => {
        step(domParentElement);
        childBox.forEach(child => child.style.backgroundColor = '#F6DB5EEF');
        current - 1 === -1 ? current = childBox.length - 1 : current--;
        childBox[current - 1].style.backgroundColor = '#0076CCFF';
    })
}

navOnPage(wrapper);