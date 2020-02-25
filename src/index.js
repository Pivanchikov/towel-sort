
// You should implement your task here.

module.exports = function towelSort (matrix) {
    for (let i = 0; i < matrix.length; i++) {
        if ((i + 1 ) % 2 === 0 ) {
            matrix[i].reverse();
        }
    }
    return matrix.join(",")
}
