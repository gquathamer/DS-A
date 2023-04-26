function solution(sequence) {
 if (sequence.length == 2) return true;

 var error = 0;

 for (var i = 0; i < sequence.length - 1; i++) {
  // if current value is greater than next value
  if (sequence[i] >= sequence[i + 1]) {
   // Test whether stepping back or forwards can bridge the hump or pothole
   var noStepBack = sequence[i - 1] && sequence[i - 1] >= sequence[i + 1];
   var noStepFoward = sequence[i + 2] && sequence[i] >= sequence[i + 2];
   // We only test for bridge gaps when i > 0
   if (i > 0 && noStepBack && noStepFoward) {
    // Cannot step back over gap forwards or backwards
    // Counts as two errors ONLY WHEN BOTH PRESENT
    error += 2;
   } else {
    // Typical error
    error++;
   }
  }

  // Early dropout cause if you ever get more than one error, then its game over anyway
  if (error > 1) return false;
 }

 return true;
}

solution([1, 2, 1, 2]);
