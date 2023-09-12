function createRecipes(){
    const recipes = document.createElement("div");
    recipes.classList.add("recipes");

    recipes.appendChild(
        createRecipe("Arugula Rolls", "Mountain Arugula", 3, "Hot Pepper", 2, 0, 0)
    );
    recipes.appendChild(
        createRecipe("Autumn Dew Drop Juice", "Autumn Drop Berry", 1, "Wild Plum", 1, "Blackberry", 1)
    );
    recipes.appendChild(
        createRecipe("Cherry Berry Shakey", "Ridge Cherry", 1, "Cherry", 1, 0, 0)
    );

    return recipes;
}

function createRecipe(name, ingredient1, quantity1, ingredient2, quantity2, ingredient3, quantity3){
    const recipe = document.createElement("div");
    recipe.classList.add("recipe-item");

    const recipeName = document.createElement("h2");
    recipeName.textContent = name;

    const ing1 = document.createElement("p");
    ing1.textContent = ingredient1;

    const qtIng1 = document.createElement("p");
    qtIng1.textContent = quantity1;

    const ing2 = document.createElement("p");
    ing2.textContent = ingredient2;

    const qtIng2 = document.createElement("p");
    qtIng2.textContent = quantity2;

    if(ingredient3 && quantity3 === 0) return;
    const ing3 = document.createElement("p");
    ing3.textContent = ingredient3;

    const qtIng3 = document.createElement("p");
    qtIng3.textContent = quantity3;

    return recipe;
}

function loadRecipes(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createRecipes());
}

export default loadRecipes;