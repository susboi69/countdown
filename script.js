//Declaring variables for stop watch

let minute = 0
let second = 0
let count = 0
let interval = null

//Logic for when a button is pressed
let buttonState = (button, boolean) => button.disabled = boolean
const startbtn = document.querySelector("#start")
turnedOn = false

//Functions for stopwatch

function start(){
    turnedOn = true
    buttonState (startbtn, true)
    interval = setInterval (stopwatch, 10)
    
}

function stopwatch(){

    if (turnedOn === true){
        count ++
    }
   
    let minuteStr = minute
    let secondStr = second
    let countStr = count

   
        if (count > 99) {
            count = 0
            countStr = count
            second ++
        }
        if (count < 10){
            countStr = "0" + countStr
        }
        if (second < 10){
            secondStr = "0" + second
        } 
        if (second > 59){
            second = 0
            minute ++
            secondStr = "0" + secondStr
        } 
        if (minute < 10){
            minuteStr = "0" + minuteStr
        }
        document.getElementById ("minute").textContent = minuteStr
        document.getElementById ("second").textContent = secondStr
        document.getElementById ("count").textContent = countStr
        
    
         
}

function stop(){
    clearInterval(interval)
    buttonState (startbtn, false)
}

function reset(){
    stop()
    minute = 0
    second = 0
    count = 0
    document.getElementById ("minute").textContent = "00"
    document.getElementById ("second").textContent = "00"
    document.getElementById ("count").textContent = "00"
    buttonState (startbtn, false)
}

//Declaring variables for timer

document.querySelector("#parent1").style.display = "none"
const hourInput =  document.querySelector("#hour")
const minuteInput = document.querySelector("#minute2")
const secondInput = document.querySelector("#second2")
let timerSecint = null
let timerMinint = null
let timerHourint = null
let timerOn = false
let Interval2 = null
const timerBtnstart = document.querySelector("#start2")
const timerBtnstop =  document.querySelector("#stop2")
const timerBtnreset =  document.querySelector("#reset2")
const errormsg = document.querySelector("#error")
const finish = document.querySelector("#finish")
const inputClass = document.querySelectorAll(".Userinput")
const dropdownbtn = document.querySelector("#dropdownbtn")
const dropdowncontent = document.querySelector("#dropdowncontent")
const dropdowncontentparent = document.querySelector("#dropdowncontentparent")
finish.style.display = "none"
//Timer placeholder
hourInput.value = "00"
minuteInput.value = "00"
secondInput.value = "00"
//Setting functions for the timer
const start2 = () => {
    if (hourInput.value > 999) {
        finish.style.display = "none"
        return errormsg.textContent = "Put a value for hour within 999"
    }
    if (minuteInput.value > 59) {
        finish.style.display = "none"
        return errormsg.textContent = "Put a value for minute within 59"
        }
    if (secondInput.value > 59) {
        finish.style.display = "none"
        return errormsg.textContent = "Put a value for second within 59"
    }
    if(hourInput.value == 0 && minuteInput.value == 0 && secondInput.value == 0){
        finish.style.display = "none"
        return errormsg.textContent = "Please input atleast 1 number"
    }
    hourInput.value = hourInput.value.padStart(2,"0")
    minuteInput.value = minuteInput.value.padStart(2,"0")
    secondInput.value = secondInput.value.padStart(2,"0")
    timerOn = true
    errormsg.textContent = null
    finish.style.display = "none"
    inputClass.forEach(input => input.disabled = true)
    timerBtnstart.disabled = true
    Interval2 = setInterval (timer,1000)
}

const stop2 = () => {
    timerOn = false 
    inputClass.forEach(input => input.disabled = false)
    timerBtnstart.disabled = false
    clearInterval(Interval2)}

const timer = () => {
   if (timerOn == true){
   secondInput.value --
   secondInput.value = secondInput.value.padStart(2,"0")
   timerSecint = parseInt(secondInput.value)
   }
   
   if (timerSecint < 0){
       secondInput.value = 59
       minuteInput.value --
       minuteInput.value = minuteInput.value.padStart(2,"0" )
   }
   if (minuteInput.value < 0 ){
       minuteInput.value = 59
       hourInput.value -- 
       hourInput.value = hourInput.value.padStart(2,"0")
   }
   if (hourInput.value < 0){
    reset2()
    finish.style.display = "inline"
    setTimeout(finishmsg,6000)
   }
 }

const reset2 = () => {
   stop2()
   hourInput.value = "00"
   minuteInput.value = "00"
   secondInput.value = "00"
   finish.style.display = "none"
   errormsg.textContent = null
   timerBtnstart.disabled = false
   hourInput.style.width = "2ch"
   inputClass.forEach(input => input.disabled = false)
 }

 const finishmsg = () => {
    finish.style.display = "none"
 }

 const dropdown = () => {
 dropdowncontentparent.focus()
 }
//Event Listeners for timer
hourInput.addEventListener("input" , () => {
    let numCount = hourInput.value.length
    if(numCount>2) {
        hourInput.style.width = "3ch"
    }
    else {
        hourInput.style.width = "2ch"
    }
})

timerBtnstart.addEventListener("click",start2)
timerBtnstop.addEventListener("click",stop2)
timerBtnreset.addEventListener("click",reset2)
dropdownbtn.addEventListener("click", dropdown)



    
   

 

 