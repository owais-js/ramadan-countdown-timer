const endDate = new Date("March 30, 2025 00:00:00").getTime();
const inputs = document.querySelectorAll("input");

function clock() {
    const now = new Date().getTime();
    const timeDifference = endDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value = seconds;
}
clock();

setInterval(clock, 1000);
