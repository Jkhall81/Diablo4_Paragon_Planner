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
      { x: 7, y: 2, type: "Magic Node", stats: { Damage: 0.05 } },

      // Fourth Row
      {
        x: 3,
        y: 3,
        type: "Rare Node",
        name: "Tenacity",
        stats: { MaximumLife: 0.08, Armor: 100 },
        bonus: { MaximumLife: 0.04, requirement: { Willpower: 200 } },
      },
      { x: 4, y: 3, type: "Magic Node", stats: { MaximumLife: 0.02 } },
      { x: 6, y: 3, type: "Magic Node", stats: { MaximumLife: 0.02 } },
      {
        x: 7,
        y: 3,
        type: "Rare Node",
        name: "Prime",
        stats: { Damage: 0.2, MaximumLife: 0.04 },
        bonus: { Damage: 0.1, requirement: { Intelligence: 160 } },
      },

      // Fifth Row,
      { x: 3, y: 4, type: "Magic Node", stats: { MaximumLife: 0.02 } },
      { x: 4, y: 4, type: "Magic Node", stats: { Armor: 50 } },
      { x: 6, y: 4, type: "Magic Node", stats: { Damage: 0.05 } },
      { x: 7, y: 4, type: "Magic Node", stats: { MaximumLife: 0.02 } },

      // Sixth Row
      { x: 4, y: 5, type: "Common Node", stats: { Intelligence: 5 } },
      { x: 6, y: 5, type: "Common Node", stats: { Willpower: 5 } },

      // Seventh Row
      { x: 3, y: 6, type: "Common Node", stats: { Dexterity: 5 } },
      { x: 4, y: 6, type: "Common Node", stats: { Willpower: 5 } },
      { x: 5, y: 6, type: "Common Node", stats: { Dexterity: 5 } },
      { x: 6, y: 6, type: "Common Node", stats: { Intelligence: 5 } },
      { x: 7, y: 6, type: "Common Node", stats: { Willpower: 5 } },

      // Eighth Row
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
