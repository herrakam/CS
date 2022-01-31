function dec2bin(dicimal) {
  let num = dicimal;
  let answer = [];
  let last;
  while (true) {
    if (num === 1) {
      answer.push(num);
      break;
    }
    last = Math.floor(num % 2);
    num = Math.floor(num / 2);
    console.log(num, last);
    answer.push(last);
  }
  return answer;
}

function bin2dec(bin) {}

console.log(dec2bin(6));
