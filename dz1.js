let arr = []
for(let i = 0; i < Infinity; i++) {
    let arrAdd = prompt('Введите команду'), addArr = arrAdd.split(', ');
    if(addArr[0] == 'add') {
        arr.push(addArr[1])
    }else if(addArr[0] == 'del') {
        for(let x = 0; x < arr.length; x++) {
            arr[x] == addArr[1] ? arr.splice(x, 1) : '';
        }
    }else if(addArr[0] == 'stop') {
        break;
    }
    console.log(arr);
}
console.log(arr);
