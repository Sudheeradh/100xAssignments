/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((res, rej) => {
        setTimeout(res, n * 1000);
    })
}

t = Date.now();

wait(3).then(v => {console.log((Date.now() - t) / 1000), "Seconds"});
