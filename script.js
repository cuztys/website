// Ladebildschirm entfernen
window.onload = function () {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
    }, 1500);
};

function addToCart() {
    alert("Produkt wurde in den Warenkorb gelegt!");
}

// KI-Chatbot Funktionen
const chatbotMessages = document.getElementById("chatbot-messages");

function toggleChatbot() {
    document.getElementById("chatbot").style.display = "block";
}
document.getElementById("close-chatbot").addEventListener("click", function() {
    document.getElementById("chatbot").style.display = "none";
});

function handleChatbot(event) {
    if (event.key === "Enter") {
        const input = event.target.value;
        chatbotMessages.innerHTML += `<p><b>Du:</b> ${input}</p>`;
        chatbotMessages.innerHTML += `<p><b>Bot:</b> Ich kann dir leider nicht helfen! 😅</p>`;
        event.target.value = "";
    }
}
