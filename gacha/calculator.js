// Get DOM elements
const inputRarity1 = document.getElementById("inputRarity1");
const inputRarity2 = document.getElementById("inputRarity2");
const inputRarity3 = document.getElementById("inputRarity3");
const singlePullButton = document.getElementById("singlePullButton");
const tenPullsButton = document.getElementById("tenPullsButton");
const resetButton = document.getElementById("resetButton");

let rarityCounts = [0, 0, 0];
let rarityProbabilities = [0, 0, 0];
let totalCount = 0;

singlePullButton.addEventListener("click", function () {
    pullCards(1);
});

tenPullsButton.addEventListener("click", function () {
    pullCards(10);
});

resetButton.addEventListener("click", function () {
    for (let i = 0; i < rarityCounts.length; i++) {
        rarityCounts[i] = 0;
    }
    totalCount = 0;
    updateRarityCounts();
});

inputRarity1.addEventListener("input", function () {
    rarityProbabilities[0] = parseFloat(inputRarity1.value) / 100;
});

inputRarity2.addEventListener("input", function () {
    rarityProbabilities[1] = parseFloat(inputRarity2.value) / 100;
});

inputRarity3.addEventListener("input", function () {
    rarityProbabilities[2] = parseFloat(inputRarity3.value) / 100;
});

function pullCards(count) {
    for (let i = 0; i < count; i++) {
        const randomValue = Math.random();
        let cumulativeProbability = 0;
        for (let j = 0; j < rarityProbabilities.length; j++) {
            cumulativeProbability += rarityProbabilities[j];
            if (randomValue <= cumulativeProbability) {
                rarityCounts[j]++;
                break;
            }
            
        }
    }
    totalCount = totalCount + count
    updateRarityCounts();
}

function updateRarityCounts() {
    document.getElementById("rarity1Count").textContent = rarityCounts[0];
    document.getElementById("rarity2Count").textContent = rarityCounts[1];
    document.getElementById("rarity3Count").textContent = rarityCounts[2];
    document.getElementById("totalCount").textContent = totalCount;
}
