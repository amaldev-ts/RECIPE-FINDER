// --- Categorized and Sorted Ingredients ---
const categorizedIngredients = {
    "Fruits & Vegetables": ["Apple", "Banana", "Cabbage", "Capsicum", "Carrot", "Coriander", "Corn", "Garlic", "Ginger", "Green Chili", "Lemon", "Mint", "Mushroom", "Onion", "Orange", "Peas", "Pineapple", "Potato", "Spinach", "Strawberry", "Tomato"].sort(),
    "Grains, Flour & Legumes": ["Beans", "Lentils", "Oats", "Pasta", "Rice", "Wheat Flour"].sort(),
    "Spices & Powders": ["Black Pepper", "Chili Powder", "Cumin", "Salt", "Sugar", "Turmeric"].sort(),
    "Dairy, Meat & Eggs": ["Beef", "Butter", "Cheese", "Chicken", "Eggs", "Fish", "Milk", "Yogurt"].sort(),
    "Pantry Staples & More": ["Bread", "Chocolate", "Coconut", "Dry Fruits", "Honey", "Mustard Seeds", "Oil", "Peanut", "Vanilla"].sort()
};

// Recipes with detailed steps
const recipes = [
    { name: "Fried Rice", items: ["Rice", "Onion", "Carrot", "Peas", "Oil", "Salt"], steps: `1. Cook rice until just done and cool completely.<br>2. Heat oil in a wok, stir-fry chopped onion, carrot, and peas for 3-4 minutes.<br>3. Add cooled rice, salt, and mix well for another 2 minutes.<br>4. Serve hot.` },
    { name: "Chicken Curry", items: ["Chicken", "Onion", "Tomato", "Garlic", "Ginger", "Oil", "Salt", "Turmeric"], steps: `1. Heat oil and sauté chopped onions until golden.<br>2. Add garlic-ginger paste and stir for a minute.<br>3. Add chopped tomatoes, turmeric, and salt; cook until soft.<br>4. Add chicken, 1 cup water, cover and cook for 20 minutes until tender.` },
    { name: "Paneer Butter Masala", items: ["Cheese", "Tomato", "Onion", "Butter", "Salt", "Chili Powder"], steps: `1. Sauté chopped onions in butter until soft.<br>2. Add tomatoes, chili powder, and salt, then cook until soft.<br>3. Blend the mixture into a smooth paste.<br>4. Return paste to pan, add cheese (paneer) cubes, and simmer for 5 minutes.` },
    { name: "Omelette", items: ["Eggs", "Onion", "Salt", "Oil"], steps: `1. Beat eggs with salt and finely chopped onion.<br>2. Heat oil in a pan.<br>3. Pour egg mixture and cook on low heat for 2-3 minutes, then flip and cook for 1 more minute.` },
    { name: "Vegetable Soup", items: ["Carrot", "Peas", "Potato", "Onion", "Salt", "Black Pepper"], steps: `1. Boil chopped carrot, potato, and onion in 3 cups of water with salt until soft.<br>2. Lightly mash or blend for desired consistency.<br>3. Sprinkle with black pepper and serve hot.` },
    { name: "Pasta Alfredo", items: ["Pasta", "Milk", "Butter", "Cheese", "Salt"], steps: `1. Boil pasta in salted water until al dente.<br>2. In a separate pan, melt butter, add milk and grated cheese.<br>3. Stir until creamy, then add cooked pasta and mix well.` },
    { name: "Banana Milkshake", items: ["Banana", "Milk", "Sugar"], steps: `1. Blend sliced bananas, milk, and sugar until smooth.<br>2. Serve chilled.` },
    { name: "Fruit Salad", items: ["Apple", "Banana", "Orange", "Strawberry", "Honey"], steps: `1. Chop apple, banana, and orange; slice strawberries.<br>2. Mix all fruits in a bowl and drizzle with honey.` },
    { name: "Mango Lassi", items: ["Yogurt", "Sugar", "Milk"], steps: `1. Blend yogurt, sugar, and milk until smooth.<br>2. Note: Traditionally made with mango, this version is a plain sweet lassi.<br>3. Serve chilled.` },
    { name: "Masoor Dal", items: ["Lentils", "Onion", "Tomato", "Salt", "Turmeric"], steps: `1. Boil lentils with turmeric and salt until soft.<br>2. In another pan, fry chopped onions and tomatoes.<br>3. Add the cooked lentils to the pan, mix, and simmer for 5 minutes.` },
    { name: "Grilled Fish", items: ["Fish", "Lemon", "Salt", "Black Pepper"], steps: `1. Marinate fish with lemon juice, salt, and pepper.<br>2. Grill for 5-7 minutes per side until cooked through.` },
    { name: "Potato Chips", items: ["Potato", "Salt", "Oil"], steps: `1. Slice potatoes thinly.<br>2. Fry in hot oil until golden and crisp.<br>3. Drain and sprinkle with salt.` },
    { name: "Chocolate Cake", items: ["Wheat Flour", "Sugar", "Milk", "Chocolate", "Butter"], steps: `1. Preheat oven to 180°C.<br>2. Mix flour, sugar, melted butter, melted chocolate, and milk into a batter.<br>3. Pour into a greased cake tin and bake for 30-35 minutes.` },
    { name: "Egg Fried Rice", items: ["Rice", "Eggs", "Onion", "Oil", "Salt"], steps: `1. Heat oil in a pan and scramble beaten eggs.<br>2. Add chopped onion and stir-fry.<br>3. Add cooked rice, salt, and mix everything together.` },
    { name: "Chapati", items: ["Wheat Flour", "Salt"], steps: `1. Mix flour and salt, then knead with water to form a soft dough.<br>2. Roll into thin circles.<br>3. Cook on a hot pan until puffed up.` },
    { name: "Corn Soup", items: ["Corn", "Milk", "Salt"], steps: `1. Boil corn until soft.<br>2. Blend corn with milk and a pinch of salt until smooth.<br>3. Reheat gently before serving.` },
    { name: "Cabbage Stir Fry", items: ["Cabbage", "Onion", "Oil", "Salt"], steps: `1. Heat oil and sauté sliced onions.<br>2. Add shredded cabbage and salt, then stir-fry for 5-7 minutes until tender.` },
    { name: "Mushroom Curry", items: ["Mushroom", "Onion", "Tomato", "Salt"], steps: `1. Heat oil and fry chopped onions until golden.<br>2. Add chopped tomatoes and salt, cooking until soft.<br>3. Add sliced mushrooms and cook for 5-7 minutes.` },
    { name: "Lemon Tea", items: ["Lemon", "Sugar"], steps: `1. Brew tea in hot water.<br>2. Strain and add lemon juice and sugar to taste.` },
    { name: "Sweet Oats Porridge", items: ["Oats", "Milk", "Sugar"], steps: `1. Heat milk in a saucepan, add oats, and cook for 5-7 minutes.<br>2. Stir in sugar until dissolved.` },
    { name: "Garlic Bread", items: ["Bread", "Butter", "Garlic", "Salt"], steps: `1. Mix softened butter with minced garlic and salt.<br>2. Spread on bread slices and bake at 180°C for 8-10 minutes.` },
    { name: "Cheese Omelette", items: ["Eggs", "Cheese", "Salt", "Butter"], steps: `1. Beat eggs with salt.<br>2. Pour into a buttered pan, and when almost set, sprinkle with cheese and fold.` },
    { name: "Honey Lemon Water", items: ["Honey", "Lemon"], steps: `1. Mix honey and lemon juice in a cup of warm water.` },
    { name: "Coconut Rice", items: ["Rice", "Coconut", "Salt"], steps: `1. Mix grated coconut and a pinch of salt with freshly cooked rice.` },
    { name: "Peanut Butter Sandwich", items: ["Bread", "Peanut"], steps: `1. Spread peanut butter (made from ground peanuts) on a slice of bread.` },
        { name: "Vanilla Pudding", items: ["Milk", "Sugar", "Vanilla"], steps: `1. Heat milk with sugar until dissolved.<br>2. Stir in vanilla extract and thicken with cornstarch if desired.<br>3. Chill before serving.` },
        { name: "Mint Chutney", items: ["Mint", "Coriander", "Green Chili", "Salt"], steps: `1. Blend mint leaves, coriander, green chili, and salt into a smooth paste.<br>2. Serve as a dip or side.` },
        { name: "Stuffed Capsicum", items: ["Capsicum", "Rice", "Onion", "Tomato", "Cheese"], steps: `1. Cook rice and mix with sautéed onions and tomatoes.<br>2. Stuff the mixture into halved capsicums.<br>3. Top with cheese and bake at 180°C for 20 minutes.` }
];

