// Function to calculate total stats based on the selected tiles in the board

export const calculateBoardStats = (board) => {
    let stats = {
        damage: 0,
        damageReduction: 0,
        strength: 0,
        druidPower: 0
    }

    board.grid.forEach(row => {
        row.forEach(tile => {
            if (tile) {
                if (tile.effect.stat in stats) {
                    stats[tile.effect.stat] += tile.effect.value
                }
            }
        })
    })
    return stats
}