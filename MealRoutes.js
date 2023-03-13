const { Router } = require('express')
const { getMeal, saveMeals, deleteMeal, editMeal} = require('./MealController') // імпортуємо методи та їх результати в цей файл
const router = Router()

router.get("/", getMeal) // надаємо інформацію про кожний метод до файлу MealController.js
router.post("/save", saveMeals) // тут ми називаємо методи getMeal та saveMeals, щоб використати їх в нашому MealController.js
router.post("/delete", deleteMeal) 
router.post("/edit", editMeal) 

module.exports = router