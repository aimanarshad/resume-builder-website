// Get references to input fields on the education form page
const degreeInput = document.getElementById('degree');
const schoolInput = document.getElementById('school');
const locationInput = document.getElementById('loca');
const startDateInput = document.getElementById('start-date');
const endDateInput = document.getElementById('end-date');
const certificateNameInput = document.getElementById('certificate-name');
const organizationInput = document.getElementById('organization');
const submitBtn = document.getElementById('submitBtn');

// Function to handle form submission
submitBtn.addEventListener('click', function () {
    // Store all form values in localStorage
    localStorage.setItem('degree', degreeInput.value);
    localStorage.setItem('school', schoolInput.value);
    localStorage.setItem('location', locationInput.value);
    localStorage.setItem('startDate', startDateInput.value);
    localStorage.setItem('endDate', endDateInput.value);
    localStorage.setItem('certificateName', certificateNameInput.value);
    localStorage.setItem('organization', organizationInput.value);

    // Redirect to the resume template page
    window.location.href = "resume_template.html"; // Change to the path of the template page
});

// On the resume template page
window.addEventListener('DOMContentLoaded', function () {
    // Retrieve stored values from localStorage
    const degreeText = localStorage.getItem('degree');
    const schoolText = localStorage.getItem('school');
    const locationText = localStorage.getItem('location');
    const startDateText = localStorage.getItem('startDate');
    const endDateText = localStorage.getItem('endDate');
    const certName = localStorage.getItem('certificateName');
    const orgName = localStorage.getItem('organization');

    // Display the values in the corresponding elements
    document.getElementById('degreeText').innerText = degreeText;
    document.getElementById('schoolText').innerText = schoolText;
    document.getElementById('locationText').innerText = locationText;
    document.getElementById('startDateText').innerText = startDateText;
    document.getElementById('endDateText').innerText = endDateText;
    document.getElementById('certName').innerText = certName;
    document.getElementById('orgName').innerText = orgName;
});
