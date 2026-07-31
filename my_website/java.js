alert("Welcome to my website! Glad you are here! 😊");
document.getElementById("colorBtn").addEventListener("click", () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
});
const lampBtn = document.getElementById("lampBtn");

lampBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        lampBtn.innerText = "🔌 Turn On";
    } else {
        lampBtn.innerText = "💡 Turn Off";
    }
});