; (function() {
    "use strict";
    let field = document.querySelector('#field');
    let message = document.querySelector('#message');
    let form = document.querySelector('#form');

    let cities = [];
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let value = field.value.toLowerCase();
        let city = value.trim().replace(/[^а-я]|ь$/g, '');
        if (!city) {
            message.textContent = 'Введите город!';
        } else {
            if (cities.length == 0) {
                cities.push(city);
                message.textContent = value;
            } else if (cities.includes(city) == false) {
                if (cities.at(-1).at(-1) == city.at(0)) {
                    cities.push(city);
                    message.textContent = value;
                } else {
                    message.textContent = 'Первая буква не совпадает с последней предыдущего города';
                }
            } else {
                message.textContent = 'Упс! Такой город уже был..';
            }
        }
        field.value = '';
        console.log(cities);
    });
})();

