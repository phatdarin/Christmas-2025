let snowInterval = null;
const toggle = document.getElementById("toggle");

document.body.classList.add("night");
snowInterval = setInterval(makeSnow, 40);

toggle.addEventListener("change", () => {
    document.body.classList.toggle("day", toggle.checked);
    document.body.classList.toggle("night", !toggle.checked);

    if (!toggle.checked) {
        if (!snowInterval) {
            snowInterval = setInterval(makeSnow, 40);
        }
    } else {
    
        clearInterval(snowInterval);
        snowInterval = null;

        document.querySelectorAll(".snow").forEach(s => s.remove());
    }
});

function makeSnow() {
    const snow = document.createElement("div");
    const size = Math.random() * 4.5 + 3.5;

    snow.className = "snow";
    snow.style.width = size + "px";
    snow.style.height = size + "px";
    snow.style.left = Math.random() * window.innerWidth + "px";
    snow.style.opacity = size / 8;

    if (size < 7) snow.style.zIndex = -5;

    snow.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(snow);

    setTimeout(() => snow.remove(), 5000);
}

document.body.classList.add("night");

const title = document.querySelector(".title");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("day", toggle.checked);
    document.body.classList.toggle("night", !toggle.checked);

    if (!toggle.checked) { 
        title.classList.remove("pop");
        void title.offsetWidth;
        title.classList.add("pop");
    }
});

