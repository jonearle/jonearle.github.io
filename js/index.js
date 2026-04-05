// Script was loading before HTML
// This seemed to be the best solution
document.addEventListener("DOMContentLoaded", () => {

    // Notification
    let userName = null;
    if (!localStorage.getItem("visited")) {
        userName = prompt("What is your name?");
        if (userName != null) {
            document.getElementById("welcome").textContent = "Welcome, " + userName + "!";
            localStorage.setItem("visited", "true");
            localStorage.setItem("userName", userName);
        }
    } else {
        document.getElementById("welcome").textContent = "Welcome, " + localStorage.getItem("userName") + "!";
    }

    dateBasedGreeting(); // do this on every refresh

    // Conditional
    function dateBasedGreeting() {
        let hour = new Date().getHours()
        if (hour < 12) {
            document.getElementById("welcome").textContent = "Good morning, " + localStorage.getItem("userName") + "!";
        } else if (hour >= 12 && hour < 18) {
            document.getElementById("welcome").textContent = "Good afternoon, " + localStorage.getItem("userName") + "!";
        } else {
            document.getElementById("welcome").textContent = "Good evening, " + localStorage.getItem("userName") + "!";
        }
    }

    // Event listener
    headshot = document.getElementById("headshot")
    headshot.addEventListener("mouseout", () => {
        dateBasedGreeting();
    })
    headshot.addEventListener("click", () => {
        window.open("https://github.com/jonearle", "_blank");
    })

    // Arrow button actions
    let scrollArrow = document.getElementById("scroll-arrow");
    scrollArrow.addEventListener("click", () => {
        let hero = document.querySelector(".hero");
        window.scrollTo({
            top: hero.offsetHeight,
            behavior: "smooth"
        });
    })
});