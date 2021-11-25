// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
console.log('Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика');

let emailValidation = (email) => {
    let emailArr;
    let tempEmail = email.toString().toLowerCase().trim().replaceAll(' ', '');
    if (tempEmail.split('@').length - 1 === 1 && tempEmail.indexOf('@') > 2 && tempEmail.indexOf('@') <= tempEmail.length - 5
        && (tempEmail.endsWith('.com') || tempEmail.endsWith('.ua'))) {
        emailArr = tempEmail.split('@');
    } else {
        console.log('Некоректні симоли e-mail: "@/ .com / .ua" ');
    }
    if (emailArr[0].includes('.') || emailArr[0].includes('_') || emailArr[0].includes('-') || (emailArr[1].indexOf('.') <= 2)) {
        console.log('Неправильні дані користувача');
    } else {
        console.log(`Ласкаво просимо ${emailArr[0]}`);
    }
}

emailValidation('someeMAIL@i.ua');

console.log('================================');
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
console.log('відсортувати масив в спадаючому порядку за кількістю елементів в полі modules');

let sortCourses = coursesArray.sort((itemC, itemN) => itemN.modules.length - itemC.modules.length);

console.log(sortCourses);

console.log('=================');
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
console.log('Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.');

let count = (string, symbol) => {
    let result = string.toString().toLowerCase().split(symbol).length - 1;
    console.log(`Кількість "${symbol}" в "${string}" = ${result}`);
}
count('Астрономия это наука о небесных объектах', "а");
//
console.log('========================');
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
console.log('Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.');

let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let cutString = (str, n) => str.split(' ').splice(0, n).join(' ');

console.log(cutString(str, 5));