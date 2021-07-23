function romanToInt(string) {
  if (string == null) {
    return -1;
  }
  var intNumber = charToInt(string.charAt(0));
  var previousRoman, currentRoman;

  for (var i = 1; i < string.length; i++) {
    currentRoman = charToInt(string.charAt(i));
    previousRoman = charToInt(string.charAt(i - 1));
    if (currentRoman <= previousRoman) {
      intNumber += currentRoman;
    } else {
      intNumber = intNumber - previousRoman * 2 + currentRoman;
    }
  }
  return intNumber;
}

function charToInt(c) {
  switch (c) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
}

console.log(romanToInt("XC"));
