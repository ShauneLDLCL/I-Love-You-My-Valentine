// function getQueryParam(name){
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(name);
// }

// function createHeart(){
//     const heart = document.createElement("div");
//     heart.classList.add("heart");
//     heart.style.left = Math.random() * 100 + "vw";
//     heart.style.animationDuration = Math.random() * 5 + 5 + "s";

//     document.body.appendChild(heart);
//     setTimeout(() => {
//         heart.remove();
//     }, 10000);

// }


// function sendLove() {
//     let name = getQueryParam("name") || "Ashley";
//     let message = document.getElementById("message");
//     message.innerHTML = `You are so loved ${name}!`;
//     setTimeout(() => {
//         message.style.opacity = 1;
//     }, 100);

//     for (let i = 0; i < 50; i++) {
//         setTimeout(createHeart, 1 * 100);
//     }
//     // continuous heart generation
//     setInterval(createHeart, 350); //hearts appear every 500ms


// document.addEventListener("DOMContentLoaded", function () {
//     let yesButton = document.getElementById("yesButton"); // Ensure you have a button with id "yesButton"
//     let messageDiv = document.getElementById("message");

//     yesButton.addEventListener("click", function () {
//         messageDiv.textContent = "Yay! I love you too! 💖";
//         messageDiv.style.display = "block"; // Make sure the message is visible
//     });
// });




sendLove();

function getQueryParam(name){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Set random horizontal position
    heart.style.left = Math.random() * 100 + "vw";
    
    // Random animation duration for varied falling speeds
    let duration = Math.random() * 5 + 5; // 5 to 10 seconds
    heart.style.animationDuration = duration + "s";

    document.body.appendChild(heart);

    // Remove heart only after it reaches the bottom
    setTimeout(() => {
        heart.remove();
    }, duration * 1000); // Matches animation duration
}

function sendLove() {
    let name = getQueryParam("name") || "you";
    let message = document.getElementById("message");
    message.innerHTML = `&hearts; Will ${name} be my Valentine? &hearts;`;
    setTimeout(() => {
        message.style.opacity = 1;
    }, 100);

    // Continuous heart creation
    setInterval(createHeart, 300);
}

// Run on page load
sendLove();

document.title = "Happy Valentines Day My Love";

