import {ParagonTile} from './ParagonTile';

export class ParagonBoard {
    constructor(x = 9, y = 15) {
        // Create a 5x5 grid, this can be expanded later
        this.grid = Array(x).fill(null).map(() => Array(y).fill(null))
    }

    // Add a tile to the board at position (x, y)
    addTile(tile, x, y) {
        this.grid[x][y] = tile;
    }

    // et a tile at a specific position
    getTile(x, y) {
        return this.grid[x][y]
    }
}