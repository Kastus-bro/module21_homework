const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let randomNumber = Math.floor(Math.random(min=1, max=100)*(max-min+1)+min)
        if(randomNumber%2 === 0){
            resolve(randomNumber)
        }
        else {
            reject(randomNumber)
        }
    }, 3000)
})

myPromise
.then((number) => {
    console.log('Завершено успешно. Сгенерированное число — ' + number)
})
.catch((number) => {
    console.log('Завершено c ошибкой. Сгенерированное число — ' + number)
})
.finally(() => {
    console.log('Код выполнился');
});