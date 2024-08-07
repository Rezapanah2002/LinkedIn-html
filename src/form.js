function navigateTo(page) {
    window.location.href = page;
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const errors = [];

        // Validation for Full Name
        const fullNameInput = document.getElementById('full_name');
        if (fullNameInput.value.trim() === '') {
            errors.push('Full Name is required');
        }

        // Validation for Username
        const usernameInput = document.getElementById('username');
        if (usernameInput.value.trim() === '') {
            errors.push('Username is required');
        }

        // Validation for Date of Birth
        const dayInput = document.getElementById('day');
        const monthSelect = document.getElementById('month');
        const yearInput = document.getElementById('year');
        if (dayInput.value.trim() === '' || monthSelect.value === '' || yearInput.value.trim() === '') {
            errors.push('Date of Birth is required');
        }

        // Validation for Skills
        const skillInputs = document.querySelectorAll('input[name="skills[]"]');
        let skillCount = 0;
        skillInputs.forEach(input => {
            if (input.value.trim() === '') {
                errors.push('All Skills are required');
            } else {
                skillCount++;
            }
        });
        if (skillCount < 3) {
            errors.push('At least 3 skills are required');
        }

        // Display errors if any
        const errorContainer = document.getElementById('error-container');
        if (errors.length > 0) {
            errorContainer.innerHTML = '';
            errors.forEach(error => {
                const errorDiv = document.createElement('div');
                errorDiv.textContent = error;
                errorContainer.appendChild(errorDiv);
            });
        } else {
            form.submit();
        }
    });
});
