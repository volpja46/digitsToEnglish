// Task: turn numeric digits into english words. For example, input (9410193) & RESULT = "ninety-four million one hundred one thousand ninety-three"

//  chunks from 0-999- @ most will be 3 digits
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

// 3


function isNotNull (item) {
  return !!item;
  // double bang operator "!!"
  // forces true or false value!
}

// translate a num from 1-999 into English
function toEnglish(num) {
  var thousands, hundredsPlace, tensPlace, onesPlace, words = [];

  if(num < 20) {
    return ones[num - 1];
  }

  if(num < 100) {
    onesPlace = num % 10;
    tensPlace = num / 10 | 0; // equivalent to Math.floor(num / 10)

    words.push(tens[tensPlace - 1]);
    words.push(toEnglish(onesPlace));

    return words.filter(isNotNull).join("-");
  }
