// This file is intentionally left blank.
document.getElementById('draw').addEventListener('click', function () {
    const omikujiResults = ['大吉', '中吉', '小吉', '末吉', '凶', '小凶', '大凶'];
    const colorChange = ['gold', 'yellow', 'orange', 'green', 'red', ''];
    //const result = omikujiResults[
    //     Math.floor(Math.random() * omikujiResults.length)
    //];
    const resultElement = document.getElementById('result');
    //resultElement.textContent = `あなたの運勢は...${result}!`;
    switch (Math.floor(Math.random() * omikujiResults.length)) {
        case 0:
            resultElement.textContent = `あなたの運勢は...${omikujiResults[0]}!`;
            resultElement.style.color = colorChange[0];
            break;
        case 1:
            resultElement.textContent = `あなたの運勢は...${omikujiResults[1]}!`;
            resultElement.style.color = colorChange[1];
            break;
        case 2:
            resultElement.textContent = `あなたの運勢は...${omikujiResults[2]}!`;
            resultElement.style.color = colorChange[2];
            break;
        case 3:
            resultElement.textContent = `あなたの運勢は...${omikujiResults[3]}!`;
            resultElement.style.color = colorChange[3];
            break;
        case 4:
            resultElement.textContent = `あなたの運勢は...${omikujiResults[4]}!`;
            resultElement.style.color = colorChange[4];
            break;
    }
});
