document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashoutAmount = getInputFieldValueById("input-cashout-money");
    const pinNumber = getInputFieldValueById("input-cashout-pin");
    const currentBalance = getTextFieldValueById("current-balance");

    if (isNaN(cashoutAmount)) {
      alert("Failed to Cash-Out!");

      document.getElementById("input-cashout-pin").value = "";
      document.getElementById("input-cashout-money").value = "";
      return;
    }

    if (pinNumber === 2525) {
      if (cashoutAmount > currentBalance) {
        alert("You Do Not Have Sufficient Balance!");
        return ;
      }

      const newBalance = currentBalance - cashoutAmount;
      document.getElementById("current-balance").innerText = newBalance;
      // add to transaction history:
      const div = document.createElement("div");
      div.classList.add("bg-blue-100", "p-4", "rounded-md");
      div.innerHTML = `
        <h4 class="text-xl font-semibold">Cash Out</h4>
        <p>${cashoutAmount} Withdraw. New Balance ${newBalance} </P> `;
      document.getElementById("transaction-section").appendChild(div);

      document.getElementById("input-cashout-pin").value = "";
      document.getElementById("input-cashout-money").value = "";
    } else {
      alert("Please Try Again");
    }
  });
