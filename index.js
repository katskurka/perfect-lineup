const testLineup = ['1B', '2B', '3B', 'C', 'OF', 'OF', 'OF', 'P', 'SS']

// Check Player Team
function checkTeams(lineup) {
  let playerTeams = true

  for (let i = 0; i < lineup.length; i++) {
    if (lineup.filter(player => player.teamId === lineup[i].teamId).length > 2) {
      playerTeams = false
    }

    return playerTeams
  }
}
// Check # of Games
function checkGames(lineup) {
  let validGames = true

  for (let i = 0; i < lineup.length; i++) {
    if (lineup.filter(player => player.gameId === lineup[i].gameId).length > 3) {
      validGames = false
    }

    return validGames
  }
}

// Check Player Positions
function playerPosition(lineup, testLineup) {
  let lineupPositions = true
  let positionsArr = lineup.map(position => position.position).sort()

  if (positionsArr.length !== testLineup.length) return false

  positionsArr.forEach((position, index) => {
    if (position !== testLineup[index]) {
      lineupPositions = false
    }
  })

  return lineupPositions
}

// Check Team Salarys
const checkSalary = (lineup) => {
  let totalSalary = 0

  lineup.forEach(player => totalSalary += player.salary)

  return (totalSalary <= 45000) ? true : false
}

const validateLineup = (lineup) => {
  return (checkSalary(lineup) && playerPosition(lineup, testLineup) && checkTeams(lineup) && checkGames(lineup))
}

module.exports = validateLineup
