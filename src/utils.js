export function Dice (side = 6, count = 1, previous = 0) {
  const value = Math.floor( Math.random() * side + 1 ) + previous
  return count > 1 ? Dice( side, count - 1, value) : value
}
