/**
 * Created by Razso on 02-Oct-17.
 */
function palindrome(str) {
    str = document.getElementById("palindromeInput").value;
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
    return document.getElementById("palindromeResult").innerHTML = 'If you\'re out of ideas, use some of the provided examples' ;
}