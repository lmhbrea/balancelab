// DOM 요소
const damageInput = document.getElementById('damage');
const rpmInput = document.getElementById('rpm');
const hpInput = document.getElementById('hp');
const calculateBtn = document.getElementById('calculate-btn');
const resetBtn = document.getElementById('reset-btn');
const resultDiv = document.getElementById('result');
const proBtn = document.getElementById('pro-feature-btn');

// 계산 함수
function calculateTTK() {
    const damage = parseFloat(damageInput.value);
    const rpm = parseFloat(rpmInput.value);
    const hp = parseFloat(hpInput.value);

    if (damage <= 0 || rpm <= 0 || hp <= 0) {
        resultDiv.innerText = "Enter positive numbers only.";
        return;
    }

    const dps = (damage * rpm) / 60;
    const ttk = hp / dps;

    resultDiv.innerText = `DPS: ${dps.toFixed(2)}, TTK: ${ttk.toFixed(2)} sec`;
}

// 이벤트 연결
calculateBtn.addEventListener('click', calculateTTK);

// Reset 버튼 이벤트
resetBtn.addEventListener('click', () => {
    damageInput.value = 100;
    rpmInput.value = 600;
    hpInput.value = 1000;
    resultDiv.innerText = "";
});

// Pro Feature 클릭 (Revenue Signal)
proBtn.addEventListener('click', () => {
    console.log("Pro Feature button clicked"); // 로컬 확인용
    alert("Thanks for your interest in Pro Feature!");
    // Google Form 연동은 기존 그대로
});