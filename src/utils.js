export function Dice (side = 6, count = 1, previous = 0) {
  const value = Math.floor( Math.random() * side + 1 ) + previous
  return count > 1 ? Dice( side, count - 1, value) : value
}

export function JtagDice (side = 6, count = 1) {
  var result = 0;
  for (var i = 0 ; i < count ; i++) {
      result += Math.floor( Math.random() * side + 1);
  }
  return result;
}

// export function countXp(gain = null) {
//   const value =0 
//   return value += gain
// }