const numBtn = document.getElementById("num-btn")

numBtn.addEventListener("click", function() {
    let numInput = document.getElementById("num-input").value

    if (numInput) {
        let input = Number(numInput)
        numInput = ""
        length(input)
        volume(input)
        mass(input)
    }
})

function length(input) {
    let mToFt = (input * 3.281).toFixed(3)
    let ftToM = (input / 3.281).toFixed(3)
    const lengthResult = document.getElementById("length-output")
    lengthResult.innerHTML = `${input} meters = ${mToFt} feet | ${input} feet = ${ftToM} meters`
}

function volume(input) {
    let lToGal = (input * 0.264).toFixed(3)
    let galToL = (input / 0.264).toFixed(3)
    const volumeResult = document.getElementById("volume-output")
    volumeResult.innerHTML = `${input} liters = ${lToGal} gallons | ${input} gallons = ${galToL} liters`
}

function mass(input) {
    let kgToLbs = (input * 2.204).toFixed(3)
    let lbsToKg = (input / 2.204).toFixed(3)
    const massResult = document.getElementById("mass-output")
    massResult.innerHTML = `${input} kilograms = ${kgToLbs} pounds | ${input} pounds = ${lbsToKg} kilograms`
}