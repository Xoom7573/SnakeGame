import { snakHeadRotation } from './input.js'
// ___Export Variables___
export const SNAKE_SPEED = 9;

// ___Variables___
let newSegments = 0;
const snakeBody = [{
    x: 11,
    y: 11
}]

export function update(input) {

    if (input.x === 0 && input.y === 0) return;

    addSegments();

    for (let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i+1] = { ...snakeBody[i] };
    }

    snakeBody[0].x += input.x;
    snakeBody[0].y += input.y;
}

export function draw(gameDisplay) {
    for(let i = 0; i < snakeBody.length; i++){
        if(false){
            let snakeElement = document.createElement('div');
            snakeElement.style.gridColumnStart = snakeBody[i].x;
            snakeElement.style.gridRowStart = snakeBody[i].y;
            snakeElement.style.backgroundColor = 'blue';
            snakeElement.classList.add('snake');
            gameDisplay.appendChild(snakeElement);
        }else if(i === 0){
            let snakeElement = document.createElement('img');
            snakeElement.style.transform = 'rotate(' + snakHeadRotation + 'deg)';
            snakeElement.style.gridColumnStart = snakeBody[i].x;
            snakeElement.style.gridRowStart = snakeBody[i].y;
            snakeElement.src = './img/snakehead.png';
            snakeElement.classList.add('snakehead');
            gameDisplay.appendChild(snakeElement);
        }else{
            let snakeElement = document.createElement('div');
            snakeElement.style.gridColumnStart = snakeBody[i].x;
            snakeElement.style.gridRowStart = snakeBody[i].y;
            snakeElement.classList.add('snake');
            gameDisplay.appendChild(snakeElement);
        }
    }
}

export function expandSnake(amount) {
    newSegments += amount;
}

export function onSnake(pos, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index == 0) return false;
        return equalPostions(segment, pos)
    })
}

export function snakeHead() {
    return snakeBody[0];
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true });
}

function equalPostions (pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
    newSegments = 0;
}