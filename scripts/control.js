window.onload = () => {
    const selectedCards = [];
    const params = JSON.parse(window.localStorage['game-params']);
    const game = new Game(params.firstName, params.lastName, params.email, params.skin, params.difficulty);
    game.start();
    
    document.body.addEventListener('click', function(event) {
        if (event.srcElement.id !== null && event.srcElement.id.startsWith("card-") && selectedCards.length !== 2) {
            event.srcElement.parentElement.classList.toggle('flipped');
            selectedCards.push(event.srcElement.parentElement.id);

            if (selectedCards.length === 2) {
                if (!game.areEqual(selectedCards[0], selectedCards[1])) {
                    setTimeout(function() { flip(`${selectedCards.pop()}`) }, 1000);
                    setTimeout(function() { flip(`${selectedCards.pop()}`) }, 1000);   
                } else {
                    selectedCards.splice(0, 2);
                }
            }
        }
        
        if (game.gameIsFinished) {
            game.saveResult();
            game.congratulate();
        }
    });
};

const flip = function(cardId) {
    document.getElementById(cardId).classList.toggle('flipped');
}