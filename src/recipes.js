function createRecipes(){
    const recipes = document.createElement("div");
    recipes.classList.add("recipes");

    recipes.appendChild(
        createRecipe("Arugula Rolls", "Mountain Arugula", 3, "Hot Pepper", 2, "", "")
    );
    recipes.appendChild(
        createRecipe("Autumn Dew Drop Juice", "Autumn Drop Berry", 1, "Wild Plum", 1, "Blackberry", 1)
    );
    recipes.appendChild(
        createRecipe("Cherry Berry Shakey", "Ridge Cherry", 1, "Cherry", 1, "", "")
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

    const ing3 = document.createElement("p");
    ing3.textContent = ingredient3;

    const qtIng3 = document.createElement("p");
    qtIng3.textContent = quantity3;
    
    const recipeImage = document.createElement("img");
    recipeImage.src = `images/dishes/${name.toLowerCase()}.png`;
    recipeImage.alt = `${name}`;

    const ing1Image = document.createElement("img");
    ing1Image.src = `images/dishes/ingredients/${ingredient1.toLowerCase()}.png`;
    ing1Image.alt = `${ingredient1}`;

    const ing2Image = document.createElement("img");
    ing2Image.src = `images/dishes/ingredients/${ingredient2.toLowerCase()}.png`;
    ing2Image.alt = `${ingredient2}`;

    const ing3Image = document.createElement("img");
    ing3Image.src = `images/dishes/ingredients/${ingredient3.toLowerCase()}.png`;
    ing3Image.alt = `${ingredient3}`;

    recipe.appendChild(recipeName);
    recipe.appendChild(recipeImage);
    recipe.appendChild(ing1Image);
    recipe.appendChild(ing1);
    recipe.appendChild(qtIng1);
    recipe.appendChild(ing2Image);
    recipe.appendChild(ing2);
    recipe.appendChild(qtIng2);
    recipe.appendChild(ing3Image);
    recipe.appendChild(ing3);
    recipe.appendChild(qtIng3);

    return recipe;
}

function loadRecipes(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createRecipes());
}

export default loadRecipes;