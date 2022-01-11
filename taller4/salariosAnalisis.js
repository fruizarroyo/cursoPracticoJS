function displayResults(id, text) {
    const element = document.getElementById(id);
    const resultsDisplayed = element.innerHTML
    if (resultsDisplayed) {    
        element.innerText= "";
        element.innerText = text 
    } else {
        element.innerText = text 
    }
}

function getInputText () {

    let basicWage = document.getElementById("input-wage").value?document.getElementById("input-wage").value:0;
    let dayExtraHours =  document.getElementById("input-day-extra-hours").value?document.getElementById("input-day-extra-hours").value:0;
    let sundayExtraHours = document.getElementById("input-sunday-extra-hours").value?document.getElementById("input-sunday-extra-hours").value:0;
    let holidayExtraHours =  document.getElementById("input-holiday-extra-hours").value?document.getElementById("input-holiday-extra-hours").value:0;

    //Convertir todo a entero
    basicWage = parseInt(basicWage);
    dayExtraHours = parseInt(dayExtraHours);
    sundayExtraHours = parseInt(sundayExtraHours);
    holidayExtraHours = parseInt(holidayExtraHours);

    // console.log(basicWage);
    // console.log(dayExtraHours);
    // console.log(sundayExtraHours);
    // console.log(holidayExtraHours);
    return {basicWage, dayExtraHours, sundayExtraHours, holidayExtraHours}
};

function getHourlyWage(wage) {
    return wage/240;
};

function calculateDayExtraHoursEarnings (hourlyWage, extraHours) {
    return 1.5 * hourlyWage * extraHours
};

function calculateSundayExtraHoursEarnings (hourlyWage, extraHours) {
    return 1.6 * hourlyWage * extraHours
};

function calculateHolidayExtraHoursEarnings (hourlyWage, extraHours) {
    return 1.75 * hourlyWage * extraHours
};

function calculateTotalEarnings () {
    const {basicWage, dayExtraHours, sundayExtraHours, holidayExtraHours} = getInputText();
    const hourlyWage = getHourlyWage(basicWage);
    const dayExtraHoursEarnings = calculateDayExtraHoursEarnings(hourlyWage, dayExtraHours);
    const sundayExtraHoursEarnings = calculateSundayExtraHoursEarnings(hourlyWage, sundayExtraHours);
    const holidayExtraHoursEarnings =  calculateHolidayExtraHoursEarnings(hourlyWage, holidayExtraHours);

    const totalEarnings = basicWage + dayExtraHoursEarnings + sundayExtraHoursEarnings + holidayExtraHoursEarnings

    const message = `Tu salario por hora es $${hourlyWage}. 
    
    Tus horas extras trabajadas fueron ${dayExtraHours} y ganaste $${dayExtraHoursEarnings}.
    Tus horas dominicales trabajadas fueron ${sundayExtraHours} y ganaste $${sundayExtraHoursEarnings}.
    Tus horas festivas trabajadas fueron ${holidayExtraHours} y ganaste $${holidayExtraHoursEarnings}.
    
    Tu salario total es $${totalEarnings}.`

    displayResults("result-parragraph", message)


};