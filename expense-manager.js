// Add income or expense
let expenseObj = {};
let incomeObj = {};
let sizeInc = Object.keys(incomeObj).length;
let sizeExp = Object.keys(expenseObj).length;

function addItemPair() {
  ///////////////////////// Adding income

  document.querySelector("#btn-inc").addEventListener("click", function () {
    let key = document.querySelector("#items").value;
    let value = document.querySelector("#amount").value;

    if (key !== "" && value.length > 0) {
      // Add inc to object

      /////////// Add income to the screen
      // Add income block
      // Ading id
      let parent = document.querySelector(".container__history--container");
      let divIncome = document.createElement("div");

      // Adding income class
      divIncome.setAttribute("class", "income");
      // Adding id for every income
      let idIncome;
      for (let i = 0; i <= sizeInc; i++) {
        if (!incomeObj["inc" + i]) {
          idIncome = "inc" + i;
        }
      }
      sizeInc += 1;
      divIncome.setAttribute("id", idIncome);
      parent.appendChild(divIncome);
      incomeObj[idIncome] = document.querySelector("#amount").value;
      console.log(incomeObj);

      // Add remove-button
      let buttonRemove = document.createElement("button");
      let removeText = document.createTextNode("X");
      buttonRemove.setAttribute("class", "remove");
      divIncome.appendChild(buttonRemove);
      buttonRemove.appendChild(removeText);

      // Add inc-item
      let h3Item = document.createElement("h3");
      let itemText = document.createTextNode(key);

      h3Item.setAttribute("class", "item");
      divIncome.appendChild(h3Item);
      h3Item.appendChild(itemText);

      // Add price-dive
      let divPrice = document.createElement("div");
      divPrice.setAttribute("class", "price");
      divIncome.appendChild(divPrice);

      // Add $-Sign
      let h3Sign = document.createElement("h3");
      let signText = document.createTextNode("$");
      h3Sign.setAttribute("class", "sign");
      divPrice.appendChild(h3Sign);
      h3Sign.appendChild(signText);

      // Add inc-price
      let h3IncPrice = document.createElement("h3");
      let IncPriceText = document.createTextNode(value);
      h3IncPrice.setAttribute("class", "inc-price");
      divPrice.appendChild(h3IncPrice);
      h3IncPrice.appendChild(IncPriceText);

      // Resent input field
      document.querySelector("#items").value = null;
      document.querySelector("#amount").value = null;
      addItemPair();
    }
  });

  ///////////////////////// Adding expense
  document.querySelector("#btn-exp").addEventListener("click", function () {
    let key = document.querySelector("#items").value;
    let value = document.querySelector("#amount").value;
    if (key !== "" && value.length > 0) {
      // Add exp to object

      /////////// Add expense to the screen
      // Add expense block/class
      let parent = document.querySelector(".container__history--container");
      let divExpense = document.createElement("div");

      divExpense.setAttribute("class", "expense");
      parent.appendChild(divExpense);

      // Adding id for every expense
      let idExpense;
      for (let i = 0; i <= sizeExp; i++) {
        if (!expenseObj["inc" + i]) {
          idExpense = "inc" + i;
        }
      }
      sizeExp += 1;
      divExpense.setAttribute("id", idExpense);
      parent.appendChild(divExpense);
      expenseObj[idExpense] = document.querySelector("#amount").value;
      console.log(expenseObj);

      // Add remove-button
      let buttonRemove = document.createElement("button");
      let removeText = document.createTextNode("X");
      buttonRemove.setAttribute("class", "remove");
      divExpense.appendChild(buttonRemove);
      buttonRemove.appendChild(removeText);

      // Add exp-item
      let divItem = document.createElement("h3");
      let itemText = document.createTextNode(key);

      divItem.setAttribute("class", "item");
      divExpense.appendChild(divItem);
      divItem.appendChild(itemText);

      // Add price-dive
      let divPrice = document.createElement("div");
      divPrice.setAttribute("class", "price");
      divExpense.appendChild(divPrice);

      // Add $-Sign
      let h3Sign = document.createElement("h3");
      let signText = document.createTextNode("$");
      h3Sign.setAttribute("class", "sign");
      divPrice.appendChild(h3Sign);
      h3Sign.appendChild(signText);

      // Add inc-price
      let h3IncPrice = document.createElement("h3");
      let IncPriceText = document.createTextNode(value);
      h3IncPrice.setAttribute("class", "exp-price");
      divPrice.appendChild(h3IncPrice);
      h3IncPrice.appendChild(IncPriceText);

      // Resent input field
      document.querySelector("#items").value = null;
      document.querySelector("#amount").value = null;

      addItemPair();
    }
  });

  // Return total value of incObj
  let sumInc = 0;
  for (el in incomeObj) {
    sumInc += parseFloat(incomeObj[el]);
  }
  // Return total value of expObj
  let sumExp = 0;
  for (el in expenseObj) {
    sumExp += parseFloat(expenseObj[el]);
  }
  // Balance, incomes and expenses
  let balance = document.getElementById("balance");
  let incomes = document.getElementById("incomes");
  let expenses = document.getElementById("expenses");

  // Income and expense
  let income = document.querySelectorAll(".inc-price");
  let expense = document.querySelectorAll(".exp-price");

  // Incomes formula

  incomes.textContent = sumInc;

  // Expenses formula

  expenses.textContent = sumExp;

  // Balance formula
  balance.textContent = sumInc - sumExp;

  // Make balance red if value is negative
  if (eval(balance.textContent) < 0) {
    document.querySelector(".container__balance").style.backgroundColor =
      "#eb3e3be3";
  } else {
    document.querySelector(".container__balance").style.backgroundColor =
      "#2d97eece";
  }
}
addItemPair();
