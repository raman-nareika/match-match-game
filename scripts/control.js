const validateForm = function(form) {
    const inputs = [...form.elements].filter(x => x.nodeName === "INPUT");
    const errors = inputs.filter(x => !x.value).map(x => x.name);

    if (errors.length === 0) {
        form.submit();
    } else {

    }
}

document.addEventListener("DOMContentLoaded", function(event) { 
    let game;
    const selectedCards = [];
/*
    document.getElementsByClassName("new-game")[0].addEventListener("click", () => {
        const skin = document.querySelector('[name="card-skin"]:checked:first-of-type').value;
        const difficulty = document.querySelector('[name="difficulty"]:checked:first-of-type').value.split(",");
        const firstName = "";
        const lastName = "";

        game = new Game(skin, difficulty, firstName, lastName);
        game.start()
    });

    document.body.addEventListener('click', function(event) {
        if (event.srcElement.id !== null && event.srcElement.id.startsWith("card-")) {
            event.srcElement.parentElement.classList.toggle('flipped');
            selectedCards.push(event.srcElement.parentElement.id);

            if (game.select(event.srcElement.id) === false) {
                document.getElementById(`${selectedCards.pop()}`).classList.toggle('flipped');
                setTimeout(document.getElementById(`${selectedCards.pop()}`).classList.toggle('flipped'), 10000);
            }
        }
        
        if (game.gameIsFinished) {
            game.saveResult();
            game.congratulate();
        }
    });*/
});