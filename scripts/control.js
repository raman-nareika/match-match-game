window.onload = () => {
    const selectedCards = [];
    const params = JSON.parse(window.localStorage['game-params']);
    const game = new Game(params.firstName, params.lastName, params.email, params.skin, params.difficulty);
    game.start();
    
    document.body.addEventListener('click', function(event) {
        if (event.srcElement.id !== null && event.srcElement.id.startsWith("card-")) {
            event.srcElement.parentElement.classList.toggle('flipped');
            selectedCards.push(event.srcElement.parentElement.id);

            if (game.select(event.srcElement.id) === false) {
                document.getElementById(`${selectedCards.pop()}`).classList.toggle('flipped');
                document.getElementById(`${selectedCards.pop()}`).classList.toggle('flipped');
            }
        }
        
        if (game.gameIsFinished) {
            game.saveResult();
            game.congratulate();
        }
    });
};