document.addEventListener("DOMContentLoaded", function(event) { 
    let game;
    const selectedCards = [];

    document.getElementsByClassName("new-game")[0].addEventListener("click", () => {
        const skin = document.querySelector('[name="card-skin"]:checked:first-of-type').value;
        const difficulty = document.querySelector('[name="difficulty"]:checked:first-of-type').value.split(",");
        game = new Game(skin, difficulty);
        game.start()
    });

    document.body.addEventListener('click', function(event) {
        if (event.srcElement.getAttribute("name") !== null && 
            event.srcElement.getAttribute("name").startsWith("card-container-")) {
            event.srcElement.parentElement.classList.toggle('flipped');
            selectedCards.push(event.srcElement.parentElement.className);

            if (game.select(event.srcElement.getAttribute("name")) === false) {
                document.getElementsByClassName(`${selectedCards.pop()}`)[0].classList.toggle('flipped');
                setTimeout(document.getElementsByClassName(`${selectedCards.pop()}`)[0].classList.toggle('flipped'), 1000);
            }
        };
    });
});