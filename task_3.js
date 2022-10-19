let userName = localStorage.getItem('name')
let currentDate = localStorage.getItem('date')

if(userName == undefined) {
    userName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя.')   
    localStorage.setItem('name',userName.toString())
}
else {
    alert(`Добрый день, ${userName}! Давно не виделись. В последний раз Вы были у нас ${currentDate}`)
}

currentDate = new Date()
localStorage.setItem('date',currentDate.toLocaleString())
console.log(userName)
console.log(currentDate)