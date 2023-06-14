function counter() {
    count += 1;
    console.log(count);
}

let count = 0;
setInterval(counter, 1000);