"use strict";

let money = 0;

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

      const question = prompt(
        "Введите обязательную статью расходов: ",
        "Квартплата"
      );

      // if (i === 0) {
      //   expenses1 = prompt(
      //     "Введите обязательную статью расходов: ",
      //     "Садик государственный"
      //   );
      // }
      // if (i === 1) {
      //   expenses2 = prompt("Введите обязательную статью расходов: ", "Кредит");
      // }

      const price = +prompt("Во сколько это обойдется?");
      if (isNumber(price)) {
        sum += +price;
        appData.expenses[question] = +price;
      } else {
        alert("Введите корректные данные!");
        i--;
      }
    }

    // for (let key in appData.expenses) {
    //   sum = appData.expenses[key] + appData.expenses[key];
    // }

    appData.expensesMonth = +sum;
  },

  getBudget: function () {
    appData.budgetMonth = money - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },

  // accumulatedMonth: ,

  getTargetMonth: function () {
    const target = appData.mission / appData.budgetMonth;
    return target;
  },

  getStatusIncome: function () {
    if (appData.budgetDay > 1200) {
      return "У вас высокий уровень дохода";
    }
    if (appData.budgetDay > 600 && appData.budgetDay < 1199) {
      return "У вас средний уровень дохода";
    }
    if (appData.budgetDay > 0 && appData.budgetDay < 599) {
      return "Уровень вашего дохода ниже среднего";
    }
    if (appData.budgetDay < 0) {
      return "Что-то пошло не так";
    }
  },
};

appData.asking();

appData.getExpensesMonth();

appData.getBudget();

// console.log(appData);

const expensesAmount = appData.expensesMonth;

// const addExpenses = prompt(
//     "Перечислите дополнительные расходы через запятую:",
//     "Интернет, Такси, Коммуналка"
//   ),
//   deposit = confirm("Есть ли у вас депозит в банке?");

// let expenses = [];

// const getExpensesMonth = () => {};

console.log("Расходы за месяц " + expensesAmount);

// const getAccumulatedMonth = () => {};

// const accumulatedMonth = getAccumulatedMonth();

// const getTargetMonth = () => {};

if (appData.getTargetMonth() < 0) {
  console.log("Цель не будет достигнута");
} else {
  console.log(
    `Цель будет достигнута через ${Math.ceil(
      appData.getTargetMonth()
    )} месяц(-ев)`
  );
}

// const getStatusIncome = () => {};
console.log(appData.getStatusIncome());

for (let key in appData) {
  console.log(`Наша программа включает в себя данные: 
  свойство: ${key} и значение: ${appData[key]}`);
}

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