// --- Populate ingredient checkboxes by category ---
const ingredientListDiv = document.getElementById("ingredient-list");

for (const category in categorizedIngredients) {
    // Create a heading for the category
    const categoryHeading = document.createElement("h3");
    categoryHeading.className = "category-heading";
    categoryHeading.textContent = category;
    ingredientListDiv.appendChild(categoryHeading);

    // Create checkboxes for ingredients in this category
    categorizedIngredients[category].forEach(ingredient => {
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = ingredient;
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(` ${ingredient}`));
        ingredientListDiv.appendChild(label);
    });
}

// --- Event Listeners ---
document.getElementById("findRecipesBtn").addEventListener("click", () => {
    const selectedItems = Array.from(document.querySelectorAll("#ingredient-list input:checked")).map(cb => cb.value);

    const availableRecipes = recipes.filter(recipe =>
        recipe.items.every(item => selectedItems.includes(item))
    );

    const recipesDiv = document.getElementById("recipes");
    recipesDiv.innerHTML = ""; // Clear previous results

    if (availableRecipes.length === 0) {
        recipesDiv.innerHTML = "<p>No recipes can be made with the selected ingredients. Try selecting more items!</p>";
        return;
    }

    availableRecipes.forEach(r => {
        const div = document.createElement("div");
        div.className = "recipe";
        div.innerHTML = `
            <h3>${r.name}</h3>
            <p><strong>Ingredients:</strong> ${r.items.join(", ")}</p>
            <p><strong>Steps:</strong><br>${r.steps}</p>
        `;
        recipesDiv.appendChild(div);
    });
});

document.getElementById("clearSelectionBtn").addEventListener("click", () => {
    // Uncheck all checkboxes
    document.querySelectorAll("#ingredient-list input:checked").forEach(checkbox => {
        checkbox.checked = false;
    });

    // Clear the recipe results area
    document.getElementById("recipes").innerHTML = "<p>Selection cleared. Choose new ingredients to find recipes.</p>";
});