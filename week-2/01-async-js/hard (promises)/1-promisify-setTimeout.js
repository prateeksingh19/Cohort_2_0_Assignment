/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let time = n * 1000;
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve()
        }, time)
    })

}

module.exports = wait;
