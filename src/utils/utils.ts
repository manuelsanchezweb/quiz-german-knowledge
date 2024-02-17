export const getFinalResultByScore = (score: number) => {
  if (score < 3) {
    return `Es sieht so aus, als wären Sie noch nicht lange im Land der deutschen Grammatik unterwegs, nicht wahr? Mit nur ${score} Punkten haben Sie noch einen langen Weg vor sich!`
  } else if (score < 5) {
    return `Nun, mit ${score} Punkten haben Sie bewiesen, dass Sie schon einige Male durch die Welt der deutschen Grammatik gereist sind, aber ein wahrer Meister sind Sie noch nicht.`
  } else if (score < 8) {
    return `Nicht schlecht! ${score} beeindruckende Punkte! Sie sind der Perfektion in der deutschen Grammatik schon recht nahe gekommen!`
  } else {
    return `Unübertroffen! Sie sind ein wahrer Meister der deutschen Grammatik mit ${score} korrekten Antworten!`
  }
}
