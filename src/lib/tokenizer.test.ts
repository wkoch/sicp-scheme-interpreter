import {
  assert,
  assertArrayContains,
  assertEquals,
  assertMatch,
  assertNotEquals,
  assertStrictEquals,
  assertStringContains,
  assertThrows,
  equal,
  unimplemented,
  unreachable,
} from "../deps.ts";

import { tokenize } from "./tokenizer.ts";

let data = [
  {
    code: "(1)",
    result: ["(", "1", ")"]
  },
  {
    code: "(+ 1 2)",
    result: ["(", "+", "1", "2", ")"]
  },
  {
    code: "(+ 1 (* 2 2))",
    result: ["(", "+", "1", "(", "*", "2", "2", ")", ")"]
  },
  {
    code: "(define pi 3.14159)",
    result: ["(", "define", "pi", "3.14159", ")"],
  },
  {
    code: '(display "Hello World")',
    result: ["(", "display", "Hello World", ")"]
  },
  {
    code: '(display (+ "Hello" " World!"))',
    result: ["(", "display", "(", "+", "Hello", " World!", ")", ")"]
  }
]

// Test Code
data.forEach(e => {
  Deno.test(`${e.code} should tokenize correctly`, () => {
    let tokenized = tokenize(e.code);
    assertEquals(tokenized, e.result);
  });
});