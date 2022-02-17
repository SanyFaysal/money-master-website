function totalExpence() {
    const foodExpence = document.getElementById('food-expence');
    const foodExpenceAmount = foodExpence.value;

    const rentExpence = document.getElementById('rent-expence');
    const rentExpenceAmount = rentExpence.value;

    const clothesExpence = document.getElementById('clothes-expence');
    const clothesExpenceAmount = clothesExpence.value;


    if ((foodExpenceAmount == undefined)) {
        alert("give me all info")
    }
    else {
        const totalExpence = document.getElementById('total-expence');
        const totalExpenceCalc = parseInt(foodExpenceAmount) + parseInt(rentExpenceAmount) + parseInt(clothesExpenceAmount);
        totalExpence.innerText = totalExpenceCalc;

    }
}

document.getElementById('calculate').addEventListener('click', function () {
    totalExpence()
})