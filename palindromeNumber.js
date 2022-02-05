const isPalindrome = function(x) {
    let reversed = 0;

    for (let i = x; i >= 1; i = Math.floor(i/10)) {
        reversed = reversed * 10 + i%10;
    }
    return reversed === x;
};

isPalindrome(21312)
