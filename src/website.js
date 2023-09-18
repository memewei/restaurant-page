import loadHome from "./pika";
import loadDishes from "./dishes";
import loadRecipes from "./recipes";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "Pika's Restaurant";

  header.appendChild(restaurantName);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement("nav");

  const homeButton = document.createElement("button");
  homeButton.classList.add("button-nav");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeButton);
    loadHome();
  });

  const dishesButton = document.createElement("button");
  dishesButton.classList.add("button-nav");
  dishesButton.textContent = "Dishes";
  dishesButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(dishesButton);
    loadDishes();
  });

  const recipesButton = document.createElement("button");
  recipesButton.classList.add("button-nav");
  recipesButton.textContent = "Recipes";
  recipesButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(recipesButton);
    loadRecipes();
  });

  nav.appendChild(homeButton);
  nav.appendChild(dishesButton);
  nav.appendChild(recipesButton);

  return nav;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".button-nav");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });
  button.classList.add("active");
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyrightText = document.createElement("p");
  copyrightText.textContent = `Copyright © ${new Date().getFullYear()} memewei`;

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/memewei";

  const githubIcon = document.createElement("i");
  githubIcon.classList.add("uil");
  githubIcon.classList.add("uil-github");

  githubLink.appendChild(githubIcon);
  footer.appendChild(copyrightText);
  footer.appendChild(githubLink);

  return footer;
}

function initializePage() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector(".button-nav"));
  loadHome();
}

export default initializePage;
