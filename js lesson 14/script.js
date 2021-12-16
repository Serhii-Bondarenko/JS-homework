// Зробити свій розпорядок дня. // // У вас має бути більше 6 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі


// 1. Під"йом
let mood = 1;

// let wakeUp = (awake, callBack) => {
//     setTimeout(() => {
//         if (awake) {
//             console.log('CALLBACK');
//             console.log("1. Під\"йом! Почався новий день!");
//             callBack(null, mood);
//         } else {
//             callBack('Проспав до вечора', null);
//         }
//     }, 200)
// }
//
//
// // 2. Сніданок
// let haveBreakfast = (hunger, callBack) => {
//     setTimeout(() => {
//         if (hunger > 0) {
//             mood += 99;
//             console.log('loading: ', mood, '%');
//             console.log('2. Сніданок: Вівсянка сер');
//             callBack(null, mood);
//         } else {
//             callBack('Це сон, ти спиш', null);
//         }
//     }, 3000)
// }
//
// //3. Душ
// let haveShower = (smell, callback) => {
//     setTimeout(() => {
//         if (smell > 10) {
//             mood += 50;
//             console.log('3. Душ: Чистота залог успеха)');
//             callback(null, mood);
//         } else {
//             callback('Прокинся хлопе! Який душ?', null);
//         }
//     }, 1500)
// }
//
// // 4. Домашня робота
//
// let homework = (motivation, callBack) => {
//     setTimeout(() => {
//         if (motivation > 140) {
//             console.log('4. Домашня робота: JUST DO IT');
//             callBack(null, motivation);
//         } else {
//             callBack('Піду ще спати', null);
//         }
//     }, 2000);
// }
//
// // 5. Сходити в магазин
//
// let shopping = (kick, callBack) => {
//     setTimeout(() => {
//         if (kick === mood) {
//             kick -= 100;
//             console.log('5. Сходити в магазин: Купити хліб, воду...');
//             callBack(null, kick);
//         } else {
//             callBack('Ні грошей, ні настрою(', null);
//         }
//     }, 1000);
// }
//
// // 6. Приготувати обід
//
// let cook = (wish, callback) => {
//     setTimeout(() => {
//         if (wish < mood) {
//             wish += 100
//             console.log('6. Приготувати обід: Зварив воду, порізав хліба');
//             callback(null, wish);
//         } else {
//             callback('Втомився(', null);
//         }
//     }, 500);
// }
//
// // 7. Пообідати
//
// let haveLunch = (hunger, callBack) => {
//     setTimeout(() => {
//         if (hunger > 100) {
//             mood += 99;
//             console.log('7. Пообідати: Вода альденте, смакота!');
//             callBack(null, mood);
//         } else {
//             callBack('Не голодний!', null);
//         }
//     }, 2000);
// }
//
// // 8. Відвідати практику октен
//
// let getPractice = (motivation, callBack) => {
//     setTimeout(() => {
//         if (mood > 200) {
//             motivation += 50;
//             console.log('8. Відвідати практику октен');
//             callBack(null, motivation);
//         } else {
//             callBack('Зроблю практичні вдома', null);
//         }
//     }, 2500);
// }
//
// // 9. Виконати допки
//
// let addTaskDone = (improve, callBack) => {
//     setTimeout(() => {
//         if (improve > mood) {
//             mood = 1;
//             console.log('9. Виконати допки');
//             callBack(null, mood);
//         } else {
//             callBack('Почекаю до завтра', null);
//         }
//     }, 1000);
// }
//
// // 10. сон
//
// let sleep = (time, callBack) => {
//     time = '00:00';
//     setTimeout(() => {
//         if (time && mood === 1) {
//             console.log('10. Сон: пора відпочивати');
//         } else {
//             callBack('Сон для слабаків', null);
//         }
//         console.log('/////////////////////////////////////////////////////////////////////');
//     }, 1500);
// }
//
// //////////////////////////////////////////////////////////////
//
// wakeUp(true, (error, hunger) => {
//     if (error) {
//         console.log(error);
//     } else {
//         haveBreakfast(hunger, (err, smell) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 haveShower(smell, (err1, motivation) => {
//                     if (err1) {
//                         console.log(err1);
//                     } else {
//                         homework(motivation, (err2, kick) => {
//                             if (err2) {
//                                 console.log(err2);
//                             } else {
//                                 shopping(kick, (err3, wish) => {
//                                     if (err3) {
//                                         console.log(err3);
//                                     } else {
//                                         cook(wish, (err4, hunger) => {
//                                             if (err4) {
//                                                 console.log(err4);
//                                             } else {
//                                                 haveLunch(hunger, (err5, motivation) => {
//                                                     if (err5) {
//                                                         console.log(err5);
//                                                     } else {
//                                                         getPractice(motivation, (err6, improve) => {
//                                                             if (err6) {
//                                                                 console.log(err6);
//                                                             } else {
//                                                                 addTaskDone(improve, (err7, time) => {
//                                                                     if (err7) {
//                                                                         console.log(err7);
//                                                                     } else {
//                                                                         sleep(time, (err8) => {
//                                                                             if (err8) {
//                                                                                 console.log(err8);
//                                                                             }
//                                                                         });
//                                                                     }
//                                                                 })
//                                                             }
//                                                         })
//                                                     }
//                                                 })
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

