/**
 * Created by Razso on 02-Oct-17.
 */

// Palindrome checker
function palindrome(str) {
    str = document.getElementById("palindromeInput").value;
    document.getElementById("palindromeInput").value = "";
    var lowerCase = str.toLowerCase().replace(/[\W_]/g, '');
    var strToArray = lowerCase.split('');
    var len = strToArray.length;
    if (str.length !== 0) {
        for (var i = 0; i < len / 2; i++) {
            if (strToArray[i] !== strToArray[len - i - 1]) {
                return document.getElementById("palindromeResult").innerHTML = 'That\'s not a palindrome';
            }
        }
        return document.getElementById("palindromeResult").innerHTML = 'That\'s a palindrome';
    }
    return document.getElementById("palindromeResult").innerHTML = 'If you\'re out of ideas, use some of the provided examples';
}

// Reverse a string

function reverseString(str) {
    str = document.getElementById("reverseInput").value;
    document.getElementById("reverseInput").value = "";
    var result = str.split('').reverse().join('');
    if (str.length !== 0 && str.length !== 1) {
        return document.getElementById("reverseResult").innerHTML = result;
    }
    return document.getElementById("reverseResult").innerHTML = 'If you\'re out of ideas, ' +
        'use some of the provided examples';
}

// Title case a string

function titleCase(str) {
    str = document.getElementById("titleInput").value;
    document.getElementById("titleInput").value = "";
    var strToArray = str.split(' ');
    var temp = [];
    if (str.length !== 0) {
    for (var i = 0; (i = strToArray.length); i++) {
        var test = strToArray.splice(0, 1);
        var upperCase = test.toString();
        var text = upperCase.replace(
            upperCase.charAt(0),
            upperCase.charAt(0).toUpperCase()
        );
        temp.push(text);
        var upperCased = temp.join(' ');
    }
    return document.getElementById("titleResult").innerHTML = upperCased;
    }
    return document.getElementById("titleResult").innerHTML = 'I Can\'t \'Title Case\' An Empty Field'  ;
}
