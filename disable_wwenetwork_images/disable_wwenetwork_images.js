setInterval(() => {
    main();
}, 100);

function main() {

    let placeholders = document.getElementsByClassName("placeholder");
    for (let i = 0; i < placeholders.length; i++) {
        placeholders[i].setAttribute("style", "");
    }

    let card_backgrounds = document.getElementsByClassName("card-background");
    for (let i = 0; i < card_backgrounds.length; i++) {
        card_backgrounds[i].firstChild.setAttribute("src", "");
    }
}
