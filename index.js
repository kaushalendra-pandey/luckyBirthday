const birthDateBox = document.getElementById("birth-date")
const luckyNumberBox = document.getElementById("lucky-number")
const resultBox = document.getElementById("show-result")

const getSumOfDigits = (num) => {

    let curSum = 0
    for(let i in num) {
        curSum += parseInt(num[i])
    }
    return curSum
}

const errorAlert = (msg) => {
    console.log(msg)
    para = document.createElement("p")
    para.innerHTML = msg
    para.className = "error-alert"
    resultBox.appendChild(para)
}

const successAlert = (msg) => {
    console.log(msg)
    para = document.createElement("p")
    para.innerHTML = msg
    para.className = "success-alert"
    resultBox.appendChild(para)
}

const findIfLuckOrNot = () => {
    resultBox.innerHTML = ""
    const birthdayString = birthDateBox.value
    let [dayStr,monthStr,yearStr] = birthdayString.split("/")
    day = parseInt(dayStr) 
    month = parseInt(monthStr)
    year = parseInt(yearStr)
    
    if(!day || !month || !year || day>31 || month>12 || year<1930 || year>2025) {
        // show alert here..
        console.log("1")
       errorAlert("Invalid birthdate !!")
    }else{
        console.log("2")
        let luckyNumber = luckyNumberBox.value
        if(!parseInt(luckyNumber)){
            console.log("3")
            errorAlert("Invalid lucky number!!")
        }else {
            console.log("4")
            // calculate if birthday luck or not!
            const sumOfBirthday =  getSumOfDigits(dayStr) + getSumOfDigits(monthStr) + getSumOfDigits(yearStr)
            if(sumOfBirthday % luckyNumber === 0) {
                console.log("5")
               successAlert("Whoa!! Its lucky a Birthday") 
            }else {
                console.log("6")
                // show not a lucky number
                errorAlert("OOPS!! Not a lucky birthday")
            }
        }
    }
}