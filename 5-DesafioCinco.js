function reverseWord(word){
    const wordReverse = [];
    let arrayWord = Array.from(word);
    for(let i = arrayWord.length - 1; i >= 0; i--){
        wordReverse.push(arrayWord[i])
    }
    const reverseWord = wordReverse.join('');
    console.log(reverseWord)
}

reverseWord('ahnim é agav A')