import {onSnake, expandSnake} from './snake.js'
import { randomGridPos } from './grid.js'
import { foodCounter, scoreCounter } from './score.js'

export let normalFood = getRandomFoodPos();
export let badFood = getRandomFoodPos();
export let goldFood = getRandomFoodPos();

let foodCheck = 0;

const EXPANSION_RATE_NORMAL_FOOD = 1;
const EXPANSION_RATE_BAD_FOOD = 3;
const EXPANSION_RATE_GOLD_FOOD = 1;


export function update() {
    if (onSnake(normalFood)) {
        expandSnake(EXPANSION_RATE_NORMAL_FOOD);
        normalFood = getRandomFoodPos();
        badFood = getRandomFoodPos();
    } else if (onSnake(badFood) && foodCheck >= 1){
        expandSnake(EXPANSION_RATE_BAD_FOOD);
        badFood = getRandomFoodPos();
    } else if (onSnake(goldFood) && foodCheck === 2){
        expandSnake(EXPANSION_RATE_GOLD_FOOD);
        goldFood = getRandomFoodPos();
        badFood = getRandomFoodPos();
    }
}

export function draw(gameDisplay) {
    switch (foodCheck) {
        case 0:
            drawNormalFood(gameDisplay);
            if(foodCounter === 5) foodCheck = 1;
            break;
        case 1:
            drawNormalFood(gameDisplay);
            drawBadFood(gameDisplay);
            if (foodCounter === 10) foodCheck = 2;
            if (foodCounter < 5) foodCheck = 0;
            break;
        case 2:
            drawBadFood(gameDisplay);
            drawNormalFood(gameDisplay);
            drawGoldFood(gameDisplay);
            if (foodCounter > 12) foodCheck = 1;
            break;
    }  
    // console.log('food: ' + foodCounter + ' foodCheck: ' + foodCheck) // DEBUGGING!
}

function drawNormalFood(gameDisplay) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = normalFood.y;
    foodElement.style.gridColumnStart = normalFood.x;
    foodElement.classList.add('Normal-Food')
    gameDisplay.appendChild(foodElement)
}

function drawBadFood(gameDisplay) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = badFood.y;
    foodElement.style.gridColumnStart = badFood.x;
    foodElement.classList.add('Bad-Food')
    gameDisplay.appendChild(foodElement)
}

function drawGoldFood(gameDisplay) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = goldFood.y;
    foodElement.style.gridColumnStart = goldFood.x;
    foodElement.classList.add('Gold-Food')
    gameDisplay.appendChild(foodElement)
}

function getRandomFoodPos() {
    let newFoodPostion;
    while(newFoodPostion == null || onSnake(newFoodPostion)){
        newFoodPostion = randomGridPos();
    }
    return newFoodPostion;
}