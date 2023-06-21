/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */


function sleep (seconds) {
    t = new Date().getTime();
    while(new Date().getTime() - t <= seconds * 1000) {}
}

t = new Date().getTime();

sleep(3);

console.log(((new Date().getTime() - t) / 1000), "Seconds");