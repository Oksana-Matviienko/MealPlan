/*Створюємо наш додаток, використовуючи нові знання.
Спочатку все по старій схемі - створюємо папку проекту, а потім в цій папді робимо папку backend, встановлюємо 
npm init -y
npm i express nodemon
все це має бути в папці backend, наразі ми працюємо з нею
В файлі package.json додаємо "start": "node server.js"
Далі встановлюємо залежності 
npm i cors
npm i dotenv
npm i mongoose
*/
const express = require("express")
const app = express()
const routes= require("./MealRoutes")
const cors = require("cors")

//імпортуємо mongoose, для роботи з базаою данних. Далі пишемо код, який вказано в документації
const mongoose = require('mongoose')
require('dotenv').config(); // щоб з'єднати наш документ з базою данних
mongoose.set('strictQuery', false)


//Переходимо на сайт https://www.mongodb.com , реєструємось на безкоштовну версію
//потім натискаємо на створити базу данних
// обираємо безкоштовну версію і отримуємо доступ до кластеру.
// реєструємо username та password, обов'язково їх зберігаємо собі в записані
// переходимо в database acess і бачимо нашу реєстрацію
// натискаємо на edit
// у вкладці Built-in-role обираємо Atlas-admin та натискаємо update user
// додаємо свій IP, якщо він не додався автоматично. Також можна додати доступ для інші IP адреси
// в папці backend створюємо файл .env
// переходимо в Database, натискаємо на connect => connect your application => копіюємо рядок з кодом доступу і вставляємо його в наш 
// файл .env в наступному вигляді MONGODB_LINK = (скопійований код) УВАГА! ВСтавляємо там свій пароль, та додаємо назву колекції (все вже зроблено в файлі)
// прописуємо код після const PORT (нижче)
// створємо файл MealRoutes.js, де прописуватимемо всю маршрутизацію для нашого застосунку
// імпортуємо наш router і прописуємо перед app.listen команду app.use(routes)
// Далі нам потрібно створити модель, для цього створюємо файл MealModel.js і прописуємо там свій код, таким чином модель через схему матиме доступ до бази данних
// Тепер потрібно створити контроллер - MealController.js і з'єднуємо з моделлю, яку ми щойно створили
//!!!УВАГА!!! В файлі MealController.js міститься все необхідне, для виведення результатів і всі коментарі прописані там !!! 
// !!!! МИ ПРОПИСУЄМО В MEALROUTES.JS методи для запитів get та post, а потім прописуємо логіку для них в файлі MEALCONTROLLER.JS 
//потім перевіряємо як вони працюють node server.js в терміналі => postman => post => Cotent-Type => application/json => 
// raw => додаємо { "title": "friet salmon"} => повинно видати результат без помилок 
// Перевіряємо на https://cloud.mongodb.com => database => cluster => collections і побачимо нашу базу данних
// ДАЛІ прописуємо delete та edit запити в файлі MealController.js
// Все перевіряємо через postman  
// Далі створюємо frontend для нашого застосунку. Заходимо в термінал vscode, вводимо сd.., 
//щоб повернутися в загальну папку та командою npx create-react-app frontend створюємо нову папку з frontendом
//Далі всі інструкції будуть в файлі App.js

const PORT = 4000 || process.env.port // будемо з'єднуватися або з портом 4000, або з mangodb (базою данних)

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)  // з`єднуємось з базою данних 
.then(()=> console.log("I AM CONNECTED TO MANGODB")) // перевіряємо з'єднання
.catch((err)=> console.log(err)) // якщо нема з'єднання, ловимо помилку
//перевіряємо в терміналі, чи є 2 консольлоги з написами  I am listenning to port 4000 та I AM CONNECTED TO MANGODB

app.use(routes) // вказуємо шлях

app.listen(PORT, ()=>{
    console.log(`I am listenning to port ${PORT}`);
    
})







//mongoDB
//7564211
//qBHnhEfsdY0vXOtl

/*
https://developer.mozilla.org/ru/docs/Learn/Server-side/Express_Nodejs/routes 
https://developer.mozilla.org/ru/docs/Learn/Server-side/Express_Nodejs/mongoose

 */