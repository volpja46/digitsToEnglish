// Task: turn numeric digits into english words. For example, input (9410193) & RESULT = "ninety-four million one hundred one thousand ninety-three"

function breakDownNumber (num){
  var num = 9410193,
  thousands = [];

  while (num > 0){
    thousands.push(num % 1000);
    num = Math.floor(num / 1000);
  }
  return thousands;
}
// breakDownNumber() => [ 193, 410, 9 ]

const ones = [
  "one", "two", "three", "four", "five",
  "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen",
  "sixteen", "seventeen", "eighteen", "nineteen"
];

const tens = [
  "ten", "twenty", "thirty", "forty", "fifty",
  "sixty", "seventy", "eighty", "ninety"
];

const scales = ["thousand", "million", "billion", "trillion"];
