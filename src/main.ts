import {
  error,
  success,
  warning,
  errorLog,
  successLog,
  warningLog,
} from "https://deno.land/x/colorlog/mod.ts";

import { tokenize } from "./lib/tokenizer.ts"
import { validate } from "./lib/validator.ts"
import { parse } from "./lib/parser.js"

// APP
function add(a: number, b: number) {
  return a + b;
}
function subtract(a: number, b: number) {
  return a - b;
}
// function addList(list) { return list.reduce((acc, n) => Number(acc) + Number(n)); }
// function subtractList(list) { return list.reduce((acc, n) => Number(acc) - Number(n)); }

let keywords = {
  "+": add,
  "-": subtract,
  "print": console.log,
};

// let program = [];

// Run

let sample = `(display (+ 1 20)`;

validate(tokenize(sample));
console.log("\n");
console.log(parse(tokenize(sample)));