function createPika(){
    const pika = document.createElement("div");
    pika.classList.add("home");

    const pikaPortrait = document.createElement("img");
    pikaPortrait.src = "images/pika-portrait.jpeg";
    pikaPortrait.alt = "Pika";

    pika.appendChild(createPara("Aloha! You must have followed your nose!"));
    pika.appendChild(createPara("I'm Pika."));
    pika.appendChild(pikaPortrait);
    pika.appendChild(createPara("I own Pika's, an outdoor restaurant in the heart of the village."));

    return pika;
}

function createPara(text){
    const para = document.createElement("p");
    para.textContent = text;
    return para;
}

function loadPika(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createPika());
}

export default loadPika;