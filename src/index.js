const API_URL = "https://api.coinpaprika.com/v1/tickers";
const displayStatu = document.querySelector('.coinStatus');


const getInfo = () => {
    const response = fetch(API_URL,{
        method : 'GET'
    })
    .then(response => response.json())
    .then(data => {
        console.log(`Request`);
        for (let index = 0; index < data.length; index++) {
            let element = data[index];
            let { name ,quotes:{USD} } = element;
            let {price} = USD;
            let li = document.createElement('li');
            displayStatu.appendChild(li);
            li.innerHTML = `${name} : ${price}`;
        }
    })
    .catch(error => console.log(error));
}

const init = () => {
    setInterval(getInfo,5000);
}

init();