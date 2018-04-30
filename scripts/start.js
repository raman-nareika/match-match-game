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

window.onload = () => {
    (function() {
        if (window.localStorage['results']) {
            const results = JSON.parse(window.localStorage['results']);

            results.forEach((el, idx) => {
                const tr = document.createElement("tr");
                const thN = document.createElement("th");
                const tdFirstName = document.createElement("td");
                const tdLastName = document.createElement("td");
                const tdEmail = document.createElement("td");
                const tdScore = document.createElement("td");
                const tdDate = document.createElement("td");

                thN.innerHTML = idx + 1;
                tdFirstName.innerHTML = el.firstName;
                tdLastName.innerHTML = el.lastName;
                tdEmail.innerHTML = el.email;
                tdScore.innerHTML = el.score;
                tdDate.innerHTML = el.date;

                tr.appendChild(thN);
                tr.appendChild(tdFirstName);
                tr.appendChild(tdLastName);
                tr.appendChild(tdEmail);
                tr.appendChild(tdScore);
                tr.appendChild(tdDate);
                document.getElementsByTagName("tbody")[0].appendChild(tr);
            });
        } else {
            document.getElementsByTagName("table")[0].style.display = "none";
        }
    })();
}