import {
    error,
    success,
    warning,
    errorLog,
    successLog,
    warningLog,
  } from "https://deno.land/x/colorlog/mod.ts";

// Validates the syntax
export function validate(tokens: string[]) {
  let opening_tags = 0;
  let closing_tags = 0;
  opening_tags = tokens.filter((e: string) => e == "(").length;
  closing_tags = tokens.filter((e: string) => e == ")").length;
  if (opening_tags == closing_tags) {
    successLog("\n> Checked: All OK.\n");
  } else {
    // throw (error("\n> Error: Missing Parenthesis!\n"));
  }
}
