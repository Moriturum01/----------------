"use strict";

let money = 0;

const isNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const start = () => {
  do {
    money = prompt("Ваш месячный доход?", 60000);
  } while (!isNumber(money));
};

start();

const appData = {
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
  asking: () => {
    const addExpenses = prompt(
      "Перечислите дополнительные расходы через запятую:",
      "Интернет, Такси, Коммуналка"
    );
    appData.addExpenses = addExpenses.toLocaleLowerCase().split(",");
    appData.deposit = confirm("Есть ли у вас депозит в банке?");
  },

  getExpensesMonth: () => {
    let sum = 0; //Объявление переменной общей суммы

    for (let i = 0; i < 2; i++) {
      //Задаем вопрос 2 раза

      const question = prompt(
        "Введите обязательную статью расходов: ",
        "Квартплата"
      );

      const price = +prompt("Во сколько это обойдется?");
      if (isNumber(price)) {
        sum += +price;
        appData.expenses[question] = +price;
      } else {
        alert("Введите корректные данные!");
        i--;
      }
    }

    appData.expensesMonth = +sum;
  },

  getBudget: () => {
    appData.budgetMonth = money - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },

  getTargetMonth: () => {
    const target = appData.mission / appData.budgetMonth;
    return target;
  },

  getStatusIncome: () => {
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

const expensesAmount = appData.expensesMonth;

console.log("Расходы за месяц " + expensesAmount);

if (appData.getTargetMonth() < 0) {
  console.log("Цель не будет достигнута");
} else {
  console.log(
    `Цель будет достигнута через ${Math.ceil(
      appData.getTargetMonth()
    )} месяц(-ев)`
  );
}

console.log(appData.getStatusIncome());

for (const key in appData) {
  console.log(`Наша программа включает в себя данные: 
  свойство: ${key} и значение: ${appData[key]}`);
}
