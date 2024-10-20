document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // JavaScript for handling form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(this); // Gather form data
        const actionUrl = 'https://formspree.io/f/xrbgbgrn'; // Action URL hidden in JS

        // Send form data to Formspree
        fetch(actionUrl, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json' // Specify that you want a JSON response
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Your message has been sent!');
                this.reset(); // Clear the form after successful submission
            } else {
                alert('There was a problem with your submission. Please try again.');
            }
        })
        .catch(error => {
            alert('There was a problem with your submission. Please try again.');
        });
    });

    const typingElement = document.getElementById('typing');
    const words = ["Odoo Developer", "Developer", "Python Developer", "Freelancer", "Full Stack Developer"];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = '';
    let currentLetters = '';
    let isDeleting = false;

    function type() {
        if (isDeleting) {
            currentLetters = currentWord.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            currentLetters = currentWord.substring(0, letterIndex + 1);
            letterIndex++;
        }

        typingElement.innerHTML = currentLetters;

        let typeSpeed = 200;
        if (isDeleting) {
            typeSpeed /= 2;
        }

        if (!isDeleting && letterIndex === currentWord.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex++;
            if (wordIndex === words.length) {
                wordIndex = 0;
            }
            currentWord = words[wordIndex];
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    currentWord = words[wordIndex];
    type();
});
