const foodModel = require('./models');

const getFoods = async (req, res) => {
const foods = await foodModel.getFoods();
res.json(foods);
};

const getFoodById = async (req, res) => {
const foodId = req.params.foodId;
const food = await foodModel.getFoodById(foodId);
if (food) {
res.json(food);
} else {
res.status(404).json({ message: "Food not found" });
}
};

const addFood = async (req, res) => {
const newFood = req.body;
const addedFood = await foodModel.addFood(newFood);
res.json(addedFood);
};

const updateFood = async (req, res) => {
const foodId = req.params.foodId;
const updatedFood = req.body;
const result = await foodModel.updateFood(foodId, updatedFood);
if (result) {
res.json(result);
} else {
res.status(404).json({ message: "Food not found" });
}
};

const deleteFood = async (req, res) => {
const foodId = req.params.foodId;
const result = await foodModel.deleteFood(foodId);
if (result) {
res.json(result);
} else {
res.status(404).json({ message: "Food not found" });
}
};

module.exports = { getFoods, getFoodById, addFood, updateFood, deleteFood };