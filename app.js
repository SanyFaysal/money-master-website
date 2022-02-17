

function getInputValue(field) {
    const fieldExpence = document.getElementById(field + '-money');
    const fieldExpenceAmount = fieldExpence.value;
    return fieldExpenceAmount;
}

function getBalance() {
    let incomeMoney = getInputValue('income');
    const foodExpenceAmount = getInputValue('food');
    const rentExpenceAmount = getInputValue('rent');
    const clothesExpenceAmount = getInputValue('clothes');
    const totalExpence = document.getElementById('total-money');
    const balance = document.getElementById('balance');

    const allInput = [incomeMoney, foodExpenceAmount, rentExpenceAmount, clothesExpenceAmount];
    for (const input of allInput) {
        if ((typeof parseFloat(input) != 'number') || (parseFloat(input) < 0)) {
            const notify = alert('please input a valid amount of money');
            balance.innerText = 0;
            totalExpence.innerText = 0;
            return notify;

        }
        else {

            const totalExpenceCalc = parseFloat(foodExpenceAmount) + parseFloat(rentExpenceAmount) + parseFloat(clothesExpenceAmount);
            if (parseFloat(totalExpenceCalc) > parseFloat(incomeMoney)) {
                const error = alert("sorry ! your total expense is greater than your income ..!")
                return error;
            }
            else {
                totalExpence.innerText = totalExpenceCalc;
                const balanceMoney = parseFloat(incomeMoney) - totalExpenceCalc;
                balance.innerText = balanceMoney;
            }
        }
    }


}

document.getElementById('calculate').addEventListener('click', function () {
    getBalance()
})

document.getElementById('saveMoneyBtn').addEventListener('click', function () {

    const savePercentMoney = getInputValue('save-Percent');
    const saveMoney = document.getElementById('save-money');
    const incomeMoney = parseFloat(getInputValue('income'))
    const saveMoneyTotal = (incomeMoney * savePercentMoney) / 100;
    const balance = document.getElementById('balance').innerText;
    if (parseFloat(saveMoneyTotal) > parseFloat(balance)) {
        const errorMsg = alert('sorry ! you have insufficient ballance to save money !!!');
        return errorMsg;
    }
    else {
        saveMoney.innerText = saveMoneyTotal;
        const remainingBalance = document.getElementById('reamining-balance');
        const remainingBalanceAmount = parseFloat(balance) - saveMoneyTotal;
        remainingBalance.innerText = remainingBalanceAmount;
    }

})
document.getElementById('body').addEventListener('click', function () {

})