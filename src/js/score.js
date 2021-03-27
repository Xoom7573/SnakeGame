import { onSnake } from './snake.js'
import { food } from './food.js'

let scoreCounter = 0;

export function update(){
    if (onSnake(food)){
        scoreCounter += 1;
    }
}

export function draw(){
    const scoreElement = document.getElementById('score');
    scoreElement.innerHTML = 'Score: ' + scoreCounter;
}