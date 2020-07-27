const fs = require('fs')
// Complete the reverseArray function below.
function reverseV1(a) {
    let reversed = []
    for (let i = a.length - 1; i > -1; i--) {
        reversed.push(a[i])
    }
    return reversed
}

const reverseArray = (a) => {
    let array_middle_point = Math.round((a.length - 1) / 2)

    for (let i = 0; i < array_middle_point; i++) {
        let f_index = a[i]
        let l_index = a[a.length - 1 - i]
        a[i] = l_index
        a[a.length - 1 - i] = f_index
    }
    return a
}



// const file_gen = () => {
//     for (let i = 0; i < 1000; i++) {
//         fs.appendFileSync('array_file.txt', i)
//     }
// }

const file_gen = () => {
    let arr = []
    for (let i = 0; i < 1000; i++) {
        arr.push(i)
    }
    return arr
}

console.log(reverseArray(file_gen()))



