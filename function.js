function alertSubFunc(event) {
    event.preventDefault();
    const emailInput = document.getElementById("email");
    alert("Subscriber added: " + emailInput.value);
}

window.onload = function() {
    document.getElementById("subscribe-form").addEventListener("submit", alertSubFunc);
}