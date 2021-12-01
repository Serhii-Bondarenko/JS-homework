// 1) Створити карту користувача(User Card):
// Створити функцію «userCard» яка приймає число(будь-яке число) і повертає
// об’єкт з методами:
//     const card3 = userCard(3); // returns an object with methods
console.log('1) Створити карту користувача(User Card)');

function userCard(numberOfCart) {
    let card = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: numberOfCart,
    }
    if (numberOfCart === 1 || numberOfCart === 2 || numberOfCart === 3) {
        return {
            linkToKey: (key) => card.key,
            putCredits: (topUp) => {
                if (typeof topUp === 'number') {
                    card.balance += topUp;
                    card.historyLogs.push({
                        operationType: "Received credits",
                        credits: topUp,
                        operationTime: `"${new Date().toLocaleDateString()
                        }", "${new Date().toLocaleTimeString()}" `
                    });
                } else {
                    console.error('Некоректні дані', topUp);
                }
            },
            takeCredits: (takeOut) => {
                if (typeof takeOut === 'number' && card.balance >= takeOut && card.transactionLimit >= takeOut) {
                    card.balance -= takeOut;
                    card.transactionLimit -= takeOut;
                    card.historyLogs.push({
                        operationType: "Withdrawal of credits",
                        credits: takeOut,
                        operationTime: `"${new Date().toLocaleDateString()
                        }", "${new Date().toLocaleTimeString()}" `
                    });
                } else {
                    console.error('Некоректні дані', takeOut, 'або недостатньо коштів на картці', card.key);
                }
            },
            setTransactionLimit: (transactionLimit) => {
                if (typeof transactionLimit === 'number') {
                    card.transactionLimit = transactionLimit;
                    card.historyLogs.push({
                        operationType: "Transaction limit change",
                        newLimit: transactionLimit,
                        operationTime: `"${new Date().toLocaleDateString()
                        }", "${new Date().toLocaleTimeString()}" `
                    });
                } else {
                    console.error('Некоректні дані', transactionLimit);
                }
            },
            transferCredits: (transferAmount, cardObj) => {
                let tax = transferAmount / 100 * 5;
                if (typeof transferAmount === 'number' && transferAmount <= card.balance + tax && card.transactionLimit >= transferAmount + tax) {
                    card.transactionLimit -= transferAmount;
                    card.balance = card.balance - (transferAmount + tax);
                    cardObj.putCredits(transferAmount);
                } else {
                    console.error('Некоректні дані', transferAmount, 'або недостатньо коштів на картці', card.key);
                }
            },
            getCardOptions: () => console.log(card),
        }
    } else {
        console.error('Не знайдена картка', card.key);
    }
}

let card = userCard(4);
let card3 = userCard(3);
let card2 = userCard(2);
let card1 = userCard(1);

card3.getCardOptions();
card3.setTransactionLimit(50);
card3.putCredits(50);
card3.takeCredits(30);
card3.transferCredits(5, card2);
card3.transferCredits(14, card1);

console.log('----------------------------------');

card2.getCardOptions();
card2.putCredits(100);
card2.setTransactionLimit(300);
card2.takeCredits(60);
card2.transferCredits(25, card3);
card2.transferCredits(45, card3);

console.log('----------------------------');

card1.getCardOptions();

console.log('====================================');
// 2) Створити UserAccount:
//     Створити класс `UserAccount` (для цього завдання можна використати ES6 класс
// або звичайну функцію):
// const user = new UserAccount('Bob');
// Класс має містити:
//     Властивості акаунту користувача:
//     - name (передати в конструкторі)
// - cards (Масив карток користувача. Масив не має бути довшим ніж 3)
// Методи акаунту користувача:
//     - addCard. Створює нову карту
console.log(' 2) Створити UserAccount');

class UserAccount {
    constructor(userName) {
        this.userName = userName;
        this.cards = [];
        this.addCard = (numberOfCart) => numberOfCart <= 3 && this.cards.length < 3 ? this.cards.push(userCard(numberOfCart)) : console.error('Максимум 3 картки');
        this.getCardByKey = (key) => this.cards.find(card => key === card.linkToKey(key) ? card : false);
    }
}

const userOleg = new UserAccount('Oleg');
const userBob = new UserAccount('Bob');
console.log(userBob);
console.log(userOleg);

userBob.addCard(1);
userBob.addCard(2);
userBob.addCard(3);

userOleg.addCard(1);
userOleg.addCard(2);
userOleg.addCard(3);

let bobCard1 = userBob.getCardByKey(1);
let bobCard2 = userBob.getCardByKey(2);
let olegCard1 = userOleg.getCardByKey(1);
let olegCard2 = userOleg.getCardByKey(2);

bobCard1.getCardOptions();
bobCard1.putCredits(500);
bobCard1.transferCredits(90, bobCard2);

console.log('----------------------------');

bobCard2.takeCredits(40);

console.log('Боб скинув Олегу 40 грн. на штани');
bobCard2.getCardOptions();
bobCard2.transferCredits(40, olegCard1)

olegCard1.getCardOptions();
