// APP
function add(list) { return list.reduce((acc, n) => Number(acc) + Number(n)); }
function subtract(list) { return list.reduce((acc, n) => Number(acc) - Number(n)); }

let keywords = {
    "+": add,
    "-": subtract,
    "print": console.log
}

let program = [];

function tokenize(text) {
    let tokens = "(+ 10 22)".split("");
    return tokens
}

function parse(tokens) {
    let program = {};
    let level = 0;
    let block = 0;
    let changed_block = false;
    let current_level = {};
    let last_block = {};
    tokens.forEach(token => {
        // console.log("\n\n");
        // console.log(program);
        switch (token) {
            case "(":
                // List
                current_level = {
                    "level": level,
                    "block": block,
                    "type": "list",
                    "children": []
                };
                // block += 1;
                level += 1;
                program = current_level;
                current_level = {}
                break;
            case " ":
                console.log(`${block}: ${token}`);
                block += 1;
                // changed_block = true;
                break;
            case ")":
                // Close List
                level -= 1;
                block = 0;
                program.children = current_level;
                break;
            case "+":
                // Add function
                current_level = {
                    "block": block,
                    "type": "function",
                    "value": add,
                    "children": []
                };
                // level += 1;
                block = 0;
                break;
            default:
                // Number
                if (block == last_block.block) {
                    last_block = {
                        "block": block,
                        "type": "Number",
                        "value": last_block.value + token
                    }
                    current_level.children[block] = last_block;
                } else {
                    last_block = {
                        "block": block,
                        "type": "Number",
                        "value": token
                    };
                    current_level.children.push(last_block);
                }
                break;
        }
    });
    return program;
}

// Run


let sample = "(- 12 2)";

console.log(tokenize(sample));
console.log("\n");
console.log(parse(tokenize(sample)));