function isValid(s: string): boolean {
  const stack: string[] = [];
  for (let c of s) {
    // if c is an opening paren.
    if (c === '(' || c === '[' || c === '{') {
      //    add it to the stack
      stack.push(c);
      // else if it's a closing paren
    } else {
      // if it doesn't match
      if (
        !stack.length ||
        (c === ')' && stack[stack.length - 1] !== '(') ||
        (c === '}' && stack[stack.length - 1] !== '{') ||
        (c === ']' && stack[stack.length - 1] !== '[')
      ) {
        //    return false
        return false;
        // else
      } else {
        // pop from stack
        stack.pop();
      }
    }
  }
  return !stack.length;
}

// const input: string = '('; // false
// const input: string = '()'; // true
// const input: string = '()[]{}'; // true
// const input: string = '(]'; // false
const input: string = '([{}])'; // true
console.log(isValid(input));
