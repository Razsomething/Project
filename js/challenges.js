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
    var tempResult = str.toLowerCase().split('').reverse().join('');
    var result = tempResult.replace(tempResult.charAt(0), tempResult.charAt(0).toUpperCase());
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
        for (var i = 0;
             (i = strToArray.length); i++) {
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
    return document.getElementById("titleResult").innerHTML = 'I Can\'t \'Title Case\' An Empty Field';
}

// Find the Longest Word in a String

function findLongestWord(str) {
    str = document.getElementById("longest").value;
    document.getElementById("longest").value = "";
    var splitStr = str.split(' ');
    var len = splitStr.length;
    var wordsLength = [];
    if (str.length !== 0) {
        for (var i = 0; i < len; i++) {
            wordsLength.push(splitStr[i].length);
        }

        function sortNumber(a, b) {
            return a - b;
        }

        var orderedLengths = wordsLength.sort(sortNumber);
        var maxLength = orderedLengths.pop();
        return document.getElementById("longestResult").innerHTML = 'The largest word in the sentence is ' +
            maxLength + ' characters long';

    }
    return document.getElementById("longestResult").innerHTML = 'If you\'re out of ideas, ' +
        'use some of the provided examples';
}

// Factorialize a Number

function factorialize() {
    var num = parseInt(document.getElementById('factorializeinput').value, 10);
    document.getElementById('factorializeinput').value = '';
    var result = 1;

    if (num === 0) {
        document.getElementById('factorializeResult').innerHTML = '1';
    } else if (isNaN(num)) {
        document.getElementById('factorializeResult').innerHTML =
            'Please enter a number ';
    } else {
        for (var i = num; i > 0; i--) {
            result = result * i;
            document.getElementById('factorializeResult').innerHTML =
                'The result is ' + result;
        }
    }
}

// // Return Largest Numbers in Arrays
//
// function largestOfFour() {
//     var arr = parseInt(document.getElementById("largest").value, 10);
//     function sort(a, b) {
//         return a - b;
//     }
//     var temp = [];
//     var final = [];
//     for (var i = 0; i < arr.length; i++) {
//         temp.push(arr[i].sort(sort));
//     }
//     for (var j = 0; j < temp.length; j++) {
//         final.push(temp[j].pop());
//     }
//     document.getElementById('largestResult').innerHTML = final;
// }

// Confirm the ending

function confirmEnding(str, target) {
    str = document.getElementById('confirmstr').value;
    target = document.getElementById('confirmtarget').value;
    document.getElementById('confirmstr').value = '';
    document.getElementById('confirmtarget').value = '';

    var strLen = str.length;
    var tarLen = target.length;
    if (str.substring(strLen - tarLen) !== target) {
        document.getElementById('confirmResult').innerHTML = 'Your phrase doesn\'t end with that ending'
    } else if (str.substring(strLen - tarLen) === target) {
        document.getElementById('confirmResult').innerHTML = 'Your phrase ends with that ending'
    }
    if (strLen === 0 || tarLen === 0) {
        document.getElementById('confirmResult').innerHTML = 'If you\'re out of ideas, ' +
            'use some of the provided examples';
    }
}

// Repeat a string repeat a string

function repeatStringNumTimes(str, num) {
    str = document.getElementById('repeatStr').value;
    num = parseInt(document.getElementById('repeatNum').value, 10);
    document.getElementById('repeatStr').value = '';
    document.getElementById('repeatNum').value = '';
    var temp = [];
    var result;
    if (num > 0) {
        for (var i = 0; i < num; i++) {
            temp.push(str);
            result = temp.join('');
        }
        document.getElementById('repeatResult').innerHTML = result;
    } else if (str.length === 0 || num === 0) {
        document.getElementById('repeatResult').innerHTML = 'Please enter a string and the ' +
            'number of times you\'d like to repeat it';
    }
}

// Truncate a string

function truncateString(str, num) {
    str = document.getElementById('truncateStr').value;
    num = parseInt(document.getElementById('truncateNum').value, 10);
    document.getElementById('truncateStr').value = '';
    document.getElementById('truncateNum').value = '';

    if
    (str.length > num && num > 3) {
        document.getElementById('truncateResult').innerHTML = str.slice(0, num - 3) + '...';
    }
    else if (str.length > num && num <= 3) {
        document.getElementById('truncateResult').innerHTML = str.slice(0, num) + '...';
    }

    else if (str.length === 0) {
        document.getElementById('truncateResult').innerHTML = 'If you\'re out of ideas, ' +
            'use some of the provided examples';
    }
}


// Caesars Cipher

function rot13(str) {
    str = document.getElementById('caesarsinput').value;
    document.getElementById('caesarsinput').value = '';
    if (str.length !== 0) {
        var result = "";
        for (var i = 0; i < str.length; i++) {
            var char = str.charCodeAt(i);
            if (char < 65 || char > 90) {
                char = char;
            }
            else {
                char = char + 13;
                if (char > 90) {
                    char = char - 26;
                }
            }
            result = result + String.fromCharCode(char);
        }
        document.getElementById('caesarsresult').innerHTML = result;
    }
    else document.getElementById('caesarsresult').innerHTML = 'Please use one of the provided examples';
}

// Sum All Numbers in a Range

function sumAll(arr) {
    arr = [];
    arr[0] = parseInt(document.getElementById('number1').value, 10);
    arr[1] = parseInt(document.getElementById('number2').value, 10);
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';

    if (!isNaN(arr[0]) && !isNaN(arr[1])) {
        var minarr = arr.sort(function (a, b) {
            return a - b;
        });

        for (var i = arr[0]; i < arr[1] - 1;) {
            i++;
            minarr.push(i);
        }

        document.getElementById('sumAllresult').innerHTML = 'The sum of the  numbers in the range is ' + minarr.reduce(function (a, b) {
                return a + b;
            });
    }
    else document.getElementById('sumAllresult').innerHTML = 'Please enter a number in both fields '
}

// Sum All Odd Fibonacci Numbers

function sumFibs(num) {
    num = parseInt(document.getElementById('fiboNum').value, 10);
    document.getElementById('fiboNum').value = '';
    if (!isNaN(num)) {
        var currentNum = 0;
        var nextNum = 1;
        var arr = [];
        var oddArr = [];
        for (; currentNum <= num; currentNum = nextNum - currentNum) {
            nextNum = nextNum + currentNum;
            arr.push(currentNum);
        }

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) {
                oddArr.push(arr[i]);
                var result = oddArr.reduce(function (a, b) {
                    return a + b;
                });
            }
        }

        document.getElementById('fiboResult').innerHTML = 'The sum of all o' +
            'dd Fibonacci numbers less than ' + num + ' is ' + result;
    }
    else {
        document.getElementById('fiboResult').innerHTML = 'Please input a number';
    }
}