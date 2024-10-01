// First board
import { ParagonBoard } from "../components/ParagonBoard.js";
import { ParagonTile } from "../components/ParagonTile.js";
import { PrintBoard, RotateBoard } from "../utils/BoardRotation.js";

export class BasicBoard extends ParagonBoard {
  constructor() {
    super(21, 21);
    this.initializeTiles();
  }

  initializeTiles() {
    // Define starting tile and ending tile (link to next board)
    this.startTile = { x: 10, y: 0 };
    this.endTileOne = { x: 20, y: 10 };
    this.endTileTwo = { x: 10, y: 20 };
    this.endTileThree = { x: 0, y: 10 };

    const tileConfigs = [
      // First Row
      {
        x: 10,
        y: 0,
        type: "Board Attachment Gate",
        stats: { Strength: 5, Intelligence: 5, Willpower: 5, Dexterity: 5 },
      },

      // Second Row
      { x: 5, y: 1, type: "Magic Node", stat: { Dexterity: 7 } },

      { x: 9, y: 1, type: "Normal Node", stat: { Willpower: 5 } },
      { x: 10, y: 1, type: "Normal Node", stat: { Intelligence: 5 } },

      // Third Row
      { x: 4, y: 2, type: "Magic Node", stats: { Dexterity: 7 } },
      {
        x: 5,
        y: 2,
        type: "Rare Node",
        name: "Courage",
        stats: { MaximumLife: 0.04, Willpower: 10 },
        bonus: { MaximumLife: 0.04, requirement: { Dexterity: 260 } },
      },
      { x: 6, y: 2, type: "Magic Node", stats: { MaximumLife: 0.04 } },

      { x: 8, y: 2, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 9, y: 2, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 10, y: 2, type: "Normal Node", stats: { Willpower: 5 } },

      // Fourth Row
      { x: 4, y: 3, type: "Magic Node", stats: { MaximumLife: 0.02 } },
      { x: 5, y: 3, type: "Magic Node", stats: { MaximumLife: 0.02 } },

      { x: 7, y: 3, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 7, y: 3, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 7, y: 3, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 7, y: 3, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 7, y: 3, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 7, y: 3, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 7, y: 3, type: "Normal Node", stats: { Dexterity: 5 } },

      // Fifth Row
      { x: 2, y: 4, type: "Magic Node", stats: { Intelligence: 7 } },
      {
        x: 3,
        y: 4,
        type: "Magic Node",
        stats: { NatureMagicSkillDamage: 0.05 },
      },

      { x: 5, y: 4, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 6, y: 4, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 7, y: 4, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 8, y: 4, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 9, y: 4, type: "Normal Node", stats: { Strength: 5 } },

      { x: 11, y: 4, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 11, y: 4, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 11, y: 4, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 11, y: 4, type: "Magic Node", stats: { DamageToElites: 0.08 } },

      // Sixth Row
      { x: 1, y: 5, type: "Magic Node", stats: { Intelligence: 7 } },
      {
        x: 1,
        y: 5,
        type: "Rare Node",
        name: "Natures Will",
        stats: { NatureMagicSkillDamage: 0.1, Willpower: 10 },
        bonus: {
          NatureMagicSkillDamage: 0.1,
          requirement: { Intelligence: 270 },
        },
      },
      {
        x: 1,
        y: 5,
        type: "Magic Node",
        stats: { NatureMagicSkillDamage: 0.05 },
      },
      { x: 1, y: 5, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 1, y: 5, type: "Glyph Socket" },
      { x: 1, y: 5, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 1, y: 5, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 1, y: 5, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 1, y: 5, type: "Normal Node", stats: { Willpower: 5 } },

      {
        x: 1,
        y: 5,
        type: "Magic Node",
        stats: { NatureMagicSkillDamage: 0.05 },
      },
      {
        x: 1,
        y: 5,
        type: "Magic Node",
        stats: { NatureMagicSkillDamage: 0.05 },
      },

      // Seventh Row
      {
        x: 2,
        y: 6,
        type: "Magic Node",
        stats: { NatureMagicSkillDamage: 0.05 },
      },

      { x: 4, y: 6, type: "Normal Node", stats: { Strength: 5 } },
      { x: 5, y: 6, type: "Normal Node", stats: { Willpower: 5 } },

      { x: 7, y: 6, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 8, y: 6, type: "Normal Node", stats: { Intelligence: 5 } },

      {
        x: 13,
        y: 6,
        type: "Rare Node",
        name: "Devastation",
        stats: { NatureMagicSkillDamage: 0.05, DamageToElites: 0.16 },
        bonus: {
          NatureMagicSkillDamage: 0.1,
          requirement: { Intelligence: 270 },
        },
      },
      { x: 14, y: 6, type: "Magic Node", stats: { DamageToElites: 0.08 } },

      // Eighth Row

      // Ninth Row

      // Tenth Row

      // Eleventh Row
      {
        x: 0,
        y: 10,
        type: "Board Attachment Gate",
        stats: { Strength: 5, Intelligence: 5, Willpower: 5, Dexterity: 5 },
      },

      {
        x: 20,
        y: 10,
        type: "Board Attachment Gate",
        stats: { Strength: 5, Intelligence: 5, Willpower: 5, Dexterity: 5 },
      },

      // Twelvth Row

      // Thirteenth Row

      // Fourteenth Row

      // Fifteenth Row

      // Sixteenth Row

      // Seventheen Row

      // Eighteenth Row

      // Nineteenth Row

      // Twentieth Row

      // Twenty First Row
      {
        x: 10,
        y: 20,
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
  setStartTile(x, y) {
    this.startTile = { x, y };
  }

  getStartTile() {
    return this.startTile;
  }

  getEndTile() {
    return [this.endTileOne, this.endTileTwo, this.endTileThree];
  }
}
