const quotes = [
    {
        quote: "다른 누군가가 아닌 스스로를 등불로 삼아라.",
        author: "석가모니",
    },
    {
        quote: "마음이 선한 사람에겐 세상도 맑게 보인다.",
        author: "석가모니",
    },
    {
        quote: "가장 위대한 기도란 인내하는 것이다.",
        author: "석가모니",
    },
    {
        quote: "쇠 녹은 쇠에서 생기지만 점차 그 쇠를 먹어버린다. 옳지 못한 마음도 인간에게서 생기지만 결국 그 인간을 잠식하게 된다.",
        author: "석가모니",
    },
    {
        quote: "과거란 이미 버려진 것이다. 미래란 아직 오지 않은 것이다. 그러므로 현재를 관찰하라. 흔들리지 말고, 동하지도 말고 다만 오늘 할 일을 열심히 하라.",
        author: "석가모니",
    },
    {
        quote: "실패한 사람이 다시 일어나지 못하는 이유는 교만하기 때문이다. 성공한 사람이 유지하지 못하는 이유 또한 교만함 때문이다.",
        author: "석가모니",
    },
    {
        quote: "우리의 인생을 방해하는 두 가지가 있다. 하나는 어느 것도 끝내지 않는 것이요, 다른 하나는 어느 것도 시작하지 않는 것이다.",
        author: "석가모니",
    },
    {
        quote: "인간이 피해야 할 것은 두 가지 극단이다. 하나는 향락에만 몰두하는 것이요, 다른 하나는 고행에만 몰두하는 것이다.",
        author: "석가모니",
    },
    {
        quote: "어떤 행동에도 변하지 않고 닥쳐오는 운명이란 없다. 그러나 행동하지 않는 자에게 닥쳐오는 운명은 존재한다.",
        author: "석가모니",
    },
    {
        quote: "우리는 생각하는 대로 존재한다. 모든 것은 생각과 함께 시작된다. 생각에 따라 세계가 만들어진다.",
        author: "석가모니",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random()*quotes.length)]);
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;