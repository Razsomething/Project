/**
 * Created by Razso on 02-Oct-17.
 */
function palindrome(str) {
    var str = document.getElementById("palindromeInput").value;
    var lowerCase = str.toLowerCase();
    var strToArray = lowerCase.split('');
    var len = strToArray.length;
    for (var i = 0; i < len/2; i++) {
        if (strToArray[i] !== strToArray[len - i - 1]) {
            return document.getElementById("palindromeResult").innerHTML = 'That\'s not a palindrome';
        }
    }
    return document.getElementById("palindromeResult").innerHTML = 'That\'s a palindrome';
}