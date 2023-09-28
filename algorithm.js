// my algorithm checkpoint

//3 variables are created to account for sentence, word and vowel
let mySentence = prompt('Enter any sentence of your choice with fullstop');
let mySentenceLength = 0;
let wordCount = 0;
let vowelCount =0;

//to loop through each alphabet in the sentence
for (let i =0; i <mySentence.length; i++) {
    console.log( 'sentence Length:', mySentenceLength);

    let ch = mySentence.charAt(i);

//to increment mySentenceLength for each alphabet
mySentenceLength++;

//check if const 'ch' is a letter from (a-z or A-Z)
    if ( /[a-z A-Z]/.test(ch)){

        //Check if ch is a vowel (a,e,i,o,u, A,E,I,O,U)
        if (/[aeiouAEIOU]/.test(ch)){
        vowelCount++;
        console.log('Number of Vowel', vowelCount);
        }
    }
    // this is to check if const 'ch' is a space
    if (ch === ' '){
        wordCount++;
        console.log( 'The number of words:', wordCount);
    }

}

