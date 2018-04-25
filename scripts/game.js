class Game {
    constructor(skin, difficulty) {
        this._skin_class = skin;
        this._difficulty = difficulty
        this._cards = this.generateCards(this._difficulty);
        this._selectedCards = [];
        this._playing_field_selector = "playing-field";
    }
    
    start() {
        this.clear();
        this.drawCards();
    }

    clear() {
        this.gameField.innerHTML = "";
    }

    get gameField() {
        return document.getElementsByClassName(this._playing_field_selector)[0];
    }

    generateCards(diff) {
        let cards = this.initCards(diff);
        this.shuffle(cards);

        return cards;
    }

    initCards(diff) {
        let col = diff[0];
        let row = diff[1];
        let cards = new Array(col*row / 2).fill(0);
        cards = cards.map((v, i) => v = i);
        
        return cards.concat(cards);
    }

    drawCards(difficulty) {
        let field = document.getElementsByClassName(this._playing_field_selector)[0];

        this._cards.forEach(el => { 
            const card = document.createElement("div");
            const front = document.createElement("figure");
            const back = document.createElement("figure");

            card.className = `card card-container-${el}`;
            front.className = `${this._skin_class}`;
            front.setAttribute("name",`card-container-${el}`);
            back.className = "back";
            back.innerHTML = el;
            card.appendChild(front);
            card.appendChild(back);
            this.gameField.appendChild(card);
        });
    }

    shuffle(cards) {
        for(let i = cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * Math.floor(cards.length));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    }

    select(id) {
        //const id = cardId.match(/\d+/i);
        this._selectedCards.push(id);

        if (this._selectedCards.length === 2)
            return this._selectedCards.pop() === this._selectedCards.pop();
    }
}