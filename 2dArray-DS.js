let arr_2D = [[1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [0, 0, 2, 4, 4, 0], [0, 0, 0, 2, 0, 0], [0, 0, 1, 2, 4, 0]]

function hourglassSum(arr) {
    let sum_arr = []
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr[i].length - 2; j++) {
            let sum = 0
            sum += arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
            sum += arr[i + 1][j + 1]
            sum += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
            sum_arr.push(sum)
        }
    }
    return largest_Number_arr(sum_arr)
}

const largest_Number_arr = (arr) => {
    let largest = arr[0]
    for (let i = 1; i < arr.length; i++) if (arr[i] > largest) largest = arr[i]
    return largest
}

console.log(hourglassSum(arr_2D))



