document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 200; // Adjust this number to change the speed

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target + '+'; // Append "+" when the animation completes
            }
        };

        updateCounter();
    });

    // Add scroll event listener for header background change
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// Place the flipBoxes function outside the DOMContentLoaded event listener
function showCountryInfo() {
    const countrySelect = document.getElementById("country-select");
    const country = countrySelect.value;
    if (country) {
        window.location.href = country + ".html";
    }
}

// scripts.js
// scripts.js
// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const additionalInfo = document.getElementById('additional-info');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) { // Adjust this value as needed
            additionalInfo.style.display = 'block';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const loadingMessage = document.getElementById('loading-message');

    form.addEventListener('submit', (event) => {
        loadingMessage.style.display = 'block';
    });
});

