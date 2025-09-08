function play() {
    var audio = new Audio("Alarm Sound Effect.mp3"); // Ensure file is in the correct path
    audio.play();
}

setInterval(() => {
    let ti = document.getElementById("time");
    let d = new Date();
    if (ti) {
        ti.innerHTML = d.toDateString() + " " + d.toTimeString();
    }
}, 1000);

const setAlarm = (seconds) => {
    let startTime = new Date().getTime();
    setTimeout(() => {
        let alar = document.getElementById("alarm");
        if (alar) {
            play();
            alar.innerHTML = "Alarm is ringing NOW!";
        }
    }, seconds * 1000);

    let interval = setInterval(() => {
        let alar = document.getElementById("alarm");
        let now = new Date().getTime();
        let secondsLeft = Math.floor((startTime + seconds * 1000 - now) / 1000);
        if (alar) {
            if (secondsLeft > 0) {
                alar.innerHTML = "Alarm will ring in " + secondsLeft + " seconds";
            } else {
                clearInterval(interval);
            }
        }
    }, 100);
};
 document.getElementById("start").addEventListener("click", function() {
  let s = prompt("After how many seconds do you want the alarm?");
  setAlarm(parseInt(s));
});

// let s = prompt("After how many seconds do you want the alarm?");
// setAlarm(parseInt(s));
