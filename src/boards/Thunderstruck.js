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
      {
        x: 2,
        y: 1,
        type: "Magic Node",
        stats: { CriticalStrikeDamOneHand: 0.075 },
      },
      { x: 5, y: 1, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 6, y: 1, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 7, y: 1, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 8, y: 1, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 9, y: 1, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 10, y: 1, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 11, y: 1, type: "Normal Node", stats: { Strength: 5 } },
      { x: 12, y: 1, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 13, y: 1, type: "Normal Node", stats: { Intelligence: 5 } },

      // Third Row
      { x: 1, y: 2, type: "Magic Node", stats: { VulnerableDamage: 0.05 } },
      {
        x: 2,
        y: 2,
        type: "Rare Node",
        name: "Tempest",
        stats: { CriticalStrikeDamage: 0.15, VulnerableDamage: 0.1 },
        bonus: {
          CriticalStrikeDamage: 0.15,
          requirement: { Dexterity: 260, Willpower: 350 },
        },
      },
      {
        x: 3,
        y: 2,
        type: "Magic Node",
        stats: { CriticalStrikeDamOneHand: 0.075 },
      },
      { x: 4, y: 2, type: "Normal Node", stats: { Strength: 5 } },
      { x: 5, y: 2, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 6, y: 2, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 7, y: 2, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 8, y: 2, type: "Normal Node", stats: { Intelligence: 5 } },

      { x: 11, y: 2, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 12, y: 2, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 13, y: 2, type: "Normal Node", stats: { Strength: 5 } },

      // Fourth Row
      {
        x: 2,
        y: 3,
        type: "Magic Node",
        stats: { CriticalStrikeDamOneHand: 0.075 },
      },
      { x: 3, y: 3, type: "Magic Node", stats: { VulnerableDamage: 0.05 } },
      { x: 4, y: 3, type: "Normal Node", stats: { Dexterity: 5 } },

      { x: 12, y: 3, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 13, y: 3, type: "Normal Node", stats: { Dexterity: 5 } },

      // Fifth Row
      { x: 2, y: 4, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 3, y: 4, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 4, y: 4, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 5, y: 4, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 13, y: 4, type: "Magic Node", stats: { PotionHealing: 0.02 } },

      // Sixth Row
      { x: 1, y: 5, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 2, y: 5, type: "Normal Node", stats: { Willpower: 5 } },

      { x: 4, y: 5, type: "Normal Node", stats: { Dexterity: 5 } },
      {
        x: 5,
        y: 5,
        type: "Legendary Node",
        name: "Thunderstruck",
        stats: { StormSkillsCriticalStrikeDamageImmobilizedVulnerable: 0.3 },
      },
      { x: 6, y: 5, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 7, y: 5, type: "Normal Node", stats: { Willpower: 5 } },

      { x: 12, y: 5, type: "Magic Node", stats: { MaximumLife: 0.02 } },
      {
        x: 13,
        y: 5,
        type: "Rare Node",
        name: "Restorative",
        stats: { PotionHealing: 0.04, MaximumLife: 0.04 },
        bonus: { PotionHealing: 0.04, requirement: { TODO: "TODO" } },
      },

      // Seventh Row
      { x: 1, y: 6, type: "Normal Node", stats: { Strength: 5 } },
      { x: 2, y: 6, type: "Normal Node", stats: { Intelligence: 5 } },

      { x: 5, y: 6, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 6, y: 6, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 7, y: 6, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 8, y: 6, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 9, y: 6, type: "Normal Node", stats: { Willpower: 5 } },

      { x: 11, y: 6, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 12, y: 6, type: "Magic Node", stats: { PotionHealing: 0.02 } },
      { x: 13, y: 6, type: "Magic Node", stats: { MaximumLife: 0.02 } },
      { x: 14, y: 6, type: "Magic Node", stats: { PotionHealing: 0.02 } },

      // Eighth Row
      { x: 1, y: 7, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 2, y: 7, type: "Normal Node", stats: { Intelligence: 5 } },

      { x: 5, y: 7, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 6, y: 7, type: "Normal Node", stats: { Intelligence: 5 } },

      { x: 8, y: 7, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 9, y: 7, type: "Normal Node", stats: { Intelligence: 5 } },

      { x: 11, y: 7, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 12, y: 7, type: "Normal Node", stats: { Willpower: 5 } },

      { x: 14, y: 7, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 15, y: 7, type: "Normal Node", stats: { Willpower: 5 } },

      // Ninth Row
      { x: 1, y: 8, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 2, y: 8, type: "Normal Node", stats: { Willpower: 5 } },

      { x: 6, y: 8, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 7, y: 8, type: "Normal Node", stats: { Willpower: 5 } },

      { x: 9, y: 8, type: "Normal Node", stats: { Strength: 5 } },
      { x: 10, y: 8, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 11, y: 8, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 12, y: 8, type: "Normal Node", stats: { Willpower: 5 } },

      { x: 14, y: 8, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 15, y: 8, type: "Normal Node", stats: { Willpower: 5 } },

      // Tenth Row
      { x: 1, y: 9, type: "Normal Node", stats: { Intelligence: 5 } },

      { x: 6, y: 9, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 7, y: 9, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 8, y: 9, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 9, y: 9, type: "Normal Node", stats: { Willpower: 5 } },

      { x: 11, y: 9, type: "Normal Node", stats: { Strength: 5 } },
      { x: 12, y: 9, type: "Normal Node", stats: { Willpower: 5 } },

      { x: 14, y: 9, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 15, y: 9, type: "Normal Node", stats: { Willpower: 5 } },

      // Eleventh Row
      {
        x: 0,
        y: 10,
        type: "Board Attachment Gate",
        stats: { Strength: 5, Intelligence: 5, Willpower: 5, Dexterity: 5 },
      },
      { x: 1, y: 10, type: "Normal Node", stats: { Strength: 5 } },

      { x: 8, y: 10, type: "Normal Node", stats: { Intelligence: 5 } },

      {
        x: 11,
        y: 10,
        type: "Magic Node",
        stats: { CriticalStrikeDamOneHand: 0.075 },
      },

      { x: 14, y: 10, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 15, y: 10, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 16, y: 10, type: "Normal Node", stats: { Strength: 5 } },
      { x: 17, y: 10, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 18, y: 10, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 19, y: 10, type: "Normal Node", stats: { Dexterity: 5 } },
      {
        x: 20,
        y: 10,
        type: "Board Attachment Gate",
        stats: { Strength: 5, Intelligence: 5, Willpower: 5, Dexterity: 5 },
      },

      // Twelvth Row
      { x: 1, y: 11, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 2, y: 11, type: "Normal Node", stats: { Intelligence: 5 } },

      { x: 6, y: 11, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 7, y: 11, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 8, y: 11, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 9, y: 11, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 10, y: 11, type: "Magic Node", stats: { DamCrowdControl: 0.075 } },
      {
        x: 11,
        y: 11,
        type: "Rare Node",
        name: "Deluge",
        stats: { CriticalStrikeDamage: 0.15, DamCrowdControl: 0.15 },
        bonus: {
          CriticalStrikeDamage: 0.15,
          requirement: { Intelligence: 260, Willpower: 350 },
        },
      },
      {
        x: 12,
        y: 11,
        type: "Magic Node",
        stats: { CriticalStrikeDamOneHand: 0.075 },
      },
      { x: 15, y: 11, type: "Normal Node", stats: { Willpower: 5 } },

      { x: 18, y: 11, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 19, y: 11, type: "Normal Node", stats: { Willpower: 5 } },

      // Thirteenth Row
      { x: 1, y: 12, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 2, y: 12, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 3, y: 12, type: "Normal Node", stats: { Intelligence: 5 } },

      { x: 5, y: 12, type: "Magic Node", stats: { MaximumLife: 0.02 } },
      { x: 6, y: 12, type: "Magic Node", stats: { LightningResistance: 0.06 } },
      { x: 7, y: 12, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 8, y: 12, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 9, y: 12, type: "Normal Node", stats: { Willpower: 5 } },

      {
        x: 11,
        y: 12,
        type: "Magic Node",
        stats: { CriticalStrikeDamOneHand: 0.075 },
      },
      { x: 12, y: 12, type: "Magic Node", stats: { DamCrowdControl: 0.075 } },
      { x: 13, y: 12, type: "Normal Node", stats: { Strength: 5 } },
      { x: 14, y: 12, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 15, y: 12, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 16, y: 12, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 17, y: 12, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 18, y: 12, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 19, y: 12, type: "Normal Node", stats: { Dexterity: 5 } },

      // Fourteenth Row
      { x: 1, y: 13, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 2, y: 13, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 3, y: 13, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 4, y: 13, type: "Magic Node", stats: { LightningResistance: 0.08 } },
      {
        x: 5,
        y: 13,
        type: "Rare Node",
        name: "Lightning Resilence",
        stats: { LightningResistance: 0.12, MaximumLife: 0.04 },
        bonus: { LightningResistance: 0.12, requirement: { TODO: "TODO" } },
      },
      { x: 6, y: 13, type: "Magic Node", stats: { MaximumLife: 0.02 } },

      { x: 12, y: 13, type: "Normal Node", stats: { Willpower: 5 } },

      { x: 14, y: 13, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 15, y: 13, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 16, y: 13, type: "Magic Node", stats: { Intelligence: 7 } },
      {
        x: 17,
        y: 13,
        type: "Magic Node",
        stats: { DamageReductionFromVul: 0.02 },
      },

      // Fifteenth Row
      { x: 6, y: 14, type: "Magic Node", stats: { LightningResistance: 0.06 } },
      { x: 7, y: 14, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 8, y: 14, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 9, y: 14, type: "Normal Node", stats: { Strength: 5 } },
      { x: 10, y: 14, type: "Normal Node", stats: { Willpower: 5 } },

      { x: 12, y: 14, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 13, y: 14, type: "Normal Node", stats: { Willpower: 5 } },

      { x: 15, y: 14, type: "Normal Node", stats: { Intelligence: 5 } },
      {
        x: 16,
        y: 14,
        type: "Magic Node",
        stats: { DamageReductionFromVul: 0.02 },
      },
      {
        x: 17,
        y: 14,
        type: "Rare Node",
        name: "Hubris",
        stats: { DamageReductionFromVul: 0.04, Willpower: 10 },
        bonus: {
          DamageReductionFromVul: 0.04,
          requirement: { Intelligence: 260 },
        },
      },
      {
        x: 18,
        y: 14,
        type: "Magic Node",
        stats: { DamageReductionFromVul: 0.02 },
      },

      // Sixteenth Row
      { x: 7, y: 15, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 8, y: 15, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 9, y: 15, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 10, y: 15, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 11, y: 15, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 12, y: 15, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 13, y: 15, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 14, y: 15, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 15, y: 15, type: "Glyph Socket" },

      { x: 17, y: 15, type: "Magic Node", stats: { Intelligence: 7 } },

      // Seventheen Row
      { x: 10, y: 16, type: "Normal Node", stats: { Dexterity: 5 } },

      { x: 12, y: 16, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 13, y: 16, type: "Normal Node", stats: { Strength: 5 } },
      { x: 14, y: 16, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 15, y: 16, type: "Normal Node", stats: { Willpower: 5 } },

      // Eighteenth Row
      { x: 10, y: 17, type: "Normal Node", stats: { Willpower: 5 } },

      { x: 13, y: 17, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 14, y: 17, type: "Magic Node", stats: { Dexterity: 7 } },
      { x: 15, y: 17, type: "Magic Node", stats: { StormSkillDamage: 0.05 } },

      // Nineteenth Row
      { x: 10, y: 18, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 11, y: 18, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 12, y: 18, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 13, y: 18, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 14, y: 18, type: "Magic Node", stats: { StormSkillDamage: 0.05 } },
      {
        x: 15,
        y: 18,
        type: "Rare Node",
        name: "Storm Caller",
        stats: { StormSkillDamage: 0.1, Willpower: 10 },
        bonus: { StormSkillDamage: 0.1, requirement: { Dexterity: 260 } },
      },
      { x: 16, y: 18, type: "Magic Node", stats: { Dexterity: 7 } },

      // Twentieth Row
      { x: 10, y: 19, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 10, y: 19, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 10, y: 19, type: "Normal Node", stats: { Dexterity: 5 } },

      { x: 15, y: 19, type: "Magic Node", stats: { StormSkillDamage: 0.05 } },

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
let rotatedBoard = RotateBoard(board, 1);

console.log("Rotated board:");
PrintBoard(rotatedBoard);
