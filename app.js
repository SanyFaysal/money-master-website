

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
        if (typeof parseInt(input) != 'number' || parseInt(input) < 0) {
            const notify = alert('please input a valid amount of money');
            balance.innerText = 0;
            totalExpence.innerText = 0;
            return notify;

        }
        else {

            const totalExpenceCalc = parseInt(foodExpenceAmount) + parseInt(rentExpenceAmount) + parseInt(clothesExpenceAmount);
            totalExpence.innerText = totalExpenceCalc;

            const balanceMoney = parseInt(incomeMoney) - totalExpenceCalc;
            balance.innerText = balanceMoney;

        }
    }

}

document.getElementById('calculate').addEventListener('click', function () {
    getBalance()
})

document.getElementById('saveMoneyBtn').addEventListener('click', function () {
    const savePercentMoney = getInputValue('save-Percent');
    const saveMoney = document.getElementById('save-money');
    const incomeMoney = parseInt(getInputValue('income'))
    const saveMoneyTotal = (incomeMoney * savePercentMoney) / 100;
    saveMoney.innerText = saveMoneyTotal;
    const balance = document.getElementById('balance').innerText;
    const remainingBalance = document.getElementById('reamining-balance');
    const remainingBalanceAmount = parseInt(balance) - saveMoneyTotal;
    remainingBalance.innerText = remainingBalanceAmount;
})
document.getElementById('body').addEventListener('click', function () {

})