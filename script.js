

// string - тип данных,строчный
// typeof - проверить тип данных
// \ ставится после кавычек если не заканчивается переменная
// "" и '' не поддерживают разрыв строки, необходимо вводить переменную разрыва строки \n
// `` поддерживают разрыв строки и поддерживают цитирование при помощи ${} другой переменной

// const str1 = 'Cat'
// const str2 = "Vin"
// const str3 = `pap ${str1}`   

// console.log(str1);
// console.log(str2);
// console.log(str3);

// number тип данных, числовой. Этот тип данных вмещает в себя только числа от -(2**53-1) до +(2**53-1)
// + - / ** (возведение в степень)
// const nam = 3+2
// const nam1 = 3**2
// alert (nam)
// alert (nam1)
// console.log (typeof '5') - смотрим тип данных в консоле


// NaN - not a number - не число
// const NaN = 2 * "a" - в консоле покажет NaN
// const Nan = 17 / 0
// console.log (Nan) 


// bigint - большое целое число
// const big = 12137873872n
// console.log(big);


// boolean - тип данных выводит правда или ложь
// == === >= >== <= <==
// const bool = 'a'>'2'
// console.log(bool);


// // null - тип данных, то, что пусто
// let emty = null
// console.log(emty, typeof emty);

// // undefined - тип данных, не найденное. Переменная объявлена, но в нее ничего не поместили
// let box
// console.log(box, typeof box);


// // symbol - нечто уникальное
//    const uniq = Symbol('id')
//    const uniq1 = Symbol('id')
//    console.log(uniq==uniq1);

// object - тип данных, объект. Все в js объекты. Набор пар ключ значение
// const obj = {
//     name: "Саша",
//     old: 19,
//     isHappy: true,
// }

// obj.job='Google'
// console.log(obj)


// console.log(obj.name)
// console.log(obj['name'])

// тип данных object не только набор пар, но и есть отдельный вид объекта - массив array

// const array = ["Ann",34, false]
// array[3] = "f"
// console.log(array)
// console.log(array [0]) - ключ это цифра, тут мы выводим значение ключа


// console.log( 5 == '6')
// console.log( 5 === '5')
// console.log( 'abc' > 15)
// console.log( null == 0)

// const go = prompt('Куда мы побежим', 'домой')
// if (go) {
//     alert ('побежали')} 
//     else { alert ('стоим')}

// const UserName = prompt('Who you are?', 'unonim')
// // UserName = null
// if (UserName === 'admin') {
//     alert ('Hi boss')
// } else if (UserName === 'unonim' || !UserName) {
//     alert ("I don't your")
// } 
// else ( alert (`Hi ${UserName}`))

// const counts = prompt('How old are you?', 10)
// let i = 10
// // while (i<=counts) {console.log (i++)}
// // do {
// //     console.log (i++)
// // } while (i<=counts)

// // console.log (i)


// let arr = []

// for (let i = 1; i <= 50; ++i) {
//     arr.push (i)
// }

// // console.log (arr)

// // arr [3] = 'ndjnsjndjsnd'

// // console.log (arr)

// const NewArr = []
// for (elem of arr) {
//     const marker = elem % 3
//     if (!marker) {
//         NewArr.push(elem)
//     }
// }

// console.log (NewArr)


// const obj = {
//           void: "Sasha",
//           Age: 15,
//           city: "Moscow"
// }

// for (key in obj) {
//     console.log (key, obj[key])
// }


const getRandomNumInRange = (min, max) => {
    const RandomNum = (Math.random() * ((max - min) + min)).toFixed()
    return RandomNum

}

const getTask = () => {
    // const RandomNum1 = getRandomNumInRange (0, 100)
    // const RandomNum2 = getRandomNumInRange (0, 100)

    // let symbol 
    // if (Math.random() > 0.5) {
    //     symbol = '+'
    // } else { 
    //     symbol = '-' }

    const symbol = (Math.random() > 0.5) ? '+' : '-'
    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task
}

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}


// `` - шаблонные строки; чтобы вложить в шаблонные строки переменную
// надо поставить ${}


const gameElements = document.getElementById("game").children

const title = gameElements[0]
const userTask = gameElements[1]
const userAnsver = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null

}

const startGameFunc = () => {
    if (!gameState.taskInProcess) {
        title.innerText = 'Игра началась!'
        userAnsver.Value = null
        // генерируем задачу и ответ
        // показываю задачу пользователю
        userTask.innerText = getTask()
        userAnsver.hidden = false
        btnGame.innerText = 'Проверить'
        toggleGameState()
        // меняю кнопку 
        // меняю состояние

    } else {
        // сравнить ответ пользователя с правильным 
        const isRight = gameState.rightAnswer == userAnsver.Value
        // вывести результат 
        userTask.innerText = userTask.innerText + '=' + gameState.rightAnswer
        // вывести поздравления
        title.innerText = (isRight) ? 'вы победили)' : 'Вы проиграли('
        // поменять кнопку и состояние
        btnGame.innerText = 'Начать заново'
        toggleGameState()
    }
}

