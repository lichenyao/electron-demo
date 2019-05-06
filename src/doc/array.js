function demo() {
    let arr = []
    for (let i = 0; i < 10; i++) {
        let result = Math.floor(Math.random() * (100 - 10) + 10)
        arr.push(result)
    }
    // let newArr = Array.from(new Set(arr))
    let newArr = [...new Set(arr)]
    // arr = [1, '3', 2, 2, '2']
    newArr.sort(function (a, b) {
        return a - b
    })
    console.log(newArr);
    return newArr
}



let a = '3[cd]2[zh]'
a = '3[a2[c]]'
function app(str) {
    let stack = []; // 存储字符串的栈  3[a2[c
    for (let i = 0; i < str.length; i++) {
        let cur = str[i];
        if (cur !== ']') {
            stack.push(cur);
        } else { // 弹出
            let count = 0;
            let loopStr = []; 
            let popStr = '';  // c
            while ((popStr = stack.pop()) !== '[') {
                loopStr.unshift(popStr);
            }
            count = stack.pop();
            // 添加结果
            let item = '';
            for (let i = 0; i < count; i++) {
                item += loopStr.join('');
            }
            stack.push(...(item.split('')));
        }
    }
    return stack.join('');
}
let result = app(a)
console.log(result);




