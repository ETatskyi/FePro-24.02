var suppliesUsage = [];

function initDays(n = 7) {
    for (var i = 0; i < n; i++) {
        suppliesUsage.push({});
        suppliesUsage[i].day = i + 1
        suppliesUsage[i].rum = Math.floor(Math.random() * 100)
        suppliesUsage[i].meat = Math.floor(Math.random() * 150)

    }
}
initDays(7)
console.log(suppliesUsage)

function getMaxConsumption(supplies) {
    var maxConsumption = {
        rum: { day: 0, ammount: 0 },
        meat: { day: 0, ammount: 0 }
    };
    for (var i = 0; i < supplies.length; i++) {
        if(maxConsumption.rum.ammount < supplies[i].rum){
            maxConsumption.rum.ammount = supplies[i].rum;
            maxConsumption.rum.day = supplies[i].day
        }

        if(maxConsumption.meat.ammount < supplies[i].meat){
            maxConsumption.meat.ammount = supplies[i].meat;
            maxConsumption.meat.day = supplies[i].day
        }
    }

    return maxConsumption
}

console.log(getMaxConsumption(suppliesUsage)) // object output
console.log(`больше всего мяса сьели в ${getMaxConsumption(suppliesUsage).meat.day}-й день - ${getMaxConsumption(suppliesUsage).meat.ammount}кг. \nбольше всего рома выпили в ${getMaxConsumption(suppliesUsage).rum.day}-й день - ${getMaxConsumption(suppliesUsage).rum.ammount}л.`) // pretty string output