///////////////////////////////////////////////////////////////////////////////////////////////

// 1. Під"йом

let wakeUp = (awake) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (awake) {
                console.log('PROMISE');
                console.log("1. Під\"йом! Почався новий день!");
                resolve(mood);
            } else {
                reject('Проспав до вечора');
            }
        }, 200);
    })
}


// 2. Сніданок
let haveBreakfast = (hunger) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (hunger > 0) {
                mood += 99;
                console.log('loading: ', mood, '%');
                console.log('2. Сніданок: Вівсянка сер');
                resolve(mood);
            } else {
                reject('Це сон, ти спиш');
            }
        }, 3000);
    })
}

//3. Душ
let haveShower = (smell) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (smell > 10) {
                mood += 50;
                console.log('3. Душ: Чистота залог успеха)');
                resolve(mood);
            } else {
                reject('Прокинся хлопе! Який душ?');
            }
        }, 1500);
    })
}

// 4. Домашня робота

let homework = (motivation) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (motivation > 140) {
                console.log('4. Домашня робота: JUST DO IT');
                resolve(motivation);
            } else {
                reject('Піду ще спати');
            }
        }, 2000);
    })
}

// 5. Сходити в магазин

let shopping = (kick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (kick === mood) {
                kick -= 100;
                console.log('5. Сходити в магазин: Купити хліб, воду...');
                resolve(kick);
            } else {
                reject('Ні грошей, ні настрою(');
            }
        }, 1000);
    })
}

// 6. Приготувати обід

let cook = (wish) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wish < mood) {
                wish += 100
                console.log('6. Приготувати обід: Зварив воду, порізав хліба');
                resolve(wish);
            } else {
                reject('Втомився(');
            }
        }, 500);
    })
}

// 7. Пообідати

let haveLunch = (hunger) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (hunger > 100) {
                mood += 99;
                console.log('7. Пообідати: Вода альденте, смакота!');
                resolve(mood);
            } else {
                reject('Не голодний!');
            }
        }, 2000);
    })
}

// 8. Відвідати практику октен

let getPractice = (motivation) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mood > 200) {
                motivation += 50;
                console.log('8. Відвідати практику октен');
                resolve(motivation);
            } else {
                reject('Зроблю практичні вдома');
            }
        }, 2500);
    })
}

// 9. Виконати допки

let addTaskDone = (improve) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (improve > mood) {
                mood = 1;
                console.log('9. Виконати допки');
                resolve(mood);
            } else {
                reject('Почекаю до завтра');
            }
        }, 1000);
    })
}

// 10. сон

let sleep = (time) => {
    time = '00:00';
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time && mood === 1) {
                console.log('10. Сон: пора відпочивати');
                resolve('Final');
            } else {
                reject('Сон для слабаків');
            }
        }, 1500);
    })
}

// PROMISE

// wakeUp(true)
//     .then (hunger => {
//         return haveBreakfast(hunger);
//     })
//     .then(smell => {
//         return haveShower(smell);
//     })
//     .then(motivation => {
//         return homework(motivation);
//     })
//     .then(kick => {
//         return shopping(kick);
//     })
//     .then(wish => {
//         return cook(wish);
//     })
//     .then(hunger => {
//         return haveLunch(hunger);
//     })
//     .then(motivation => {
//         return getPractice(motivation);
//     })
//     .then(improve => {
//         return addTaskDone(improve);
//     })
//     .then(time => {
//         return sleep(time);
//     })
//     .catch(error => {
//         console.log(error);
//     })

// asynk await

async function result() {
    try {
        const hunger = await wakeUp(true);
        const smell = await haveBreakfast(hunger);
        const motivation = await haveShower(smell);
        const kick = await homework(motivation);
        const wish = await shopping(kick);
        const famine = await cook(wish);
        const vigor = await haveLunch(famine);
        const improve = await getPractice(vigor);
        const time = await addTaskDone(improve);
        await sleep(time);
    } catch (e) {
        console.log(e);
    }
}

result();
