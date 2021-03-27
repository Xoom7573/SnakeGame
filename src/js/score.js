import { onSnake } from './snake.js'
import { normalFood, badFood, goldFood } from './food.js'

export let foodCounter = 0;
export let scoreCounter = 0;

export function update(){
    if (onSnake(normalFood)){
        foodCounter += 1;
        scoreCounter += 10;
    } else if (onSnake(badFood)) {
        foodCounter = 0;
        scoreCounter -= 15;
    } else if (onSnake(goldFood)) {
        foodCounter += 1;
        scoreCounter += 50;
    }
}

export function draw(){
    const scoreElement = document.getElementById('score');
    scoreElement.innerHTML = 'Score: ' + scoreCounter;

    const foodElement = document.getElementById('foodAmount');
    foodElement.innerHTML = 'Food: ' + foodCounter;
}