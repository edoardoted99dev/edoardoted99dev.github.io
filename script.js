document.addEventListener('DOMContentLoaded', (event) => {
    const targetDate = new Date('July 6, 2024 14:00:00').getTime();

    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const timeleft = targetDate - now;

        const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        document.getElementById("countdown-text").innerHTML = days + "g " + hours + "h "
        + minutes + "m " + seconds + "s ";

        if (timeleft < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown-text").innerHTML = "Il Ritorno di Sara è avvenuto!";
        }
    }, 1000);
});
