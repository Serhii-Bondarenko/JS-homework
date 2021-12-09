// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage


let formLocalSave = document.forms['formLocalSave'];
let {name, age} = formLocalSave;
let i = 1;
let userKey = 'user';

let save = (userName, userAge) => {
    let user = {
        name: userName,
        age: userAge
    };
    localStorage.setItem(userKey, JSON.stringify(user));
};
formLocalSave.addEventListener('submit', (e)=>{
    e.preventDefault();
    save(name.value, age.value);
})

//
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let formArraySave = document.forms['formArraySave'];
let {model, type, volume} = formArraySave;

let saveCarsArray = (model, type, volume) => {
    let cars = JSON.parse(localStorage.getItem("carArray")) || [];
    cars.push({ model, type, volume });
    localStorage.setItem('carArray', JSON.stringify(cars));
}

formArraySave.addEventListener('submit', (e) => {
    e.preventDefault();
    saveCarsArray(model.value, type.value, volume.value);
    model.value = '';
    type.value = '';
    volume.value = '';
} )

