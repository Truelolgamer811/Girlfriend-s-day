window.addEventListener("load", () => {

    setTimeout(() => {
        document.querySelector(".loading-screen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    }, 3500);

});

document.getElementById("startBtn").addEventListener("click", () => {

    alert("Welcome to our story ❤️");

});