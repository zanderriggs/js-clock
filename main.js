// Main clock function to be run continuously every 1000ms
function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    hour = updateTime(hour);
    minute = updateTime(minute);
    second = updateTime(second);

    // Set Time
    document.getElementById('clock').innerText = hour + " : " + minute + " : " + second;

    // This variable is initialized but never called
    // "time" calls the setTimout() function to call currentTime() every 1000ms
    var time = setTimeout(function(){ currentTime() }, 1000);
};


// function to keep time in 2-digit format (##)
function updateTime(value) {
    if(value < 10){
        return '0' + value;
    }
    else {
        return value;
    }
};

// get it poppin'
currentTime();