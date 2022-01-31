function and(bool1, bool2) {
  return bool1 && bool2;
}

function or(bool1, bool2) {
  return bool1 || bool2;
}

function nand(bool1, bool2) {
  return !and(bool1, bool2);
}

function xor(bool1, bool2) {
  return bool1 !== bool2;
}

exports.module = {
  and: and,
  or: or,
  nand: nand,
  xor: xor,
};
