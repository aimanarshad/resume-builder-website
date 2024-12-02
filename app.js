// Wait for the document to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Capture the submit button
    const submitButton = document.querySelector('button');

    // When the submit button is clicked
    submitButton.addEventListener('click', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the values of the inputs
        const firstName = document.querySelector('input[name="FirstName"]').value;
        const surname = document.querySelector('input[name="Surname"]').value;
        const profession = document.querySelector('input[name="profession"]').value;
        const state = document.querySelector('input[name="state"]').value;
        const postal = document.querySelector('input[name="postal"]').value;
        const country = document.querySelector('input[name="country"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const phone = document.querySelector('input[name="phone"]').value;
        const intro = document.querySelector('textarea[name="Your Intro"]').value;

        // Store the values in local storage to pass to the next page
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('surname', surname);
        localStorage.setItem('profession', profession);
        localStorage.setItem('state', state);
        localStorage.setItem('postal', postal);
        localStorage.setItem('country', country);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('intro', intro);

        // Redirect to the preview page
        window.location.href = 'ask.html';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Get the stored data from localStorage
    const firstName = localStorage.getItem('firstName');
    const surname = localStorage.getItem('surname');
    const profession = localStorage.getItem('profession');
    const state = localStorage.getItem('state');
    const postal = localStorage.getItem('postal');
    const country = localStorage.getItem('country');
    const email = localStorage.getItem('email');
    const phone = localStorage.getItem('phone');
    const intro = localStorage.getItem('intro');

    // Update the resume template with the stored data
    document.getElementById('n1').textContent = firstName;
    document.getElementById('s1').textContent = surname;
    document.getElementById('p1').textContent = profession;
    document.getElementById('phone-number').textContent = phone;
    document.getElementById('email').textContent = email;
    document.getElementById('address').textContent = `${state}, ${country}, Postal Code: ${postal}`;
    document.getElementById('py').textContent = intro;
});
