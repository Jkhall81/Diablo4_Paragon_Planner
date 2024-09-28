export class ParagonBoard {
  constructor(x = 9, y = 15) {
    // Create a 5x5 grid, this can be expanded later
    this.grid = Array(x)
      .fill(null)
      .map(() => Array(y).fill(null));
  }

  // Add a tile to the board at position (x, y)
  addTile(tile, x, y) {
    this.grid[x][y] = tile;
  }

  // et a tile at a specific position
  getTile(x, y) {
    return this.grid[x][y];
  }

  getStartTile() {
    return this.startTile;
  }

  getEndTile() {
    return this.endTile;
  }

  printBoard() {
    for (let y = this.grid[0].length - 1; y >= 0; y--) {
      let row = "";
      for (let x = 0; x < this.grid.length; x++) {
        const tile = this.grid[x][y];
        row += tile ? `[${tile.type.charAt(0)}]` : "[ ]";
      }
      console.log(row.split("").join(" "));
    }
  }
}
