// First board
import { ParagonBoard } from "./ParagonBoard";
import { ParagonTile } from "./ParagonTile";

export class BasicBoard extends ParagonBoard {
  constructor() {
    super(21, 21);
    this.initializeTiles();
  }

  initializeTiles() {
    // Define starting tile and ending tile (link to next board)
    // EndTile One at 3 O'clock, Two at 12 O'clock and Three at 9 O'clock
    this.startTile = { x: 10, y: 0 };
    this.endTileOne = { x: 0, y: 0 };
    this.endTileTwo = { x: 0, y: 0 };
    this.endTileThree = { x: 0, y: 0 };

    const tileConfigs = [
      // First Row
      {
        x: 10,
        y: 0,
        type: "Board Attachment Gate",
        stats: { Strength: 5, Intelligence: 5, Willpower: 5, Dexterity: 5 },
      },

      // Second Row
      { x: 8, y: 1, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 9, y: 1, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 10, y: 1, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 11, y: 1, type: "Normal Node", stats: { Strength: 5 } },
      { x: 12, y: 1, type: "Normal Node", stats: { Dexterity: 5 } },

      // Third Row
      { x: 8, y: 2, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 9, y: 2, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 10, y: 2, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 11, y: 2, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 12, y: 2, type: "Normal Node", stats: { Dexterity: 5 } },

      // Fourth Row
      { x: 8, y: 3, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 12, y: 3, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 15, y: 3, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 16, y: 3, type: "Normal Node", stats: { Dexterity: 5 } },
      {
        x: 17,
        y: 3,
        type: "Legendary Node",
        stats: { Damage: 0.3 /* For 5s after spending 75 spirit */ },
      },

      // Fifth Row
      { x: 8, y: 4, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 9, y: 4, type: "Normal Node", stats: { Strength: 5 } },
      { x: 10, y: 4, type: "Magic Node", stats: { PotionHealing: 0.02 } },
      { x: 11, y: 4, type: "Magic Node", stats: { LifeRegenerationWhile: 5 } },
      { x: 12, y: 4, type: "Magic Node", stats: { PotionHealing: 0.02 } },
      { x: 14, y: 4, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 15, y: 4, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 16, y: 4, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 17, y: 4, type: "Normal Node", stats: { Willpower: 5 } },

      // Sixth Row
      { x: 8, y: 5, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 9, y: 5, type: "Normal Node", stats: { Willpower: 5 } },
      {
        x: 11,
        y: 5,
        type: "Rare Node",
        name: "Recuperate",
        stats: { PotionHealing: 0.04, LifeRegenerationWhile: 10 },
        bonus: { PotionHealing: 0.04, requirement: { TODO: "TODO" } },
      },
      { x: 12, y: 5, type: "Magic Node", stats: { PotionHealing: 0.02 } },
      { x: 13, y: 5, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 14, y: 5, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 16, y: 5, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 17, y: 5, type: "Normal Node", stats: { Intelligence: 5 } },

      // Seventh Row
      { x: 8, y: 6, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 9, y: 6, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 12, y: 6, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 14, y: 6, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 15, y: 6, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 16, y: 6, type: "Normal Node", stats: { Intelligence: 5 } },

      // Eighth Row
      { x: 8, y: 7, type: "Magic Node", stats: { BasicSkillDamage: 0.175 } },
      { x: 12, y: 7, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 15, y: 7, type: "Normal Node", stats: { Willpower: 5 } },

      // Ninth Row
      { x: 5, y: 8, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 6, y: 8, type: "Magic Node", stats: { CoreSkillDamage: 0.07 } },
      { x: 7, y: 8, type: "Magic Node", stats: { BasicSkillDamage: 0.175 } },
      { x: 8, y: 8, type: "Magic Node", stats: { CoreSkillDamage: 0.07 } },
      { x: 10, y: 8, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 11, y: 8, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 12, y: 8, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 13, y: 8, type: "Normal Node", stats: { Strength: 5 } },
      { x: 14, y: 8, type: "Magic Node", stats: { SpiritOnKill: 1 } },
      { x: 15, y: 8, type: "Magic Node", stats: { MaximumSpirit: 4 } },
      { x: 16, y: 8, type: "Magic Node", stats: { MaximumSpirit: 4 } },
      { x: 17, y: 8, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 18, y: 8, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 19, y: 8, type: "Normal Node", stats: { Dexterity: 5 } },

      // Tenth Row
      { x: 1, y: 9, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 2, y: 9, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 3, y: 9, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 4, y: 9, type: "Normal Node", stats: { Dexterity: 5 } },
      { x: 5, y: 9, type: "Normal Node", stats: { Intelligence: 5 } },
      {
        x: 7,
        y: 9,
        type: "Rare Node",
        name: "Spiritual Power",
        stats: { CoreSkillDamage: 0.14, BasicSkillDamage: 0.35 },
        bonus: {
          CoreSkillDamage: 0.14,
          requirement: { Intelligence: 260, Willpower: 350 },
        },
      },
      { x: 8, y: 9, type: "Magic Node", stats: { CoreSkillDamage: 0.07 } },
      { x: 9, y: 9, type: "Normal Node", stats: { Willpower: 5 } },
      { x: 10, y: 9, type: "Normal Node", stats: { Intelligence: 5 } },
      { x: 12, y: 9, type: "Normal Node", stats: { Willpower: 5 } },
      {
        x: 15,
        y: 9,
        type: "Rare Node",
        name: "Reclamation",
        stats: { MaximumSpirit: 8, SpiritOnKill: 2 },
        bonus: {
          MaximumSpirit: 8,
          requirement: { Intelligence: 270 },
        },
      },
      { x: 16, y: 9, type: "Magic Node", stats: { SpiritOnKill: 1 } },
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
    this.endTileOne = { x, y };
    this.endTileTwo = { x: 0, y: 0 };
    this.endTileThree = { x: 0, y: 0 };
  }

  getEndTile() {
    return [this.endTileOne, this.endTileTwo, this.endTileThree];
  }
}
