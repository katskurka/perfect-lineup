// Lineup Rules
// The total salary of all players in a lineup may not exceed $45,000
// Lineups may not contain more than 2 players from a single team
// Lineups may not contain more than 3 players from a single game
// Lineups must contain exactly 3 players with the position of 'OF' and must also contain exactly 1 player from each of the following positions: 'P', 'C', '1B', '2B', '3B', 'SS'

const testLineup = ['1B', '2B', '3B', 'C', 'OF', 'OF', 'OF', 'P', 'SS']

// Check Player Team
function checkTeams(lineup) {
  let playerTeams = true

  for (let i = 0; i < lineup.length; i++) {
    if (lineup.filter(player => player.teamID === lineup[i].teamID).length > 2) {
      playerTeams = false
    }

    return playerTeams
  }
}
// Check # of Games

// Check Player Positions

function playerPosition(lineup, testLineup) {
  let lineupPositions = true
  let positionsArr = lineup.map(position => position.position).sort()

  if (positionsArr.length !== testLineup.length) return false

  positionsArr.forEach((position,index) => {
    if (position !== testLineup[index]) {
      lineupPositions = false
    }
  })

  return lineupPositions
}

// Check Team Salary

const checkSalary = (lineup) => {
  let totalSalary = 0

  lineup.forEach(player => totalSalary += player.salary)

  return (totalSalary <= 45000) ? true : false
}

const validateLineup = (lineup) => {
  return (checkSalary(lineup) && playerPosition(lineup, testLineup) && checkTeams(lineup) && checkGames(lineup))
}

module.exports = validateLineup
