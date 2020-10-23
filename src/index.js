const API_URL = "https://api.coinpaprika.com/v1/tickers";
const coinInfo = document.querySelector('.coinInfo');
const loadingBar = document.querySelector('.loading');
const coinTitle = document.querySelector('h1');
let coinInfoUl;

const getInfo = () => {
    showLoadingBar();
    fetch(API_URL,{
        method : 'GET'
    })
    .then(response => response.json())
    .then(data => {
        createCoinInfoUl();
        data.sort((a,b) => {
            return a.rank - b.rank;         // 오름 차순 정렬
        });
        data.forEach(data => {
           loadData(data)
        });
        hideLoadingBar();
        reNewCoinInfo();
    })
    .catch(error => console.log(error));
}

const createCoinInfoUl = () => {
    coinInfoUl = document.createElement('ul');
}

const showLoadingBar = () => {
    loadingBar.style.opacity = 1;
}

const hideLoadingBar = () => {
    loadingBar.style.opacity = 0;
}

const reNewCoinInfo = () => {
    coinInfo.innerHTML = "";
    coinInfo.appendChild(coinInfoUl);
    setTimeout(getInfo,5000);
}

const loadData = (data) => {
    let element = data;
    let {quotes, name, rank} = element;
    let {USD : {price}} = quotes;
    const div = document.createElement('div');
    const coinNameSpan = document.createElement('span');
    const rankIcon = document.createElement('div');
    div.classList.add('coinItem');
    coinInfoUl.appendChild(div);
    div.appendChild(rankIcon);
    div.appendChild(coinNameSpan);
    if(rank < 4){
        if(rank === 1){
            rankIcon.classList.add('1st');
            rankIcon.innerHTML = `<i class="fas fa-crown"></i> #${rank}`
            coinNameSpan.innerHTML = `${name} is ${price}`;
        } 
        if(rank === 2){
            rankIcon.classList.add('2nd');
            rankIcon.innerHTML = `<i class="fas fa-crown"></i> #${rank}`
            coinNameSpan.innerHTML = `${name} is ${price}`;
        } 
        if(rank === 3) {
            rankIcon.classList.add('3rd');
            rankIcon.innerHTML = `<i class="fas fa-crown"></i> #${rank}`
            coinNameSpan.innerHTML = `${name} is ${price}`;
        } 
    } else{
        rankIcon.innerHTML = `#${rank}`
        coinNameSpan.innerHTML = `${name} is ${price}`;
    }
}

const init = () => {
    getInfo();
}

init();