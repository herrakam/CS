const or = require("./logicalGate").or;
const and = require("./logicalGate").and;
const xor = require("./logicalGate").xor;

function halfAdder(bool1, bool2) {
  const sum = xor(bool1, bool2);
  const carry = and(bool1, bool2);
  return [carry, sum];
}
function fullAdder(bool1, bool2, carry) {
  const [carry1, sum1] = halfAdder(bool1, bool2);
  const [carry2, sum2] = halfAdder(carry, sum1);
  const carryOutput = or(carry2, carry1);
  return [carryOutput, sum2];
}

function byteAdder(byteA, byteB) {
  let answer = [];
  let arr1, arr2;
  let carry = false;
  byteA.length >= byteB.length // 둘중 긴 쪽을 arr1, 짧은쪽을 arr2
    ? ([arr1, arr2] = [byteA, byteB])
    : ([arr1, arr2] = [byteB, byteA]);
  for (let i = 0; i < arr1.length; i++) {
    const bit1 = arr1[i];
    let bit2;
    i > arr2.length ? (bit2 = 0) : (bit2 = arr2[i]);
    console.log(bit1, bit2);
    let [carryOutput, sum] = fullAdder(bit1, bit2, carry);
    carry = carryOutput;
    answer.push(sum);
  }
  answer.push(carry);
  return answer;
}

const byteA = [true, true, false, false, true, false, true, false];
const byteB = [true, true, false, true, true, false, false, true];

console.log(byteAdder(byteA, byteB));
// console.log(fullAdder(true, true, true));
