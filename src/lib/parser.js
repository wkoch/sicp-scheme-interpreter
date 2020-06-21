export function parse(tokens) {
    let program = {};
    let current_level = {level: 0, type: "none", value: "", children: []};
  tokens.forEach(token => {
    let level = 0;
    if (token == "(") {
        level += 1;
        current_level = {level: level, type: "list", value: "", children: []};
    
    } else if (token.match(/["].+["]/)) {
        current_level.children.push({level: level, type: "string", value: token});
    } else if (token.match(/\d+/)) {
        current_level.children.push({level: level, type: "number", value: token});
    } else if (token == ")") {
        level -= 1;
        program = current_level
    } else {
        current_level.children.push({level: level, type: "function", value: token});
    }
  });
  return program;

// PROGRAMA ANTERIOR
// let program = {};
// let level = 0;
// let block = 0;
// let changed_block = false;
// let current_level = {};
// let last_block = {};
// tokens.forEach(token => {
//     // console.log("\n\n");
//     // console.log(program);
//     switch (token) {
//         case "(":
//             // List
//             current_level = {
//                 "level": level,
//                 "block": block,
//                 "type": "list",
//                 "children": []
//             };
//             // block += 1;
//             level += 1;
//             program = current_level;
//             current_level = {}
//             break;
//         case " ":
//             console.log(`${block}: ${token}`);
//             block += 1;
//             // changed_block = true;
//             break;
//         case ")":
//             // Close List
//             level -= 1;
//             block = 0;
//             program.children = current_level;
//             break;
//         case "+":
//             // Add function
//             current_level = {
//                 "block": block,
//                 "type": "function",
//                 "value": add,
//                 "children": []
//             };
//             // level += 1;
//             block = 0;
//             break;
//         default:
//             // Number
//             if (block == last_block.block) {
//                 last_block = {
//                     "block": block,
//                     "type": "Number",
//                     "value": last_block.value + token
//                 }
//                 current_level.children[block] = last_block;
//             } else {
//                 last_block = {
//                     "block": block,
//                     "type": "Number",
//                     "value": token
//                 };
//                 current_level.children.push(last_block);
//             }
//             break;
//     }
// });
// return program;
}