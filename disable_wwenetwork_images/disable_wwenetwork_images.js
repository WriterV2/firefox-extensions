setInterval(() => {
    main();
}, 2000);

function main() {
    let card_backgrounds = document.getElementsByClassName("card-background");
    for (let i = 0; i < card_backgrounds.length; i++) {
        card_backgrounds[i].firstChild.setAttribute("src", "");
    }
}
