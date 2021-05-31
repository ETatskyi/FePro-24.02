const startDate = document.querySelector(`#date1`);
const endDate = document.querySelector(`#date2`);
const btn = document.querySelector(`#button`);
const result = document.querySelector(`#result`);

btn.addEventListener(`click`, calculate);

function calculate() {
    let date1 = new Date(Date.parse(startDate.value));
    let date2 = new Date(Date.parse(endDate.value));

    if (!startDate.value || !endDate.value) {
        result.innerHTML = `select the correct dates`;
    }
    else {
        let dif = Math.abs(date2 - date1);
        let days = (dif / (1000 * 60 * 60 * 24)) % 30;
        let month = Math.floor((dif / (1000 * 60 * 60 * 24)) / 30);
        let years = Math.floor((dif / (1000 * 60 * 60 * 24)) / 365);


        result.innerHTML = `
        ${years ? years + " years" : ""} 
        ${month ? month + " month" : ""} 
        ${days ? days + " days" : ""}
        passed between the two dates`;
    }
}