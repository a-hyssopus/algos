// const reverseString = s => {
//     const initialLength = s.length;
//     for (let i = 0, k = s.length * 2 - 1; i < s.length; i++, k--) {
//         s[k] = s[i];
//     }
//     s.splice(0, initialLength);
//     return s;
// };
//
// reverseString(["h", "e", "l", "l", "o"])

const reverseString = s => {
    let pocketVariable;
    for (let i = 0; i < Math.ceil(s.length / 2); i++) {
        pocketVariable = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = pocketVariable;
    }
    return s;
};

reverseString(["h", "e", "l", "l", "o"])
