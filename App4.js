document.addEventListener("DOMContentLoaded", () => {
    const vWilly = document.getElementById("Willy");
    const vWilla = document.getElementById("Willa");
    const obstacle = document.getElementById("obstacle");
    const resetButton = document.getElementById("reset-button");

    let isColliding = false;

    const detectarColisión = () => {
        const willyRect = vWilly.getBoundingClientRect();
        const obstacleRect = obstacle.getBoundingClientRect();

        if (
            willyRect.left < obstacleRect.left + obstacleRect.width &&
            willyRect.left + willyRect.width > obstacleRect.left &&
            willyRect.top < obstacleRect.top + obstacleRect.height &&
            willyRect.top + willyRect.height > obstacleRect.top
        ) {
            isColliding = true;
            vWilly.style.display = "none";
            vWilla.style.display = "block";
            obstacle.style.display = "none";

            setTimeout(() => {
                alert("Willy es mujer");
                obstacle.style.display = "block";
                obstacle.style.animation = "moveObstacle 3s linear infinite";
            }, 3000);
        }
    };

    const resetGame = () => {
        isColliding = false;
        vWilly.style.display = "block";
        vWilla.style.display = "none";
        obstacle.style.display = "block";
        obstacle.style.animation = "moveObstacle 2s linear infinite";
    };

    resetButton.addEventListener("click", resetGame);

    setInterval(detectarColisión, 50);
});