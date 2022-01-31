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
  console.log(sum1, carry1);
  const [carry2, sum2] = halfAdder(carry, sum1);
  console.log(sum2, carry2);
  const carryOutput = or(carry2, carry1);
  return [carryOutput, sum2];
}
