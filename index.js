document.querySelector(".calculate").addEventListener("click", calculate);

document.querySelector(".clear").addEventListener("click", clear);

function calculate() {
  let price = document.getElementById("price").value;
  let percentage = document.getElementById("percentage").value;
  let numberOfCustomers = document.getElementById("customers").value;
  let tip = (percentage / 100) * price;
  let customerTab = tip / numberOfCustomers;

  if (price === "") {
    document.querySelector(
      ".total-tips"
    ).innerHTML = `Please enter total price`;
  } else if (numberOfCustomers === "") {
    document.querySelector(
      ".unit-cost"
    ).innerHTML = `Please enter number of customers`;
  } else if (price < 0 || numberOfCustomers < 0) {
    document.querySelector(
      ".total-tips"
    ).innerHTML = `Price and number of customers can only be positive numbers`;
  } else {
    document.querySelector(
      ".total-tips"
    ).innerHTML = `Total tip for this service is &#x20A6;${tip}`;
    document.querySelector(
      ".unit-cost"
    ).innerHTML = `Each customer will pay &#x20A6;${customerTab}`;
  }
}

function clear() {
  document.getElementById("price").value = "";
  document.getElementById("percentage").value = "0";
  document.getElementById("customers").value = "";
  document.querySelector(".total-tips").innerHTML = "";
  document.querySelector(".unit-cost").innerHTML = "";
}
