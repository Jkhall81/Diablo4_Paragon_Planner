// First board
import { ParagonBoard } from "../components/ParagonBoard.js";
import { ParagonTile } from "../components/ParagonTile.js";

export class BasicBoard extends ParagonBoard {
  constructor() {
    super(9, 15);
    this.initializeTiles();
  }

  initializeTiles() {
    // Define starting tile and ending tile (link to next board)
    this.startTile = { x: 5, y: 0 };
    this.endTile = { x: 5, y: 14 };

    const tileConfigs = [
      // First Row
      { x: 3, y: 0, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 4, y: 0, type: "start" },
      { x: 5, y: 0, type: "Normal Node", stats: { Intelligence: 5 } },

      // Second Row
      { x: 2, y: 1, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 3, y: 1, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 4, y: 1, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 5, y: 1, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 6, y: 1, type: "Normal Node", stats: { Willpower: 5 } },

      // Third Row
      { x: 2, y: 2, type: "Magic Node", stats: { Armor: 50 } },
      { x: 6, y: 2, type: "Magic Node", stats: { Damage: 0.05 } },

      // Fourth Row
      {
        x: 2,
        y: 3,
        type: "Rare Node",
        name: "Tenacity",
        stats: { MaximumLife: 0.08, Armor: 100 },
        bonus: { MaximumLife: 0.04, requirement: { Willpower: 200 } },
      },
      { x: 3, y: 3, type: "Magic Node", stats: { MaximumLife: 0.02 } },
      { x: 5, y: 3, type: "Magic Node", stats: { MaximumLife: 0.02 } },
      {
        x: 6,
        y: 3,
        type: "Rare Node",
        name: "Prime",
        stats: { Damage: 0.2, MaximumLife: 0.04 },
        bonus: { Damage: 0.1, requirement: { Intelligence: 160 } },
      },

      // Fifth Row,
      { x: 2, y: 4, type: "Magic Node", stats: { MaximumLife: 0.02 } },
      { x: 3, y: 4, type: "Magic Node", stats: { Armor: 50 } },
      { x: 5, y: 4, type: "Magic Node", stats: { Damage: 0.05 } },
      { x: 6, y: 4, type: "Magic Node", stats: { MaximumLife: 0.02 } },

      // Sixth Row
      { x: 3, y: 5, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 5, y: 5, type: "Normal Node", stats: { Willpower: 5 } },

      // Seventh Row
      { x: 2, y: 6, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 3, y: 6, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 4, y: 6, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 5, y: 6, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 6, y: 6, type: "Normal Node", stats: { Willpower: 5 } },

      // Eighth Row
      { x: 1, y: 7, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 2, y: 7, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 3, y: 7, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 4, y: 7, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 5, y: 7, type: "Normal Node", stats: { Strength: 5 } },
      { x: 6, y: 7, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 7, y: 7, type: "Normal Node", stats: { Intelligence: 5 } },

      // Ninth Row
      { x: 0, y: 8, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 1, y: 8, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 2, y: 8, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 3, y: 8, type: "Normal Node", stats: { Strength: 5 } },
      { x: 4, y: 8, type: "Glyph Socket" },
      { x: 5, y: 8, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 6, y: 8, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 7, y: 8, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 8, y: 8, type: "Normal Node", stats: { Intelligence: 5 } },

      // Tenth Row
      { x: 1, y: 9, type: "Magic Node", stats: { Damage: 0.05 } },
      { x: 2, y: 9, type: "Magic Node", stats: { Intelligence: 7 } },
      { x: 3, y: 9, type: "Magic Node", stats: { Damage: 0.05 } },
      { x: 5, y: 9, type: "Magic Node", stats: { ResistAllElements: 0.02 } },
      { x: 6, y: 9, type: "Magic Node", stats: { Dexterity: 7 } },
      { x: 7, y: 9, type: "Magic Node", stats: { ResistAllElements: 0.02 } },

      // Eleventh Row
      { x: 2, y: 10, type: "Magic Node", stats: { Intelligence: 7 } },
      {
        x: 3,
        y: 10,
        type: "Rare Node",
        name: "Impel",
        stats: { Damage: 0.1, Willpower: 10 },
        bonus: { Damage: 0.1, requirement: { Intelligence: 170 } },
      },
      {
        x: 5,
        y: 10,
        type: "Rare Node",
        name: "Resolve",
        stats: { ResistAllElements: 0.04, Willpower: 10 },
        bonus: { ResistAllElements: 0.04, requirement: { Dexterity: 180 } },
      },
      { x: 6, y: 10, type: "Magic Node", stats: { Dexterity: 7 } },

      // Twelvth Row
      { x: 3, y: 11, type: "Magic Node", stats: { Damage: 0.05 } },
      { x: 5, y: 11, type: "Magic Node", stats: { ResistAllElements: 0.02 } },

      // Thirteenth Row
      { x: 3, y: 12, type: "Normal Node", stats: { Strength: 5 } },
      { x: 5, y: 12, type: "Normal Node", stats: { Dexterity: 5 } },

      // Fourteenth Row
      { x: 3, y: 13, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 4, y: 13, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 5, y: 13, type: "Normal Node", stats: { Willpower: 5 } },

      // Fifteenth Row
      {
        x: 4,
        y: 14,
        type: "Board Attachment Gate",
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
}

const board = new BasicBoard();
board.printBoard();

console.log(board["grid"][1]);
