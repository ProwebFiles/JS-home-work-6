function vowels(str) {
    console.log(str);
    
    let answer = 0;
    let arr = 'АУОЫИЭЯЮЕЁауоыиэяюеё';
    for(let i = 0; i < str.length; i++) {
        for(let x = 0; x < arr.length; x++) {
            str[i] == arr[x] ? answer++ : '';
        }
    }    
    return answer;
}

