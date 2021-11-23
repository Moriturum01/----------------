"use strict";

const isNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const income = prompt("Есть ли у вас дополнительный доход?", "Фриланс"),
  addExpenses = prompt(
    "Перечислите дополнительные расходы через запятую:",
    "Интернет, Такси, Коммуналка"
  ),
  deposit = confirm("Есть ли у вас депозит в банке?"),
  mission = 500000,
  period = 12;

let money = 0;

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

const showTypeOf = (data) => {
  console.log(data, typeof data);
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses = [];

console.log(addExpenses.toLocaleLowerCase().split(","));
// expenses1 = prompt("Введите обязательную статью расходов: "),
// amount1 = +prompt("Во сколько это обойдется?"),
// expenses2 = prompt("Введите обязательную статью расходов: "),
// amount2 = +prompt("Во сколько это обойдется?");

const getExpensesMonth = () => {
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
    if (!isNumber(sum)) {
      sum += +prompt("Во сколько это обойдется?");!!! не понял пока как проверить.
    }
  }
  console.log(expenses);
  return sum;
};

const expensesAmount = getExpensesMonth();
console.log("Расходы за месяц " + expensesAmount);

const getAccumulatedMonth = () => {
  const accumulatedMonth = money - expensesAmount;
  return accumulatedMonth;
};

const accumulatedMonth = getAccumulatedMonth();

const getTargetMonth = () => {
  const target = mission / accumulatedMonth;
  return target;
};

const budgetDay = Math.floor(accumulatedMonth / 30);
// const purpose = Math.ceil(mission / getAccumulatedMonth());

// console.log(budgetDay);

// console.log(purpose);

// console.log(addExpenses.length);
// showTypeOf(addExpenses);
// console.log(`Период равен ${period} месяцев`);
// console.log(`Цель заработать ${mission} рублей`);
// console.log(`Бюджет на день = ${budgetDay}`);
// console.log(`Бюджет на месяц = ${getAccumulatedMonth()}`);
if (getTargetMonth() < 0) {
  console.log("Цель не будет достигнута");
} else {
  console.log(`Цель будет достигнута через ${Math.ceil(getTargetMonth())}`);
}

const getStatusIncome = () => {
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
};
console.log(getStatusIncome());

// console.log(getAccumulatedMonth());

// console.log(getTargetMonth());

// const num = 266219;

// const array = num.toString().split("");

// const res = array.reduce((acc, rec) => acc * rec);

// const pow = res ** 3;

// console.log(pow.toString().substring(0, 2));
