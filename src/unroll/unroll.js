function unroll(squareArray) {
    const unrolled = [];

    //Check for Empty array
    if (squareArray.length === 0) return [];

    // Standard 2D traversal
    // for (let i = 0; i < squareArray.length; i++) {
    //     for (let j = 0; j < squareArray[i].length; j++) {
    //         unrolled.push(squareArray[i][j]);
    //         console.log(unrolled);
    //     }
    // }

    let top = 0; //identify the first row
    let bottom = squareArray.length - 1;
    let left = 0;
    let right = squareArray[0].length - 1;

    while (top <= bottom && left <= right) {
        // Top left to right
        for (let i = left; i <= right; i++) {
            unrolled.push(squareArray[top][i]);
            console.log(unrolled);
        }

        //Right Column excluding the current top and bottom rows
        for (let i = top + 1; i < bottom; i++) {
            unrolled.push(squareArray[i][right]);
            console.log(unrolled);
        }

        //Bottom Row right to left
        if (top < bottom) {
            for (let i = right; i >= left; i--) {
                unrolled.push(squareArray[bottom][i]);
                console.log(unrolled);
            }
        }


        //left column bottom to top
        for (let i = bottom - 1; i > top; i--) {
            unrolled.push(squareArray[i][left]);
            console.log(unrolled);
        }
        top++;
        bottom--;
        left++;
        right--;
    }
    return unrolled;
}

export default unroll;
