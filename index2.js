
document.addEventListener("DOMContentLoaded", function () {
    let yesButton = document.getElementById("yesButton"); // Ensure you have a button with id "yesButton"
    let messageDiv = document.getElementById("message");

    yesButton.addEventListener("click", function () {
        messageDiv.textContent = "Yay! I love you too! 💖";
        messageDiv.style.display = "block"; // Make sure the message is visible
    });
});


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
    let name = getQueryParam("name") || "";
    let message = document.getElementById("message");
    message.innerHTML = `${name}`
    setTimeout(() => {
        message.style.opacity = 1;
    }, 100);

    // Continuous heart creation
    setInterval(createHeart, 300);
}

// Run on page load
sendLove();

function cycleImages(containerClass) {
    const container = document.querySelector(`.${containerClass}`);
    if (!container) return; // Safety check

    const images = container.querySelectorAll("img");
    if (images.length === 0) return; // No images found

    let index = 0;

    // Ensure the first image is visible initially
    images.forEach((img, i) => {
        img.style.opacity = i === 0 ? "1" : "0";
        img.style.display = i === 0 ? "block" : "none";
    });

    setInterval(() => {
        images[index].style.opacity = "0"; // Hide current image
        images[index].style.display = "none"; // Hide from flow
        index = (index + 1) % images.length; // Move to next image
        images[index].style.display = "block"; // Show next image
        images[index].style.opacity = "1"; // Fade it in
    }, 3000); // Change image every 3 seconds
}

// Run for all image containers when the page loads
window.onload = () => {
    cycleImages("image-container");
    cycleImages("image-container2");
    cycleImages("image-container3");
};



