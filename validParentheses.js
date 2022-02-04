const isValid = function (s) {
    const pairs = {'(': ')', '[': ']', '{': '}'}

    if (s === '' || s.length % 2 === 1) {
        return false
    }

    const stack = [];
    let currentCharacter = '';
    for (let i = 0; i < s.length; i++) {
        currentCharacter = s[i];
        if (pairs[currentCharacter]) {
            stack.push(currentCharacter);
        } else {
            let valueInStack = stack.pop();
            if (pairs[valueInStack] !== currentCharacter) {
                return false
            }
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
};
