"use strict";
var array1 = ["test1", "test2", "test3", "test4"];
var array2 = ["test1", "test2", "test3", "test4", "test5"];
var array1Length = array1.length;
var array2Length = array2.length;
document.getElementById('array1Length').textContent = array1Length.toString();
document.getElementById('array2Length').textContent = array2Length.toString();
function wordPattern(pattern, s) {
    var words = s.split(' ');
    if (pattern.length !== words.length) {
        return false;
    }
    var patternMap = new Map();
    var wordMap = new Map();
    for (var i = 0; i < pattern.length; i++) {
        var char = pattern[i];
        var word = words[i];
        if (patternMap.has(char)) {
            if (patternMap.get(char) !== word) {
                return false;
            }
        }
        else {
            if (wordMap.has(word)) {
                return false;
            }
            patternMap.set(char, word);
            wordMap.set(word, char);
        }
    }
    return true;
}
function checkPattern() {
    var pattern = document.getElementById('pattern').value;
    var sentence = document.getElementById('sentence').value;
    var result = wordPattern(pattern, sentence);
    var resultElement = document.getElementById('result');
    resultElement.innerText = result ? 'Паттерн соответствует предложению.' : 'Паттерн не соответствует предложению.';
}
