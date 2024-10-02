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
      { x: 8, y: 3, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 9, y: 3, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 10, y: 3, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 11, y: 3, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 12, y: 3, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 13, y: 3, type: "Normal Node", stats: { Dexterity: 5 } },

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
      { x: 12, y: 4, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 13, y: 4, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 14, y: 4, type: "Magic Node", stats: { DamageToElites: 0.08 } },

      // Sixth Row
      { x: 1, y: 5, type: "Magic Node", stats: { Intelligence: 7 } },
      {
        x: 2,
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
        x: 3,
        y: 5,
        type: "Magic Node",
        stats: { NatureMagicSkillDamage: 0.05 },
      },
      { x: 4, y: 5, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 5, y: 5, type: "Glyph Socket" },
      { x: 6, y: 5, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 7, y: 5, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 8, y: 5, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 9, y: 5, type: "Normal Node", stats: { Willpower: 5 } },

      {
        x: 13,
        y: 5,
        type: "Magic Node",
        stats: { NatureMagicSkillDamage: 0.05 },
      },
      {
        x: 14,
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
      { x: 3, y: 7, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 4, y: 7, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 5, y: 7, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 6, y: 7, type: "Normal Node", stats: { Intelligence: 5 } },

      {
        x: 14,
        y: 7,
        type: "Magic Node",
        stats: { NatureMagicSkillDamage: 0.05 },
      },
      { x: 15, y: 7, type: "Normal Node", stats: { Willpower: 5 } },

      // Ninth Row
      { x: 2, y: 8, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 3, y: 8, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 4, y: 8, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 5, y: 8, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 6, y: 8, type: "Normal Node", stats: { Dexterity: 5 } },

      {
        x: 8,
        y: 8,
        type: "Legendary Node",
        stats: { LuckyHit: 0.15, baseDamage: 1.2 },
      },
      { x: 9, y: 8, type: "Normal Node", stats: { Strength: 5 } },
      { x: 10, y: 8, type: "Normal Node", stats: { Dexterity: 5 } },

      { x: 13, y: 8, type: "Normal Node", stats: { Strength: 5 } },
      { x: 14, y: 8, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 15, y: 8, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 16, y: 8, type: "Normal Node", stats: { Intelligence: 5 } },

      // Tenth Row
      { x: 1, y: 9, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 2, y: 9, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 3, y: 9, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 4, y: 9, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 5, y: 9, type: "Normal Node", stats: { Intelligence: 5 } },

      { x: 8, y: 9, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 9, y: 9, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 10, y: 9, type: "Normal Node", stats: { Intelligence: 5 } },

      { x: 13, y: 9, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 14, y: 9, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 15, y: 9, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 16, y: 9, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 17, y: 9, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 18, y: 9, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 19, y: 9, type: "Normal Node", stats: { Willpower: 5 } },

      // Eleventh Row
      {
        x: 0,
        y: 10,
        type: "Board Attachment Gate",
        stats: { Strength: 5, Intelligence: 5, Willpower: 5, Dexterity: 5 },
      },
      { x: 1, y: 10, type: "Normal Node", stats: { Strength: 5 } },
      { x: 2, y: 10, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 3, y: 10, type: "Normal Node", stats: { Willpower: 5 } },

      { x: 8, y: 10, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 9, y: 10, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 10, y: 10, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 11, y: 10, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 12, y: 10, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 13, y: 10, type: "Normal Node", stats: { Willpower: 5 } },

      { x: 16, y: 10, type: "Normal Node", stats: { Strength: 5 } },
      { x: 17, y: 10, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 18, y: 10, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 19, y: 10, type: "Normal Node", stats: { Willpower: 5 } },
      {
        x: 20,
        y: 10,
        type: "Board Attachment Gate",
        stats: { Strength: 5, Intelligence: 5, Willpower: 5, Dexterity: 5 },
      },

      // Twelvth Row
      { x: 3, y: 11, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 4, y: 11, type: "Normal Node", stats: { Dexterity: 5 } },

      { x: 10, y: 11, type: "Normal Node", stats: { Intelligence: 5 } },

      { x: 13, y: 11, type: "Magic Node", stats: { MaximumLife: 0.02 } },
      { x: 14, y: 11, type: "Magic Node", stats: { DamToCrowd: 0.075 } },
      { x: 15, y: 11, type: "Magic Node", stats: { DamToCrowd: 0.075 } },
      { x: 16, y: 11, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 17, y: 11, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 18, y: 11, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 19, y: 11, type: "Normal Node", stats: { Willpower: 5 } },

      // Thirteenth Row
      { x: 3, y: 12, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 4, y: 12, type: "Normal Node", stats: { Intelligence: 5 } },

      { x: 10, y: 12, type: "Normal Node", stats: { Dexterity: 5 } },

      {
        x: 14,
        y: 12,
        type: "Rare Node",
        name: "Devastation",
        stats: { NatureMagicSkillDamage: 0.1, DamageToElites: 0.16 },
        bonus: {
          NatureMagicSkillDamage: 0.1,
          requirement: { Intelligence: 270 },
        },
      },
      { x: 15, y: 12, type: "Magic Node", stats: { MaximumLife: 0.02 } },
      { x: 16, y: 12, type: "Magic Node", stats: { DamToCrowd: 0.075 } },

      // Fourteenth Row
      { x: 3, y: 13, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 4, y: 13, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 5, y: 13, type: "Magic Node", stats: { ResistanceToAll: 0.02 } },
      {
        x: 6,
        y: 13,
        type: "Rare Node",
        name: "Suffused Resilience",
        stats: { DamageTakenOverTimeReduction: 0.065, ResistanceToAll: 0.04 },
        bonus: { ResistanceToAll: 0.04, requirement: { TODO: "TODO" } },
      },
      { x: 8, y: 13, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 9, y: 13, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 10, y: 13, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 11, y: 13, type: "Normal Node", stats: { Armor: 50 } },

      // Fifteenth Row
      {
        x: 4,
        y: 14,
        type: "Magic Node",
        stats: { DamageTakenOverTimeReduction: 0.032 },
      },
      {
        x: 5,
        y: 14,
        type: "Magic Node",
        stats: { ResistanceToAll: 0.02 },
      },
      {
        x: 6,
        y: 14,
        type: "Magic Node",
        stats: { DamageTakenOverTimeReduction: 0.032 },
      },
      {
        x: 7,
        y: 14,
        type: "Magic Node",
        stats: { ResistanceToAll: 0.02 },
      },
      {
        x: 8,
        y: 14,
        type: "Normal Node",
        stats: { Intelligence: 5 },
      },
      {
        x: 9,
        y: 14,
        type: "Normal Node",
        stats: { Strength: 5 },
      },

      { x: 11, y: 14, type: "Magic Node", stats: { ResistanceToAll: 0.02 } },
      {
        x: 11,
        y: 14,
        type: "Rare Node",
        name: "Denial",
        stats: { ResistanceToAll: 0.04, Armor: 100 },
        bonus: { ResistanceToAll: 0.04, requirement: { TODO: "TODO" } },
      },

      // Sixteenth Row
      { x: 7, y: 15, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 8, y: 15, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 9, y: 15, type: "Normal Node", stats: { Intelligence: 5 } },

      { x: 11, y: 15, type: "Magic Node", stats: { ResistanceToAll: 0.02 } },
      { x: 12, y: 15, type: "Magic Node", stats: { Armor: 50 } },

      // Seventheen Row
      { x: 8, y: 16, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 9, y: 16, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 10, y: 16, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 11, y: 16, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 12, y: 16, type: "Magic Node", stats: { ResistanceToAll: 0.02 } },

      // Eighteenth Row
      { x: 9, y: 17, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 10, y: 17, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 11, y: 17, type: "Normal Node", stats: { Strength: 5 } },

      // Nineteenth Row
      { x: 9, y: 18, type: "Normal Node", stats: { Strength: 5 } },
      { x: 10, y: 18, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 11, y: 18, type: "Normal Node", stats: { Dexterity: 5 } },

      // Twentieth Row
      { x: 9, y: 19, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 10, y: 19, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 11, y: 19, type: "Normal Node", stats: { Willpower: 5 } },

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

const board = new BasicBoard();
board.printBoard();

// Rotate the board
let rotatedBoard = RotateBoard(board, 3);

console.log("Rotated board:");
PrintBoard(rotatedBoard);
