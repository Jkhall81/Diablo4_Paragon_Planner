export class ParagonTile {
  constructor(type, stats = {}, position = { x: 0, y: 0 }) {
    this.type = type;
    this.stats = stats;
    this.position = position;
  }

  getStats() {
    return this.stats;
  }

  printInfo() {
    console.log(`Tile Type: ${this.type}`);
    console.log(`Stats: ${JSON.stringify(this.stats)}`);
    console.log(`Position: (${this.position.x}, ${this.position.y})`);
  }
}
