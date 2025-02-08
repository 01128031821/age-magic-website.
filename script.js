document.getElementById("calculateBtn").addEventListener("click", calculateAge);
document.getElementById("futureAgeBtn").addEventListener("click", calculateFutureAge);
document.getElementById("darkModeBtn").addEventListener("click", enableDarkMode);
document.getElementById("lightModeBtn").addEventListener("click", enableLightMode);
document.getElementById("resetBtn").addEventListener("click", resetForm);
document.getElementById("copyBtn").addEventListener("click", copyResult);

function calculateAge() {
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("? Please enter a valid date!");
        return;
    }

    let birthDate = new Date(year, month - 1, day);
    let today = new Date();

    if (birthDate > today) {
        alert("? Birthdate cannot be in the future!");
        return;
    }

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += lastMonth.getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById("ageResult").innerHTML = `
        ?? You are <span style="font-size: 28px; color: #007bff;">${ageYears} years, ${ageMonths} months, and ${ageDays} days</span> old.
    `;
}

function calculateFutureAge() {
    let futureYear = parseInt(document.getElementById("futureYear").value);
    let birthYear = parseInt(document.getElementById("year").value);

    if (isNaN(futureYear) || isNaN(birthYear)) {
        alert("? Please enter a valid year!");
        return;
    }

    let futureAge = futureYear - birthYear;
    document.getElementById("futureAgeResult").innerText = `Your age in ${futureYear}: ${futureAge} years`;
}

function copyResult() {
    let text = document.getElementById("ageResult").innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("? Result copied!");
    });
}

function enableDarkMode() {
    document.body.classList.add("dark-mode");
}

function enableLightMode() {
    document.body.classList.remove("dark-mode");
}

function resetForm() {
    document.getElementById("day").value = "";
    document.getElementById("month").value = "";
    document.getElementById("year").value = "";
    document.getElementById("futureYear").value = "";
    document.getElementById("ageResult").innerText = "";
    document.getElementById("futureAgeResult").innerText = "";
}
