/* eslint-env browser*/

function Recipe(title, serving_size, ingredients) {
    this.title = title;
    this.serving_size = serving_size;
    this.ingredients = ingredients;

    var listItems = function () {
        var list = title + ingredients + serving_size;
        for (var i = 0; i < list.length; i++) {
            console.log(list[i]);
        }

        this.Card = function () {
            listItems();
        }
    }

    var fixins = ['-3 Avocados', '-1 Lime', '-1 tsp Salt', '-1/2 c Onion', '-3 tbls Cilantro', '-2 Diced Tomatoes', '-1 tsp Garlic', '1- Pinch Ground Pepper'];

    var guac = new Recipe('Guacamole', 4, fixins);

    guac.Card();
