let btnClear = document.createElement('button');
btnClear.textContent = 'Очистити корзину';
document.body.appendChild(btnClear);

let div = document.createElement('div');
document.body.appendChild(div);

let productsKey = 'products';
let productsArr = JSON.parse(localStorage.getItem(productsKey));

productsArr.forEach(item => {
    let product = document.createElement('div');
    product.classList.add('product');

    let productName = document.createElement('h2');
    productName.textContent = item.productName;

    let count = document.createElement('p');
    count.textContent = 'кількість товару: ' + item.count;

    let price = document.createElement('p');
    price.textContent = 'ціна товару: ' + item.price;

    let img = document.createElement('img');
    img.src = item.img;

    let btn = document.createElement('button');
    btn.textContent = 'Видалити з корзини';

    div.appendChild(product);
    product.append(productName, count, price, img, btn);

    let remove = () => {
        let index = productsArr.indexOf(item);
        productsArr.splice(index, 1);
        localStorage.setItem(productsKey, JSON.stringify(productsArr));
        product.remove();
    }

    btn.addEventListener('mousedown', () => {
        remove();
    })
})

let clearAll = () => {
    localStorage.clear();
    div.innerHTML = '<h2 style="margin: 40% auto">КОРЗИНА ПОРОЖНЯ</h2>';
}

btnClear.addEventListener('click', () => {
    clearAll();
})


