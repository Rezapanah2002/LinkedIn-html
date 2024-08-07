function navigateTo(page) {
    window.location.href = page;
}

document.addEventListener("DOMContentLoaded", function() {
    // Get user ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const userId = parseInt(urlParams.get('id'));

    // Find user profile from the array based on ID
    const userProfile = userProfiles.find(profile => profile.id === userId);
});
