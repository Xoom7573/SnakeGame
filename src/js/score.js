import { onSnake } from './snake.js'
import { food } from './food.js'

export let foodCounter = 0;
export let scoreCounter = 0;

export function update(){
    if (onSnake(food)){
        foodCounter += 1;
    }
}

export function draw(){
    const scoreElement = document.getElementById('score');
    scoreElement.innerHTML = 'Score: ' + scoreCounter;

    const foodElement = document.getElementById('foodAmount');
    foodElement.innerHTML = 'Food: ' + foodCounter;
}