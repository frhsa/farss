function openPopup(courseCode) {
    var title = document.getElementById("popup-title");
    var description = document.getElementById("popup-description");
    if (courseCode === "CSC574") {
        title.textContent = "CSC574 - Dynamic Web Application Development";
        description.textContent = "--------------------------\nLecturer Name: Nur Aina Khadijah binti Adnan .";
        description.style.whiteSpace = "pre-wrap";
    } else if (courseCode === "ITT569") {
        title.textContent = "ITT569 - Internet of thing";
        description.textContent = "--------------------------\nLecturer Name: Shapina binti Abdullah .\nNo Telephone:019235580";
        description.style.whiteSpace = "pre-wrap";
    } else if (courseCode === "ELC550") {
        title.textContent = "ELC550 - English for academic writing";
        description.textContent = "--------------------------\nLecturer Name: Siti Fauziana binti Zakaria.\nNo Telephone:0124694391";
        description.style.whiteSpace = "pre-wrap";
    } else if (courseCode === "ITS462") {
        title.textContent = "ITS462 - Fundamental of Artificial Intelligence";
        description.textContent = "--------------------------\nLecturer Name: Dr. Farah Aqilah binti Bohani .\nNo Telephone:0132117890";
        description.style.whiteSpace = "pre-wrap";
    } else if (courseCode === "ITT557") {
        title.textContent = "ITT557 - Web Application Security";
        description.textContent = "--------------------------\nLecturer Name: Ts. Dr. Mohsen bin Mohamad Hata .\nNo Telephone:0129811334";
        description.style.whiteSpace = "pre-wrap";
    } else if (courseCode === "ITT588") {
        title.textContent = "ITT588 - Front-end Technology";
        description.textContent = "--------------------------\nLecturer Name: Kamarul Ariffin bin Abdul Basit .\nNo Telephone:0128247372 ";
        description.style.whiteSpace = "pre-wrap";
    } else if (courseCode === "CST2JA") {
        title.textContent = "CST2JA - Introductory Japanese (Level II)";
        description.textContent = "--------------------------\nLecturer Name: Noor Aizah Binti Abas .";
        description.style.whiteSpace = "pre-wrap";
    }

    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}
