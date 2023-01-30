let Celsius = 85;
let Fahrenheit = 90;

//Convert Celsius to Kelvin
function converToKelvin(celsiusValue,fahrenheitValue){
    let tempCelsius = celsiusValue + 273.15;
    return tempCelsius;
    let tempFahrenheit = (5/9) * (fahrenheitValue + 459.67);
    return tempFahrenheit;
}
converToKelvin(Celsius,Fahrenheit);
console.log(`The convertion of ${Celsius} Celsius to Kelvin is`,converToKelvin.tempCelsius);
console.log(`The convertion of ${Fahrenheit} Fahrenheit to Kelvin is`,converToKelvin.tempFahrenheit);