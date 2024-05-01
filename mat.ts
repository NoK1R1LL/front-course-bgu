type Length<T extends any[]> = T['length'];

const array1 = ["test1", "test2", "test3", "test4"];
const array2 = ["test1", "test2", "test3", "test4", "test5"];

const array1Length: Length<typeof array1> = array1.length;
const array2Length: Length<typeof array2> = array2.length;

document.getElementById('array1Length').textContent = array1Length.toString();
document.getElementById('array2Length').textContent = array2Length.toString();

function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(' ');

    if (pattern.length !== words.length) {
        return false;
    }

    // @ts-ignore
    const patternMap = new Map();
    // @ts-ignore
    const wordMap = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (patternMap.has(char)) {
            if (patternMap.get(char) !== word) {
                return false;
            }
        } else {
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
    const pattern = (document.getElementById('pattern') as HTMLInputElement).value;
    const sentence = (document.getElementById('sentence') as HTMLInputElement).value;

    const result = wordPattern(pattern, sentence);

    const resultElement = document.getElementById('result');
    resultElement.innerText = result ? 'Паттерн соответствует предложению.' : 'Паттерн не соответствует предложению.';
}
