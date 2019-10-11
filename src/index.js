module.exports = function check(str, bracketsConfig) {
    const stack = []; items = ['(', ')', '{', '}', '[', ']', '|', '|', '1', '2', '3', '4', '5', '6', '7', '8'];

    for (let i = 0; i < str.length; i++) {
        if (items.includes(str[i])) {
            stack.push(str[i]);
        } else {
            if (bracketsConfig.indexOf(str[i]) === str.indexOf(stack[stack.length - 1])) {
                stack.pop();
                } else {
                    return false;
                }
        }
    }

    return stack.length === 0;
}
