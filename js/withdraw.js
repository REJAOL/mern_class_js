document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawField = document.getElementById('withdraw-field')
    const withdrawAmount = withdrawField.value
    const newwithdrawAmount = parseFloat(withdrawAmount)
    console.log(newwithdrawAmount);


    const withdrawTotalElement = document.getElementById('withdraw-total')
    const withdrawTotal = withdrawTotalElement.innerText
    const prewithdrawTotal = parseFloat(withdrawTotal)

    console.log(prewithdrawTotal);



    const currentwithdrawTotal = prewithdrawTotal + newwithdrawAmount
    withdrawTotalElement.innerText = currentwithdrawTotal
    console.log(currentwithdrawTotal);

    const balanceTotalElement = document.getElementById('balance-total')
    const balanceTotalString = balanceTotalElement.innerText
    const balanceTotal = parseFloat(balanceTotalString)

    console.log(balanceTotal);

    const currentBalanaceTotal = balanceTotal - newwithdrawAmount
    balanceTotalElement.innerText = currentBalanaceTotal
    console.log(currentBalanaceTotal);




    withdrawField.value = ""


})