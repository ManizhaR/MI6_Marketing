function nextScreen() {
    document.getElementById("screen1").classList.add("hidden");
    document.getElementById("screen2").classList.remove("hidden");
}

function checkCode() {
    let input = document.getElementById("codeInput").value;
    if (input.toLowerCase() === "пароль") {
        document.getElementById("screen2").classList.add("hidden");
        document.getElementById("screen3").classList.remove("hidden");
    } else {
        alert("Неверное кодовое слово");
    }
}

document.getElementById("form").onsubmit = function(event) {
    event.preventDefault();
    document.getElementById("screen3").classList.add("hidden");
    document.getElementById("screen4").classList.remove("hidden");
};
