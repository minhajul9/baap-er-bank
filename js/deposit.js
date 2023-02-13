document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalAmount = depositTotal.innerText;

    depositTotal.innerText = parseInt(depositAmount) + parseInt(depositTotalAmount);
    depositField.value = '';
    updateBalance(parseInt(depositAmount))
})

function updateBalance(amount){
    const previousBalanceField = document.getElementById('balance-amount');
    const previousBalanceAmount = parseInt(previousBalanceField.innerText);
    
    const newBalance = previousBalanceAmount + amount;
    previousBalanceField.innerText = newBalance; 
}