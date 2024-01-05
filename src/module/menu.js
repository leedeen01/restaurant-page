
export default function loadMenu() {
    let content = document.querySelector(".main-content");
    let recipe = document.createElement('ul');
    recipe.appendChild(newDish("Pepperoni Pizza", "It perfectly combines gooey, melted cheese, flavorful sauce, and salty pepperoni."));
    recipe.appendChild(newDish("Cheese Pizza", "It has everything a good pizza needs: crust, sauce, and lots and lots of cheese. "));
    recipe.appendChild(newDish("Veggie Pizza", "There are always one or two people out there who don’t like pizza “because it’s too greasy.” To them, I say, “Try a veggie pizza!” "));
    recipe.appendChild(newDish("BBQ Chicken Pizza", "It has a sweet and tangy flavor, unlike most other pizzas you’ll try."));
    recipe.appendChild(newDish("Meat Lovers Pizza", "The meat lovers’ pizza is the polar opposite of the veggie pizza above. It typically includes zero veggies and tons of meat."));
    content.appendChild(recipe);
}

function newDish(name, description) {
    let title = document.createElement('li');
    let dishName = document.createElement('div');
    let dishDesc = document.createElement('div');
    dishName.textContent = name;
    dishDesc.textContent = description;
    title.appendChild(dishName);
    title.appendChild(dishDesc);
    return title;
}