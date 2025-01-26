// Snowflakes creation
const snowflakesContainer = document.getElementById("snowflakes");

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❄"; // Snowflake character

    // Randomize snowflake size, position, and speed
    const size = Math.random() * 15 + 20; // Snowflakes will be slightly larger
    snowflake.style.fontSize = `${size}px`;
    snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    snowflake.style.animationDuration = `${Math.random() * 6 + 15}s`; // Slower speed
    snowflake.style.animationDelay = `${Math.random() * 10}s`; // Random delay

    snowflakesContainer.appendChild(snowflake);

    // Remove snowflake after animation ends
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

// Generate snowflakes every 350ms
setInterval(createSnowflake, 350);

// Select all cards
const cards = document.querySelectorAll('.info-card');

// Add hover color dynamically based on the data-hover-color attribute
cards.forEach((card) => {
  const hoverColor = card.getAttribute('data-hover-color');
  card.style.setProperty('--hover-color', hoverColor);
});


window.addEventListener("scroll", function () {
    const header = document.querySelector('.header');
    const profilePhoto = document.querySelector('.profile-photo');
    const textContent = document.querySelector('.text-content');
  
    // Get the current scroll position
    let scrollPosition = window.scrollY;
  
    // Parallax effect: Move the photo and text based on scroll position
    textContent.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Text moves slower
    profilePhoto.style.transform = `translateX(50px) translateY(${scrollPosition * 0.3}px)`; // Photo moves slower
  
    // Add parallax class for smooth transition effect
    if (scrollPosition > 100) {
      header.classList.add("parallax");
    } else {
      header.classList.remove("parallax");
    }
  });
  