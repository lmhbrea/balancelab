// TTK calculator functionality
document.getElementById("calculate-btn").addEventListener("click", function() {
    const damage = Number(document.getElementById("damage").value);
    const rpm = Number(document.getElementById("rpm").value);
    const hp = Number(document.getElementById("hp").value);

    const dps = (damage * (rpm/60)).toFixed(2);
    const ttk = (hp / dps).toFixed(2);
    const shots = Math.ceil(hp / damage);

    document.getElementById("result").innerHTML =
        `Shots: ${shots} | TTK: ${ttk}s | DPS: ${dps}`;
});

// Pro Feature button click → Google Form + console log
document.getElementById("pro-feature-btn").addEventListener("click", function() {
    console.log("Pro Feature clicked");
    window.open("https://docs.google.com/forms/d/1qVgXJQ1-KWg19L63zm6FkKsmVI0Fp6f8ZOd3Lfa3x0Y/viewform?usp=sharing", "_blank");
});