btnGame.addEventListener("click", startGameFunc)
userAnsver.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
        startGameFunc()
    } else if (e.key === "Escape") {
        userAnsver.blur()
    }
}
)

// const chooseState = {
//     coumtElements: 0
// }

// const changeCount = (value) => {
//     chooseState.coumtElements += value
//     counterE.innerText = chooseState.coumtElements
// }

const chooseState = {
    coumtElements: 0,
    setCountValue(value) {
        this.coumtElements += value
        counterE.innerText = this.coumtElements
    }
}


const choosedE = document.querySelectorAll(".choosed_block-container > div")
const counterE = document.querySelector(".chooseEl span")


const EventFunc = (e) => {
    //  e.target.className = "choosed_element"
    // choosedE[i].className = "choosed_element"
    if (e.target.className === "") {
        e.target.className = "choosed_element"
        chooseState.setCountValue(+1)
    } else {
        e.target.className = ""
        chooseState.setCountValue(-1)
    }
}

for (let i = 0; i < choosedE.length; i++) {
    choosedE[i].addEventListener("click", EventFunc)
}


const testValue = "string"

function test(str) {

    return str + null

}

console.log(test(testValue))

// choosedE[1].removeEventListener ("click", EventFunc) - данная строчка кода позволяет при нажатии 
// на кнопку не иметь возможности нажать ее


// Занятие 6
const timeisover = () => {
    alert('Lol')
}

// // setTimeout (timeisover, 2000)



// const alarm = setInterval( () => {
//     let wontToSleap = confirm('Хотите ли вы спать')
//     if (wontToSleap) {
//         console.log('tic')
//     } else {
//         clearInterval(alarm)
//     }
// }, 3000)

// Пример ассинхронности
// console.log(1)
// setTimeout ( () => {
//     console.log(2)},
//     0)
// console.log(3)

const postBlock = document.querySelector(".post_block-contener")
const showPostBTN = document.querySelector(".post_block button")



function addPost(title, body) {
    const postTitle = document.createElement("h3")
    const postBody = document.createElement("span")
    const postItem = document.createElement("p")

    postTitle.innerText = title
    postBody.innerText = body

    postItem.append(postTitle, postBody)
    postBlock.append(postItem)

}

function getPosts () {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        for (el of data) {
            addPost(el.title, el.body)
        }
    })

    .catch(err => console.log(err.message))
}

// showPostBTN.onclick = () => {getPosts ()}
getPosts ()

// function createPost(title, body, userId) {
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: 'POST',
//         body: JSON.stringify ({
//             title: title,
//             body: body,
//             userId: userId,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then ( res => {
//             console.log(res)
//         })
//         .catch(err => console.log(err.message))
// }

// createPost('title', 'body', 15)

//  console.log (document)
// показывает свойства и методы. То, чем мы можем воспользоваться
//  console.dir (document)

// const choosedE = document.querySelectorAll("#game p")
// console.log (choosedE[0])

// querySelector находит первый класс, так как код читается линейно. если мы хотим
// вывести все классы, то надо постаить querySelectorAll
// "#game p" - если мы хотим обратиться ни ко всему классу, а к айди и параграфу

// FUNCTION
// методы объявления функции
// declaration


// function scream(a, b) {
//     // const array = a * b
//     // return array
//     return a * b
// }


// // expression
// const wowScream = function () {
//     alert('aaaaaaaa')
// }

// // wowScream()

// // arrow

// const arrow = () => {
//     alert('arrow s in the sky')
// }

// // arrow()



// for (let i = 10; i < 35; i += 5) {

//     console.log(i);

// }


const getRandomAnswer = (question) => {

    return (Math.random() > 0.5) ? "YES!" : "No("

}

console.log("Всё будет хорошо?")

// alert ("Hello")
// confirm ("Вы учите JS?") - выводит да или нет
// prompt ("Как вы учите Java script?","Усердно")

// console.log(span)
// console.log(span.innerText) 

// const pap = document.getElementById('pap')
// const islove = document.getElementById('islove')
// const string = document.getElementById('string')


// string.innerHTML = "fth"





// const text_pap = prompt ("Как вы учите Java script?","Усердно")
// const isloves = confirm ("Вы учите JS?")

// console.log(isloves)
// pap.innerText = text_pap
// islove.innerText = isloves 

