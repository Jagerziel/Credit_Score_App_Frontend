export function calcScoreDesc (score , scoringUpperBound ) {
    for (let i = 0; i < scoringUpperBound.length; i++ ) {
      if (score < scoringUpperBound[i][0]) {
        return scoringUpperBound[i][1]
      }
    }
  }