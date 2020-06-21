export function tokenize(text: string) {
  let tokens = text.replace(/\(/g, "( ").replace(/\)/g, " )").split(/\s+/);
  let string_parts: string[] = [];
  let new_tokens: string[] = [];
  tokens.forEach(token => {
    if (token.startsWith("\"")) {
      string_parts.push(token);
    } else if (token.endsWith("\"")) {
      string_parts.push(token);
      new_tokens.push(string_parts.join(" ").replace(/["]/g, ""));
    } else {
      new_tokens.push(token);
      string_parts = [];
    }
  });
  return new_tokens;
}
