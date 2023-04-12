const foodModel = require('./models');

const getFoods = (req, res) => {
  const foods = foodModel.getFoods();
  res.json(foods);
};

const getFoodById = (req, res) => {
  const foodId = req.params.foodId;
  const food = foodModel.getFoodById(foodId);
  if (food) {
    res.json(food);
  } else {
    res.status(404).json({ message: "Food not found" });
  }
};

const addFood = (req, res) => {
  const newFood = req.body;
  const addedFood = foodModel.addFood(newFood);
  res.json(addedFood);
};

const updateFood = (req, res) => {
  const foodId = req.params.foodId;
  const updatedFood = req.body;
  const result = foodModel.updateFood(foodId, updatedFood);
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({ message: "Food not found" });
  }
};

const deleteFood = (req, res) => {
  const foodId = req.params.foodId;
  const result = foodModel.deleteFood(foodId);
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({ message: "Food not found" });
  }
};

module.exports = { getFoods, getFoodById, addFood, updateFood, deleteFood };
