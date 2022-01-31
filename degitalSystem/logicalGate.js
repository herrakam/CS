function and(bool1, bool2) {
  return bool1 === true && bool2 === true ? true : false;
}

function or(bool1, bool2) {
  return bool1 === true && bool2 === true ? true : false;
}

function nand(bool1, bool2) {
  return !and(bool1, bool2);
}

function xor(bool1, bool2) {
  return bool1 !== bool2 ? true : false;
}

exports.module = {
  and: and,
  or: or,
  nand: nand,
  xor: xor,
};
