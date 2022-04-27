const repeatingSymbols = string => {
    let symbols = new Map();

    for (let symbol of string) {
        if (symbols.has(symbol)) {
            symbols.set(symbol, symbols.get(symbol) + 1)
        } else {
            symbols.set(symbol, 1)
        }
    }

    return [...symbols].filter(([key, value]) => value > 1).map(([key]) => key);
}

repeatingSymbols(['c', 'a', 'i', 'o', 'p', 'a', 'p', 'p', 'o', 'j'])

// the complexity of this algorithm equals to O(n) for both time and space, where n is the length of string the function receives
