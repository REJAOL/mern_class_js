document.getElementById('btn-deposit').addEventListener('click', function () {

    const depositField = document.getElementById('deposit-field')
    const depositAmount = depositField.value
    const newDepositAmount = parseFloat(depositAmount)
    console.log(newDepositAmount);


    const depositTotalElement = document.getElementById('deposit-total')
    const depositTotal = depositTotalElement.innerText
    const preDepositTotal = parseFloat(depositTotal)

    console.log(preDepositTotal);



    const currentDipositTotal = preDepositTotal + newDepositAmount
    depositTotalElement.innerText = currentDipositTotal
    console.log(currentDipositTotal);

    const balanceTotalElement = document.getElementById('balance-total')
    const balanceTotalString = balanceTotalElement.innerText
    const balanceTotal = parseFloat(balanceTotalString)

    console.log(balanceTotal);

    const currentBalanaceTotal = newDepositAmount + balanceTotal
    balanceTotalElement.innerText = currentBalanaceTotal
    console.log(currentBalanaceTotal);

    depositField.value = ""
})