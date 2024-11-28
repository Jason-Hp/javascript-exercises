const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let checker = string.toLowerCase().split('').filter((char)=>alphanumerical.includes(char)).join("");
    let reversed = checker.split('').reverse().join('');
    return checker === reversed;
};

// Do not edit below this line
module.exports = palindromes;
