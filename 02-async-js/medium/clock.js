date = new Date()

hours = date.getHours()
minutes = date.getMinutes()
seconds = date.getSeconds()


function counter() {
    seconds += 1
    if (seconds == 60) {
        seconds = 0;
        minutes += 1;
    }

    if (minutes == 60) {
        minutes = 0;
        hours += 1;
    }

    if (hours == 24) {
        hours == 0;
    }

    console.clear();
    if (hours == 12) {
        console.log(`The time is ${hours}:${minutes}:${seconds} PM`);
    } else if (hours > 12) {
        console.log(`The time is ${hours - 12}:${minutes}:${seconds} PM`);
    } else {
        console.log(`The time is ${hours}:${minutes}:${seconds} AM`);
    }
}

// let count = 0;
setInterval(counter, 1000);