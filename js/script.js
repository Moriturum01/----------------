"use strict";

let money = 0,
  expenses = [];

const isNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const start = () => {
  do {
    money = prompt("Ваш месячный доход?", 60000);
  } while (!isNumber(money));

  // money = prompt("Ваш месячный доход?", 60000);

  // while (!isNumber(money)) {
  //   money = prompt("Ваш месячный доход?", 60000);
  // }
};

start();

let appData = {
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 500000,
  period: 12,
  asking: function () {
    const addExpenses = prompt(
      "Перечислите дополнительные расходы через запятую:",
      "Интернет, Такси, Коммуналка"
    );
    appData.addExpenses = addExpenses.toLocaleLowerCase().split(",");
    appData.deposit = confirm("Есть ли у вас депозит в банке?");
  },

  getExpensesMonth: function () {
    let sum = 0; //Объявление переменной общей суммы

    for (let i = 0; i < 2; i++) {
      //Задаем вопрос 2 раза

      expenses[i] = prompt("Введите обязательную статью расходов: ");
      // if (i === 0) {
      //   expenses1 = prompt(
      //     "Введите обязательную статью расходов: ",
      //     "Садик государственный"
      //   );
      // }
      // if (i === 1) {
      //   expenses2 = prompt("Введите обязательную статью расходов: ", "Кредит");
      // }
      const price = prompt("Во сколько это обойдется?");
      if (isNumber(price)) {
        sum += +price;
      } else {
        alert("Введите корректные данные!");
        i--;
      }
    }
    console.log(expenses);
    return sum;
  },

  expensesAmount: getExpensesMonth(),

  getAccumulatedMonth: function () {
    const accumulatedMonth = money - appData.getExpensesMonth();
    return accumulatedMonth;
  },

  // accumulatedMonth: ,

  getTargetMonth: function () {
    const target = appData.mission / appData.getAccumulatedMonth();
    return target;
  },

  getStatusIncome: function () {
    if (budgetDay > 1200) {
      return "У вас высокий уровень дохода";
    }
    if (budgetDay > 600 && budgetDay < 1199) {
      return "У вас средний уровень дохода";
    }
    if (budgetDay > 0 && budgetDay < 599) {
      return "Уровень вашего дохода ниже среднего";
    }
    if (budgetDay < 0) {
      return "Что-то пошло не так";
    }
  },
};

// const addExpenses = prompt(
//     "Перечислите дополнительные расходы через запятую:",
//     "Интернет, Такси, Коммуналка"
//   ),
//   deposit = confirm("Есть ли у вас депозит в банке?");

// let expenses = [];

// const getExpensesMonth = () => {};

console.log("Расходы за месяц " + appData.getExpensesMonth());

// const getAccumulatedMonth = () => {};

// const accumulatedMonth = getAccumulatedMonth();

// const getTargetMonth = () => {};

const budgetDay = Math.floor(appData.getAccumulatedMonth() / 30);

if (appData.getTargetMonth() < 0) {
  console.log("Цель не будет достигнута");
} else {
  console.log(
    `Цель будет достигнута через ${Math.ceil(appData.getTargetMonth())}`
  );
}

// const getStatusIncome = () => {};
console.log(appData.getStatusIncome());
// const showTypeOf = (data) => {
//   console.log(data, typeof data);
// };

// showTypeOf(money);
// showTypeOf(appData.income);
// showTypeOf(appData.deposit);

// console.log(addExpenses.toLocaleLowerCase().split(","));
// expenses1 = prompt("Введите обязательную статью расходов: "),
// amount1 = +prompt("Во сколько это обойдется?"),
// expenses2 = prompt("Введите обязательную статью расходов: "),
// amount2 = +prompt("Во сколько это обойдется?");

// const purpose = Math.ceil(mission / getAccumulatedMonth());

// console.log(budgetDay);

// console.log(purpose);

// console.log(addExpenses.length);
// showTypeOf(addExpenses);
// console.log(`Период равен ${period} месяцев`);
// console.log(`Цель заработать ${mission} рублей`);
// console.log(`Бюджет на день = ${budgetDay}`);
// console.log(`Бюджет на месяц = ${getAccumulatedMonth()}`);

// console.log(getAccumulatedMonth());

// console.log(getTargetMonth());

// const num = 266219;

// const array = num.toString().split("");

// const res = array.reduce((acc, rec) => acc * rec);

// const pow = res ** 3;

// console.log(pow.toString().substring(0, 2));
