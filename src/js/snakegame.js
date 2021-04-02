import { update as updateSnake, draw as drawSnake, snakeHead, snakeIntersection, SNAKE_SPEED } from './snake.js';
import { update as updateFood, draw as drawFood} from './food.js';
import {outsideGrid} from './grid.js';
import { getInputDirection } from './input.js';
import { update as updateScore, draw as drawScore } from './score.js';

// ___Variables___
let lastRenderTime = 0;
let gameOver = false;
const gameDisplay = document.getElementById('game-display');

// ___Main Game Loop function___

function main (currentTime) {

    if (gameOver){
        if (confirm('You lost. Press ok to restart.')){
            window.location = 'https://xoom7573.github.io/SnakeGame/'
        }
        return
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    
    lastRenderTime = currentTime;
    update();
    draw();
}

window.requestAnimationFrame(main)

function update() {
    updateSnake(getInputDirection());
    updateScore();
    updateFood();
    checkDeath();
}

function draw() {
    gameDisplay.innerHTML = '';
    drawSnake(gameDisplay);
    drawFood(gameDisplay);
    drawScore();
}

function checkDeath() {
    gameOver = outsideGrid(snakeHead()) || snakeIntersection();
}
