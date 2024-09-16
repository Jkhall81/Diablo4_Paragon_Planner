// First board
import { ParagonBoard } from "./ParagonBoard";
import { ParagonTile } from "./ParagonTile";

export class BasicBoard extends ParagonBoard {
  constructor() {
    super(9, 14);
    this.initializeTiles();
  }

  initializeTiles() {
    // Define starting tile and ending tile (link to next board)
    this.startTile = { x: 5, y: 0 };
    this.endTile = { x: 5, y: 14 };

    const tileConfigs = [
      // First Row
      { x: 4, y: 0, type: "Common Node", stats: { Willpower: 5 } },
      { x: 5, y: 0, type: "start" },
      { x: 6, y: 0, type: "Common Node", stats: { Intelligence: 5 } },

      // Second Row
      { x: 3, y: 1, type: "Common Node", stats: { Dexterity: 5 } },
      { x: 4, y: 1, type: "Common Node", stats: { Intelligence: 5 } },
      { x: 5, y: 1, type: "Common Node", stats: { Willpower: 5 } },
      { x: 6, y: 1, type: "Common Node", stats: { Willpower: 5 } },
      { x: 7, y: 1, type: "Common Node", stats: { Willpower: 5 } },

      // Third Row
      { x: 3, y: 2, type: "Magic Node", stats: { Armor: 50 } },
      // Fourth Row

      // Fifth Row

      // Sixth Row

      // Seventh Row

      {
        x: 5,
        y: 14,
        type: "end",
        stats: { Strength: 5, Intelligence: 5, Willpower: 5, Dexterity: 5 },
      },
    ];

    // Populate the grid with tiles based on the config
    tileConfigs.forEach((config) => {
      this.grid[config.x][config.y] = new ParagonTile(
        config.type,
        config.stats,
        { x: config.x, y: config.y }
      );
    });
  }
  setStartTile(x, y) {
    this.startTile = { x, y };
  }

  getStartTile() {
    return this.startTile;
  }

  setEndTile(x, y) {
    this.endTile = { x, y };
  }

  getEndTile() {
    return this.endTile;
  }
}
