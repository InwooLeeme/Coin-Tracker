const API_URL = "https://api.coinpaprika.com/v1/tickers";
const coinInfo = document.querySelector('.coinInfo');
let rankIcon;


const getInfo = () => {
    const response = fetch(API_URL,{
        method : 'GET'
    })
    .then(response => response.json())
    .then(data => {
        data.sort((a,b) => {
            return a.rank - b.rank;         // 오름 차순 정렬
        });
        data.forEach(data => {
            loadData(data)
        });
        
    })
    .catch(error => console.log(error));
}

const loadData = (data) => {
    let element = data;
    let {quotes, name, rank,symbol} = element;
    let {USD : {price}} = quotes;
    const div = document.createElement('div');
    const coinNameSpan = document.createElement('span');
    const rankIcon = document.createElement('div');
    div.classList.add('coinItem');
    coinInfo.appendChild(div);
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


const init = async () => {
    //setInterval(await getInfo,5000);
    await getInfo();
}

init();