function dec2bin(dicimal) {
  let num = dicimal;
  let answer = [];
  let last;
  while (true) {
    if (num === 1) {
      answer.push(true);
      break;
    }
    last = Math.floor(num % 2);
    num = Math.floor(num / 2);
    last === 1 ? (last = true) : (last = false);
    answer.push(last);
  }
  return answer;
}

function bin2dec(bin) {
  let answer = 0;
  let multiple = 1;
  for (let i = 0; i < bin.length; i++) {
    let check = bin[i];
    answer += check * multiple;
    multiple *= 2;
  }
  return answer;
}

console.log(bin2dec(dec2bin(6)));
