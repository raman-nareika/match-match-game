const validateForm = function(form) {
    const inputs = [...form.elements].filter(x => x.nodeName === "INPUT");
    const errors = inputs.filter(x => !x.value).map(x => x.name);

    if (errors.length === 0) {
        const firstName = inputs.find(x => x.name === "first-name").value;
        const lastName = inputs.find(x => x.name === "last-name").value;
        const email = inputs.find(x => x.name === "email").value;
        const skin = inputs.find(x => x.name === "card-skin").value;
        const difficulty = inputs.find(x => x.name === "difficulty").value;
        const obj = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            skin: skin,
            difficulty: difficulty
        }

        window.localStorage['game-params'] = JSON.stringify(obj);
    }
}