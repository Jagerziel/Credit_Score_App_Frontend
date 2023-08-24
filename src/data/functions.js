export function calcScoreDesc (score , scoringUpperBound ) {
    for (let i = 0; i < scoringUpperBound.length; i++ ) {
      if (score < scoringUpperBound[i][0]) {
        return scoringUpperBound[i][1]
      }
    }
}

export function calcScore( scoreCard , baseScore , scoreMapping , userInput ) {
    let finalScore = baseScore
    let userInputLen = Object.keys(userInput).length
    
    loop_i: for (let i = 0; i < userInputLen; i++) {
      if (i === 2) { //Monthly Income
        loop_j: for (let j = 0; j < scoreCard[scoreMapping[`item_${i}`]].length; j += 2) {
          // Set Value and check edge cases
          let inputVal = userInput[`item_${i}`]
          if (userInput[`item_2`] > 1000000000) inputVal = 1000000000 
          if (isNaN(userInput[`item_2`])) inputVal = 0
          // Loop through array by 2 to determine if less than stated threshold and add applicable score
          if (inputVal <= scoreCard[scoreMapping[`item_2`]][j]) {
            finalScore += scoreCard[scoreMapping[`item_2`]][j + 1]
            break loop_j
          }
        }
      } else if (i === 3) { // Monthly Debt
        // Adjust Debt Ratio
        let incomeVal = userInput[`item_2`]
        let debtVal = userInput['item_3']
        if (userInput[`item_2`] === 0 || isNaN(userInput[`item_2`])) incomeVal = 0
        if (userInput[`item_2`] > 1000000000) incomeVal = 1000000000
        if (userInput[`item_3`] === 0 || isNaN(userInput[`item_2`])) debtVal = 0
        if (userInput[`item_3`] > 1000000000) debtVal = 1000000000
        let debtRatio = incomeVal !== 0 ? debtVal / incomeVal : 0
        
        loop_j: for (let j = 0; j < scoreCard[`DebtRatio`].length; j += 2) {
          // Loop through array by 2 to determine if less than stated threshold and add applicable score
          if (debtRatio <= scoreCard[`DebtRatio`][j]) {
            finalScore += scoreCard[`DebtRatio`][j + 1]
            break loop_j
          }
        }
      } else if (i === 4) {
        continue
      } else {
        loop_j: for (let j = 0; j < scoreCard[scoreMapping[`item_${i}`]].length; j += 2) {
          // Set Value and check edge cases
          let inputVal = userInput[`item_${i}`]
          if (userInput[`item_${i}`] > 1000000000) inputVal = 1000000000 
          if (isNaN(userInput[`item_${i}`])) inputVal = 0
          // Loop through array by 2 to determine if less than stated threshold and add applicable score
          if (inputVal <= scoreCard[scoreMapping[`item_${i}`]][j]) {
            finalScore += scoreCard[scoreMapping[`item_${i}`]][j + 1]
            break loop_j
          }
        }
      }
    }
    if (finalScore > 850) finalScore = 850
    if (finalScore < 300) finalScore = 300
    return finalScore
}