//make it functional
function getInput(input) {
    const inputField = document.getElementById(input);
    const inputFieldText = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldText);
    // clear input field 
    inputField.value = '';
    return inputFieldAmount;
}

function updateBalance(id,inputAmount){
    const getPreviousBalance = document.getElementById(id);
    const previousBalanceText = getPreviousBalance.innerText;
    const previousBalance=parseFloat(previousBalanceText);
    getPreviousBalance.innerText=previousBalance + inputAmount;
}

function updateMainBalance(id,transaction,type){
    const mainBalance = document.getElementById(id);
    const mainBalanceText = mainBalance.innerText;
    const previousMainBalance = parseFloat(mainBalanceText);
    if(type==true){
          mainBalance.innerText = previousMainBalance + transaction;
    }else{
          mainBalance.innerText = previousMainBalance - transaction;
    }
}

document.getElementById('deposit-btn').addEventListener('click', function () {

    const newDeposit=getInput('deposit-input');
    if(newDeposit>0){
        //update deposit
    updateBalance('total-deposit',newDeposit)
    //update amount balance
    updateMainBalance('total-balance',newDeposit,true)
    }else{
        alert('invalid credential!')
    }
})
// handle withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdraw=getInput('withdraw-input')
    if(newWithdraw>0){
        // update withdraw total 
    updateBalance('total-withdraw',newWithdraw)
    //update amount balance
    updateMainBalance('total-balance',newWithdraw,false)
    }
})


/* document.getElementById('deposit-btn').addEventListener('click', function () {
    //get input amount deposit
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText)

    //update deposit

    const totalDeposit = document.getElementById('total-deposit');
    const previousDepositAmountText = totalDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText)
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    totalDeposit.innerText = newDepositTotal;

    //update amount balance

    const mainBalance = document.getElementById('total-balance');
    const mainBalanceText = mainBalance.innerText;
    const previousTotalBalance = parseFloat(mainBalanceText);
    const newBalance = previousTotalBalance + newDepositAmount;
    mainBalance.innerText = newBalance;

    // clear deposit input 
    depositInput.value = ''
})

// handle withdraw event handler

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText)

    // update withdraw total 

    const withdrawTotal = document.getElementById('total-withdraw');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText)
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //update amount balance
    const mainBalance = document.getElementById('total-balance');
    const mainBalanceText = mainBalance.innerText;
    const previousTotalBalance = parseFloat(mainBalanceText);
    const newBalance = previousTotalBalance - newWithdrawAmount;
    mainBalance.innerText = newBalance;

    // clear withdraw input 
    withdrawInput.value = ''
}) */