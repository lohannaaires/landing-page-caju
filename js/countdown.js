
function countdown(){
    let now = new Date();
    
    const eventDate = new Date("Nov 26, 2021 00:00:00");

    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();

    let remTime = eventTime - currentTime;

    let d = Math.floor(remTime / (1000 * 60 * 60 * 24));
    let h = Math.floor((remTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((remTime % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((remTime % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;

    setTimeout(countdown, 1000);

    if (remTime < 0) {
        clearInterval(countdown);
        document.getElementById("days").innerHTML = "FIM";
        document.getElementById("hours").innerHTML = "FIM";
        document.getElementById("minutes").innerHTML = "FIM";
        document.getElementById("seconds").innerHTML = "FIM"; 
    }

}