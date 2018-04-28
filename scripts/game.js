class Game {
    constructor(firstName, lastName, email, skin, difficulty) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
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

    get gameIsFinished() {
        return this._cards.every(x => x.guessed === true)
    }

    generateCards(diff) {
        let cards = this.initCards(diff);
        this.shuffle(cards);
        return cards;
    }

    initCards(diff) {
        let col = diff[0];
        let row = diff[2];
        let cards = new Array(col * row).fill(0);
        cards = cards.map(function(v, i) {
            return {
                    id: i + 1,
                    value: i % ((col * row) / 2) + 2,
                    guessed: false
                }
        });      
        return cards;
    }

    drawCards(difficulty) {
        this._cards.forEach(el => { 
            const cardContainer = document.createElement("div");
            const front = document.createElement("figure");
            const back = document.createElement("figure");

            cardContainer.className = `card-container`;
            cardContainer.id = `card-${el.id}`;
            front.className = `${this._skin_class}`;
            front.id = `card-${el.id}`;
            back.className = "back";
            back.innerHTML = el.value;
            cardContainer.appendChild(front);
            cardContainer.appendChild(back);
            this.gameField.appendChild(cardContainer);
        });
    }

    shuffle(cards) {
        for(let i = cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * Math.floor(cards.length));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    }

    select(cardId) {
        const id = parseInt(cardId.match(/\d+/i)[0]);
        this._selectedCards.push(this._cards.findIndex(el => el.id === id));

        if (this._selectedCards.length === 2) {
            const aIndex = this._selectedCards.pop()
            const bIndex = this._selectedCards.pop()
            
            if (this._cards[aIndex].value === this._cards[bIndex].value) {
                this._cards[aIndex].guessed = true;
                this._cards[bIndex].guessed = true;
                return true;
            }
            return false;
        }
    }

    congratulate() {
        this.gameField.innerHTML = `<div class="congratulation">
                                        <h3>Good job, ${this.firstName} ${this.lastName}!</h3>
                                        <button class="new-game">New Game</button>
                                    </div>
                                    `;
    }

    saveResult() {
        let res;
        const result = {
            firstName: this._firstName,
            lastName: this._lastName,
            email: this._email,
            score: 0,
            date: new Date().toGMTString()
        };
        
        if (window.localStorage['results']) {
            res = JSON.parse(window.localStorage['results'])
        } else {
            res = [];
        }
        res.push(result);
        window.localStorage['results'] = JSON.stringify(res);
    }
}