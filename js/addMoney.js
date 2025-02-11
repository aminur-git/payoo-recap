document
    .getElementById('add-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const addMoney = getInputFieldValueById('input-money');
        const pinNumber = getInputFieldValueById('input-pin');
        if(isNaN(addMoney)){
            alert('Failed to add money!')
            
            document.getElementById('input-money').value = '';
            document.getElementById('input-pin').value = '';
            return;
        }

        if (pinNumber === 2525 ) {
            const balance = getTextFieldValueById('current-balance');
            const newBalance = balance + addMoney;
            document.getElementById('current-balance').innerText = newBalance;

            // add to transaction history:
            const p = document.createElement('p');
            p.innerText = `Added: ${addMoney} Tk. , New Balance:${newBalance}`;
            document.getElementById('transaction-section').appendChild(p)  


            document.getElementById('input-money').value = '';
            document.getElementById('input-pin').value = '';
        } else {
            alert('Failed to add money!')
        }
    })