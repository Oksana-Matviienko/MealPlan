const MealModel = require("./MealModel") // отримуємо доступ до файлу з моделлю
//GET
module.exports.getMeal = async (req,res) => { // експортуємо отримані данні по запиту в файл server.js, враховуючи асинхронність цієї операції
const myMeal = await MealModel.find() // зберігаємо отримані данні в змінну, враховуючи асинхронність
res.send(myMeal) // відображаємо отримані данні
}
//POST
module.exports.saveMeals = async (req,res)=>{  // використовуємо для зміни в назвах нашого меню і буде використовуватися для post запиту
    const { title } = req.body  // в даному випадку title використовується в MealModel 
    MealModel.create({title})  //ми створюватимемо новий title
    .then((data)=>{console.log("Meal added") // тоді, якщо отримали результат, то покажи напис для перевірки
    res.send(data)   // відображаємо результат
}) 
     
}
//DELETE
module.exports.deleteMeal = async (req,res)=>{
    const {_id} = req.body  // перед id стоїть нижнє підкреслення, бо так видає результат id в постман та mongodb
    MealModel.findByIdAndDelete(_id)
    .then(()=> res.send(`Deleted a meal`))
}
//EDIT
module.exports.editMeal = async (req,res)=>{
    const {_id, title} = req.body
    MealModel.findByIdAndUpdate(_id, {title})
    .then(()=> {res.send("Edited a meal")})
}