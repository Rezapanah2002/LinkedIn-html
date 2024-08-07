function performSearch() {
    var searchText = document.getElementById("searchInput").value.toLowerCase();
    var sections = document.querySelectorAll("#profiles section");

    sections.forEach(function(section) {
        var name = section.querySelector("a").innerText.toLowerCase();
        var bio = section.querySelector("li:nth-child(2)").innerText.toLowerCase();
        var skills = section.querySelectorAll("ul dt");

        var matchFound = false;

        // Check if any of the fields match the search text
        if (name.includes(searchText) || bio.includes(searchText)) {
            matchFound = true;
        } else {
            skills.forEach(function(skill) {
                if (skill.innerText.toLowerCase().includes(searchText)) {
                    matchFound = true;
                }
            });
        }

        if (matchFound) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
}
function navigateTo(page) {
    window.location.href = page;
}