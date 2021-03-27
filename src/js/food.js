import {onSnake, expandSnake} from './snake.js'
import { randomGridPos } from './grid.js'

export let food = getRandomFoodPos();
const EXPANSION_RATE = 1;


export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPos();
    }
}

export function draw(gameDisplay) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    gameDisplay.appendChild(foodElement)
}

function getRandomFoodPos() {
    let newFoodPostion
    while(newFoodPostion == null || onSnake(newFoodPostion)){
        newFoodPostion = randomGridPos();
    }
    return newFoodPostion;
}