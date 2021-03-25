
// ___Export Variables___
export const SNAKE_SPEED = 5;

// ___Variables___
let newSegments = 0;
const snakeBody = [
    { x: 11, y: 11}
]

export function update(input) {

    addSegments();

    for (let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i+1] = { ...snakeBody[i] };
    }

    snakeBody[0].x += input.x;
    snakeBody[0].y += input.y;
}

export function draw(gameDisplay) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake')
        gameDisplay.appendChild(snakeElement)
    })
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