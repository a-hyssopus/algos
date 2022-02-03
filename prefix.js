// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".

const longestCommonPrefix = function(strs) {

    for (let i = 0; i < strs[0].length; i++) {
        let currentChar = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (currentChar !== strs[j][i]) {
                return strs[0].substr(0, i)
            }
        }
    }

    return '';
};

console.log(longestCommonPrefix(["flower","flow","flight"]))

