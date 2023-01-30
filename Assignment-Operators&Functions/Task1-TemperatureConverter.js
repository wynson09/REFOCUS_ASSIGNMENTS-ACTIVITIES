let Celsius = 85;
let Fahrenheit = 90;

//Convert Celsius to Kelvin
function converCelsiustToKelvin(celsiusValue){
    let tempCelsius = celsiusValue + 273.15;
    return tempCelsius;
}
function convertFahrenToKelvin(fahrenheitValue){
    let tempFahrenheit = (5/9) * (fahrenheitValue + 459.67);
    return tempFahrenheit;
}
console.log(`The convertion of ${Celsius} Celsius to Kelvin is`,converCelsiustToKelvin(Celsius));
console.log(`The convertion of ${Fahrenheit} Fahrenheit to Kelvin is`,convertFahrenToKelvin(Fahrenheit));