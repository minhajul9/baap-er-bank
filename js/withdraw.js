document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = parseInt(withdrawField.value);
    
    const totalWithdraw = document.getElementById('total-withdraw');
    const totalWithdrawAmount = parseInt(totalWithdraw.innerText);

    totalWithdraw.innerText = withdrawAmount + totalWithdrawAmount;

    withdrawField.value = '';
    updateBalance(withdrawAmount*(-1))

})