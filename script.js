document.addEventListener("DOMContentLoaded", () => {
    const recipes = {
        spaghetti: {
            title: "Spaghetti Bolognese",
            ingredients: [
                "200g spaghetti",
                "100g minced beef",
                "1 onion, chopped",
                "2 garlic cloves, minced",
                "400g canned tomatoes",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Cook the spaghetti according to the package instructions.",
                "In a pan, sauté the onion and garlic until soft.",
                "Add the minced beef and cook until browned.",
                "Pour in the canned tomatoes, season with salt and pepper, and simmer for 20 minutes.",
                "Serve the sauce over the spaghetti."
            ]
        },
        pancakes: {
            title: "Fluffy Pancakes",
            ingredients: [
                "1 cup flour",
                "2 tablespoons sugar",
                "1 tablespoon baking powder",
                "1/2 teaspoon salt",
                "1 cup milk",
                "1 egg",
                "2 tablespoons melted butter"
            ],
            instructions: [
                "In a bowl, whisk together flour, sugar, baking powder, and salt.",
                "In another bowl, mix milk, egg, and melted butter.",
                "Combine the wet and dry ingredients.",
                "Heat a non-stick pan and pour batter to form pancakes.",
                "Cook until bubbles form on the surface, then flip and cook until golden brown."
            ]
        },
        salad: {
            title: "Greek Salad",
            ingredients: [
                "1 cucumber, chopped",
                "2 tomatoes, chopped",
                "1 red onion, sliced",
                "100g feta cheese, crumbled",
                "10-12 black olives",
                "Olive oil, vinegar, salt, and pepper to taste"
            ],
            instructions: [
                "In a large bowl, combine cucumber, tomatoes, and onion.",
                "Add crumbled feta cheese and olives.",
                "Drizzle with olive oil and vinegar.",
                "Season with salt and pepper, and toss to combine."
            ]
        },
        pizza: {
            title: "Margherita Pizza",
            ingredients: [
                "1 pizza dough",
                "1/2 cup tomato sauce",
                "200g mozzarella cheese, sliced",
                "Fresh basil leaves",
                "Olive oil, salt, and pepper to taste"
            ],
            instructions: [
                "Preheat your oven to 220°C (425°F).",
                "Roll out the pizza dough on a floured surface.",
                "Spread tomato sauce evenly over the dough.",
                "Place slices of mozzarella cheese on top.",
                "Bake in the oven for 10-12 minutes until the crust is golden and the cheese is bubbling.",
                "Garnish with fresh basil leaves and a drizzle of olive oil before serving."
            ]
        }
    };

    const params = new URLSearchParams(window.location.search);
    const recipeKey = params.get('recipe');
    
    if (recipeKey && recipes[recipeKey]) {
        const recipe = recipes[recipeKey];
        document.getElementById("recipe-title").innerText = recipe.title;
        
        const ingredientsList = document.getElementById("ingredients");
        recipe.ingredients.forEach(ingredient => {
            const li = document.createElement("li");
            li.innerText = ingredient;
            ingredientsList.appendChild(li);
        });

        const instructionsList = document.getElementById("instructions");
        recipe.instructions.forEach(instruction => {
            const li = document.createElement("li");
            li.innerText = instruction;
        }
