// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let form = document.forms['f1'];
let {name, count, price, img} = form;

let productsKey = 'products';
let save = (productName, count, price, img) => {
    let productsArr = JSON.parse(localStorage.getItem(productsKey)) || [];
    let productObj = {productName, count, price, img};
    productObj.id = productsArr[productsArr.length - 1]?.id + 1 || 1 ;
    productsArr.push(productObj);
    localStorage.setItem(productsKey, JSON.stringify(productsArr));
};

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    save(name.value, count.value, price.value, img.value);
    name.value = '';
    count.value = '';
    price.value = '';
    img.value = '';
})