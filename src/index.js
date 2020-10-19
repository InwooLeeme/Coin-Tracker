const API_URL = "https://api.coinpaprika.com/v1/tickers";
const nameInfo = document.querySelector('.nameInfo');
const rankInfo = document.querySelector('.rankInfo');
const priceInfo = document.querySelector('.price');
const percentChange15m = document.querySelector('.percentChange15m');
const percentChange1h = document.querySelector('.percentChange1h');
const percentChange24h = document.querySelector('.percentChange24h');
const requestingText = document.querySelector('h3');


const getInfo = () => {
    const response = fetch(API_URL,{
        method : 'GET'
    })
    .then(response => response.json())
    .then(data => {
        loadData(data)
    })
    .catch(error => console.log(error));
}

const loadData = (data) => {
    for (let index = 0; index < data.length; index++) {
        let element = data[index];
        let { name,rank ,quotes:{USD} } = element;
        let {price,percent_change_24h,percent_change_15m,percent_change_1h} = USD;
        let nameList = document.createElement('li');
        let rankList = document.createElement('li');
        let priceList = document.createElement('li');
        let minChangeList = document.createElement('li');
        let hourChangeList = document.createElement('li');
        let dayChangeList = document.createElement('li');
        nameInfo.appendChild(nameList);
        rankInfo.appendChild(rankList);
        priceInfo.appendChild(priceList);
        percentChange15m.appendChild(minChangeList);
        percentChange1h.appendChild(hourChangeList);
        percentChange24h.appendChild(dayChangeList);
        nameList.innerHTML = `${name}`;
        rankList.innerHTML = `${rank}`;
        priceList.innerHTML = `${price}`;
        minChangeList.innerHTML = `${percent_change_15m}`;
        hourChangeList.innerHTML = `${percent_change_1h}`;
        dayChangeList.innerHTML = `${percent_change_24h}`;
    }
    requestingText.classList.toggle('ESq77a');
}

const init = async () => {
    setInterval(await getInfo,5000);
    //await getInfo();
}

init();