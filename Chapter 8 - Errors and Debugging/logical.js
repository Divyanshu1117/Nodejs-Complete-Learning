const logical = () => {
    let num = 5;
    if (num = 10) { // Assignment instead of comparison
    // if (num == 10) {
        console.log(num) // Incorrectly prints this
    } else {
        console.log("Num is not 10");
    }

    // let arr = [1, 2, 3, 4, 5];
    // for (let i = 0; i <= arr.length; i++){
    // // for (let i = 0; i < arr.length; i++){
    //     console.log(arr[i]); // Prints undefined at the end of the loop
    // }

    // let num = "10";
    // console.log(num + 5); // Expected result: 15, prints 105
};

module.exports = logical;