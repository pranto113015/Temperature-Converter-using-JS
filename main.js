//all selector
let celciusinput = document.querySelector('#celcius >input')
let Fahrenheitinput = document.querySelector('#Fahrenheit >input')
let Kelvininput = document.querySelector('#Kelvin >input')
let btn = document.querySelector('.button button')


function roundNumber(number) {
    return Math.round(number * 100) / 100
}


//celcius to Fahrenheit,kelvin
celciusinput.addEventListener('input', function () {
    let cTemp = parseFloat(celciusinput.value)
    let fTemp = (cTemp * (9 / 5)) + 32
    let ktemp = cTemp + 273.15

    Fahrenheitinput.value = roundNumber(fTemp)
    Kelvininput.value = roundNumber(ktemp)
})



//Fahrenheit to celcius,kelvin
Fahrenheitinput.addEventListener('input', function () {
    let fTemp = parseFloat(Fahrenheitinput.value)
    let cTemp = (fTemp - 32) * (5 / 9)
    let ktemp = (fTemp - 32) * (5 / 9) + 273.15

    celciusinput.value = roundNumber(cTemp)
    Kelvininput.value = roundNumber(ktemp)
})



//kelvin to celcius,Fahrenheit
Kelvininput.addEventListener('input', function () {
    let kTemp = parseFloat(Kelvininput.value)
    let cTemp = (kTemp - 273.15)
    let fTemp = (kTemp - 273.15) * (9 / 5) + 32

    celciusinput.value = roundNumber(cTemp)
    Fahrenheitinput.value = roundNumber(fTemp)
})



//All Clear Section
btn.addEventListener('click', ()=> {
    celciusinput.value = ""
    Fahrenheitinput.value = ""
    Kelvininput.value = ""
})