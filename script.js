function calculateTTK() {
    const damage = parseFloat(document.getElementById("damage").value);
    const rpm = parseFloat(document.getElementById("rpm").value);
    const hp = parseFloat(document.getElementById("hp").value);

    if (damage <= 0 || rpm <= 0 || hp <= 0) {
        alert("Please enter valid positive numbers.");
        return;
    }

    const shots = Math.ceil(hp / damage);
    const secondsPerShot = 60 / rpm;
    const ttk = (shots - 1) * secondsPerShot;
    const dps = damage * (rpm / 60);

    document.getElementById("shots").textContent = shots;
    document.getElementById("ttk").textContent = ttk.toFixed(3);
    document.getElementById("dps").textContent = dps.toFixed(2);
}