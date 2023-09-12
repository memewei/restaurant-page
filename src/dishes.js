function createDishes(){
    const dishes = document.createElement("div");
    dishes.classList.add("dishes");

    dishes.appendChild(
        createDish("Arugula Rolls", "Fresh arugula, bathing in spicy sauce and resting in a tortilla wrap", 150, 67)
    );
    dishes.appendChild(
        createDish("Autumn Dew Drop Juice", "The flavour of the mountain, contained in a single drink!", 128, 57)
    );
    dishes.appendChild(
        createDish("Cherry Berry Shakey", "A sweet cherry-rich drink beloved by both kids and adults!", 128, 57)
    );

    return dishes;
}

function createDish(name, description, energy, health){
    const dish = document.createElement("div");
    dish.classList.add("menu-item");

    const dishName = document.createElement("h2");
    dishName.textContent = name;

    const dishDesc = document.createElement("p");
    dishDesc.textContent = description;

    const dishEnergy = document.createElement("p");
    dishEnergy.textContent = energy;

    const dishHealth = document.createElement("p");
    dishHealth.textContent = health;

    const dishImage = document.createElement("img");
    dishImage.src = `images/dishes/${name.toLowerCase()}.png`;
    dishImage.alt = `${name}`;

    dish.appendChild(dishName);
    dish.appendChild(dishImage);
    dish.appendChild(dishDesc);
    dish.appendChild(dishEnergy);
    dish.appendChild(dishHealth);

    return dish;
}

function loadDishes(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createDishes());
}

export default loadDishes;