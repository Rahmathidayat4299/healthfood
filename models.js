const { v4: uuidv4 } = require("uuid");

let healthyFoods = [
  {
    id: uuidv4(),
    name: "Apple",
    calories: 52,
    protein: 0.3,
    fat: 0.2,
    carbohydrate: 14,
    image: "https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
  },
  {
    id: uuidv4(),
    name: "Banana",
    calories: 89,
    protein: 1.1,
    fat: 0.3,
    carbohydrate: 23,
    image: "https://www.fao.org/uploads/pics/banana_banner.jpg",
  },
  {
    id: uuidv4(),
    name: "Broccoli",
    calories: 34,
    protein: 2.8,
    fat: 0.4,
    carbohydrate: 6,
    image:
      "https://www.yummytoddlerfood.com/wp-content/uploads/2021/09/steamed-broccoli-on-white-plate.jpg",
  },
  {
    id: uuidv4(),
    name: "Carrots",
    calories: 41,
    protein: 0.9,
    fat: 0.2,
    carbohydrate: 10,
    image:
      "https://www.healthshots.com/wp-content/uploads/2020/11/benefits-of-carrots-370x207.jpg",
  },
  {
    id: uuidv4(),
    name: "Chicken Breast",
    calories: 165,
    protein: 31,
    fat: 3.6,
    carbohydrate: 0,
    image:
      "https://media-cdn2.greatbritishchefs.com/media/ebgm0sq3/gbc_chicken-003.whqc_1423x711q90.jpg",
  },
  {
    id: uuidv4(),
    name: "Eggs",
    calories: 78,
    protein: 6.3,
    fat: 5.3,
    carbohydrate: 0.6,
    image:
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/03/How-to-Boil-Eggs-main-1-2.jpg",
  },
  {
    id: uuidv4(),
    name: "Salmon",
    calories: 206,
    protein: 22,
    fat: 13,
    carbohydrate: 0,
    image:
      "https://cdn.meatigo.com/production/product/92_2982022_%20Salmon%20Sushi-Sashimi%20Block.webp",
  },
  {
    id: uuidv4(),
    name: "Spinach",
    calories: 23,
    protein: 2.9,
    fat: 0.4,
    carbohydrate: 3.6,
    image:
      "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/05/spinach-1296x728-header.jpg?w=1155&h=1528",
  },
];

const getFoods = () => {
  return healthyFoods;
};

const getFoodById = (foodId) => {
  const food = healthyFoods.find((item) => item.id === foodId);
  if (food) {
    return food;
  } else {
    return null;
  }
};

const addFood = (newFood) => {
  const foodWithId = {
    id: uuidv4(),
    ...newFood,
  };
  healthyFoods.push(foodWithId);
  return foodWithId;
};

const updateFood = (foodId, updatedFood) => {
  let updatedFoodIndex = -1;
  const food = healthyFoods.find((item, index) => {
    if (item.id === foodId) {
      updatedFoodIndex = index;
      return true;
    }
    return false;
  });

  if (food) {
    const newFood = { ...food, ...updatedFood };
    healthyFoods[updatedFoodIndex] = newFood;
    return newFood;
  } else {
    return null;
  }
};

const deleteFood = (foodId) => {
  const foodIndex = healthyFoods.findIndex((item) => item.id === foodId);
  if (foodIndex !== -1) {
    const deletedFood = healthyFoods.splice(foodIndex, 1);
    return deletedFood[0];
  } else {
    return null;
  }
};

module.exports = { getFoods, getFoodById, addFood, updateFood, deleteFood };
