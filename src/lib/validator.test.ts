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
  import { validate } from "./validator.ts";
  
  let data = [
    {
      code: "(1)"
    },
    {
      code: "(+ 1 2)"
    },
    {
      code: "(+ 1 (* 2 2))"
    },
    {
      code: "(define pi 3.14159)"
    },
    {
      code: '(display "Hello World")'
    },
    {
      code: '(display (+ "Hello" " World!"))'
    }
  ]
  
  // Test Code
  data.forEach(e => {
    Deno.test(`${e.code} should be ok`, () => {
      validate(tokenize(e.code));
    });
  });