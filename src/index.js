const API_URL = "https://api.coinpaprika.com/v1/tickers";
const coinInfo = document.querySelector('.coinInfo');


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
        let {quotes, name} = element;
        let {USD : {price}} = quotes;
        console.log(name,price);
    }
}

const rankAlignment = (rank) => {
    switch (rank) {
        case 1:
            
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        default:
            break;
    }
}

const init = async () => {
    //setInterval(await getInfo,5000);
    await getInfo();
}

init();