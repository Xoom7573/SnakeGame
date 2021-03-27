
const GRID_SIZE = 20;

export function randomGridPos() {
    return { 
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

export function outsideGrid(pos) {
    return pos.x < 1 || pos.x > GRID_SIZE || pos.y < 1 || pos.y > GRID_SIZE;
}