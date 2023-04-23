let table = document.querySelector('#table');
let date = document.querySelector('#date');
let sales = document.querySelector('#sales');
let hours = document.querySelector('#hours');
let internets = document.querySelector('#internets');

let value = 0;

let countBtn = document.querySelector('.btn');
countBtn.addEventListener('click', function () {

    let tr = document.createElement('tr');
    let tdDate = document.createElement('td');
    let tdHours = document.createElement('td');
    let tdSales = document.createElement('td');
    let tdPay = document.createElement('td');

    tdDate.textContent = `${date.value}`;
    tdHours.textContent = `${hours.value}`;
    tdSales.textContent = `${sales.value}`;

    tr.append(tdDate, tdHours, tdSales, tdPay);
    table.append(tr);

    let result = sales.value / hours.value;

    let num;

    // if internets = 0
    if (result >= 1 && result <= 1.09 && internets.value == 0) {
        num = 0.60 * sales.value;
        tdPay.textContent = Math.round(num * 10) / 10 + ' pln';
    }
    if (result >= 1.10 && result <= 1.19 && internets.value == 0) {
        num = 0.9 * sales.value;
        tdPay.textContent = Math.round(num * 10) / 10 + ' pln';
    }
    if (result >= 1.20 && result <= 1.29 && internets.value == 0) {
        num = 1.2 * sales.value;
        tdPay.textContent = Math.round(num * 10) / 10 + ' pln';
    }
    if (result >= 1.30 && result <= 1.50 && internets.value == 0) {
        num = 1.5 * sales.value;
        tdPay.textContent = Math.round(num * 10) / 10 + ' pln';
    }
    if (result >= 1.51 && result <= 1.90 && internets.value == 0) {
        num = 1.8 * sales.value;
        tdPay.textContent = Math.round(num * 10) / 10 + ' pln';
    }
    if (result >= 1.91 && result <= 2.35 && internets.value == 0) {
        2.1 * sales.value;
        tdPay.textContent = Math.round(num * 10) / 10 + ' pln';
    }
    if (result >= 2.36 && internets.value == 0) {
        2.4 * sales.value;
        tdPay.textContent = Math.round(num * 10) / 10 + ' pln';
    }

    // if internets = 1-2
    if (result >= 1 && result <= 1.09 && internets.value >= 1 && internets.value <= 2) {
        num = 0.90 * sales.value;
        tdPay.textContent = Math.round(num * 10) / 10 + ' pln';
    }
    if (result >= 1.10 && result <= 1.19 && internets.value >= 1 && internets.value <= 2) {
        num = 1.35 * sales.value;
        tdPay.textContent = Math.round(num * 10) / 10 + ' pln';
    }
    if (result >= 1.20 && result <= 1.29 && internets.value >= 1 && internets.value <= 2) {
        num = 1.8 * sales.value;
        tdPay.textContent = Math.round(num * 10) / 10 + ' pln';
    }
    if (result >= 1.30 && result <= 1.50 && internets.value >= 1 && internets.value <= 2) {
        num = 2.25 * sales.value;
        tdPay.textContent = Math.round(num * 10) / 10 + ' pln';
    }
    if (result >= 1.51 && result <= 1.90 && internets.value >= 1 && internets.value <= 2) {
        num = 2.7 * sales.value;
        tdPay.textContent = Math.round(num * 10) / 10 + ' pln';
    }
    if (result >= 1.91 && result <= 2.35 && internets.value >= 1 && internets.value <= 2) {
        num = 3.15 * sales.value;
        tdPay.textContent = Math.round(num * 10) / 10 + ' pln';
    }
    if (result >= 2.36 && internets.value >= 1 && internets.value <= 2) {
        num = 3.6 * sales.value;
        tdPay.textContent = Math.round(num * 10) / 10 + ' pln';
    }

    //textContent = ''
    if (!tdSales.textContent || !tdHours.textContent || !tdDate.textContent || !internets.value) {
        console.log(this);
        tr.remove()
        alert('Please fill in empty inputs');
    }
})
// }