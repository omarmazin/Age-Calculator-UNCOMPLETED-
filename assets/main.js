// Inputs
var iYears = document.querySelector('.year') 
var iMonths = document.querySelector('.month')
var iDays = document.querySelector('.day')

// Show 
var years = document.querySelector('.years') 
var months = document.querySelector('.months')
var days = document.querySelector('.days')
var currentDate = new Date()



function start(){

    
    if(iYears.value < currentDate.getFullYear()){
        // Good !
    }
    else{
        alert('Please enter a currect year !')
        document.querySelector('.year').classList.add('error') 
    }
    if(iMonths.value >= 1 && iMonths.value <= 12){
        // Good !
    }
    else{
        alert('Please enter a currect month !')
        document.querySelector('.month').classList.add('error') 
    }
    if(iDays.value >= 1 && iDays.value <= 31){
        // Good !
    }
    else{
        alert('Please enter a currect day !')
        document.querySelector('.day').classList.add('error') 
    }
    const birthDate = new Date();
    const ageInYears = iYears.value - birthDate.getFullYear();
    years.innerHTML = ageInYears
    // const ageInDays = iYears.value / (1000 * 3600 * 24); /
    // days.innerHTML = ageInDays
}
// UNCOMPLETED PROJECT