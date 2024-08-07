function navigateTo(page) {
    window.location.href = page;
}

document.addEventListener("DOMContentLoaded", function() {
    // Get user ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const userId = parseInt(urlParams.get('id'));

    // Find user profile from the array based on ID
    const userProfile = userProfiles.find(profile => profile.id === userId);

    if (userProfile) {
        const userProfileHTML = `
            <div id="header">
                <img src="assets/${userProfile.avatar}" alt="avatar" width="30" height="30">
                <h3>@${userProfile.username}</h3>
            </div>
            <table>
                <tr>
                    <td>
                        <img src="assets/${userProfile.profilepic}" alt="profilepic" width="120" height="120">
                    </td>
                    <td><h2>${userProfile.name}</h2></td>
                </tr>
            </table>
            <table id="menu">
                <tr>
                    <td><a href="#personal">Personal Profile</a></td>
                    <td><a href="#education">Educational Profile</a></td>
                    <td><a href="#job">Job Profile</a></td>
                    <td><a href="#" onclick="navigateTo('editProfile.html')">Edit Profile</a></td>
                </tr>
            </table>
            <hr><hr>
            <h3 id="personal">Personal Profile</h3>
            <table>
                <tr>
                    <td><b>Age:</b></td>
                    <td>${userProfile.age}</td>
                </tr>
                <tr>
                    <td><b>Birthdate:</b></td>
                    <td>${userProfile.birthdate}</td>
                </tr>
                <tr>
                    <td><b>Gender:</b></td>
                    <td>${userProfile.gender}</td>
                </tr>
                <tr>
                    <td><b>Biography:</b></td>
                    <td>${userProfile.biography}</td>
                </tr>
            </table>
            <hr>
            <h3 id="education">Educational Profile</h3>
            <table>
                <tr>
                    <td><b>Elementary School:</b></td>
                    <td>${userProfile.education.elementarySchool}</td>
                </tr>
                <tr>
                    <td><b>Middle School:</b></td>
                    <td>${userProfile.education.middleSchool}</td>
                </tr>
                <tr>
                    <td><b>High School: </b></td>
                    <td>${userProfile.education.highSchool}</td>
                </tr>
                <tr>
                    <td><b>University:</b></td>
                    <td>${userProfile.education.university[0].name}</td>
                    <td>${userProfile.education.university[0].degree}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>${userProfile.education.university[1].name}</td>
                    <td>${userProfile.education.university[1].degree}</td>
                </tr>
            </table>
            <table>
                <tr>
                    <td><b>Academic Achievements:</b></td>
                    <td>${userProfile.education.academicAchievements.join('</td></tr><tr><td>')}</td>
                </tr>
            </table>
            <hr>
            <h3 id="job">Job Profile</h3>
            <table>
                <tr>
                    <td><b>Work Experience:</b></td>
                </tr>
                <tr>
                    <td>${userProfile.job.workExperience.join('</td></tr><tr><td>')}</td>
                </tr>
                <tr>
                    <td><b>Skills:</b></td>
                </tr>
                <tr>
                    <td>${userProfile.job.skills.join('</td></tr><tr><td>')}</td>
                </tr>
            </table>
        `;

        document.getElementById('user-profile').innerHTML = userProfileHTML;
    } else {
        console.error('User profile not found');
    }
});

// function logout() {
//     localStorage.removeItem('username');
//     localStorage.removeItem('password');
//
//     window.location.href = 'auth.html';
// }
//
// window.addEventListener('DOMContentLoaded', () => {
//     const username = localStorage.getItem('username');
//     const password = localStorage.getItem('password');
//
//     if (username) {
//         document.getElementById('user-profile').innerHTML = `
//                 <h2>Welcome to your profile, ${username}!</h2>
//                 <p>Your password: ${password}</p>
//             `;
//     } else {
//         window.location.href = 'auth.html';
//     }
// });
