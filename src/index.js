const API_URL = "https://api.coinpaprika.com/v1/tickers";

const getInfo = () => {
    const response = fetch(API_URL,{
        method : 'GET'
    })
    .then(response => response.json())
    .then(data => {
        //let { name } = data;
        let i = 0;
        for (let index = 0; index < data.length; index++) {
            let element = data[index];
            
            console.log(element.name);
        }
    })
    .catch(error => console.log(error));
}

// price : data[].quotes.USD.price;

const init = () => {
    //setInterval(getInfo,5000);
    getInfo();
}

init();