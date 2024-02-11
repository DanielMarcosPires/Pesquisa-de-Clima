const key = "f369a7b43c4caa1d51e18f9cea0b96bf"

function colocarDadosNaTela(dados){
    document.querySelector('#city').innerHTML = dados.name
    document.querySelector('#evento').innerHTML = dados.weather[0].description
    document.querySelector('#temp').innerHTML = Math.floor(dados.main.temp)
    document.querySelector('#umidade').innerHTML = dados.main.humidity
    document.querySelector('#img').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    console.log(dados)
    
}

async function Buscar(city){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`)
    .then(res=>res.json()).then(res=>{
        localStorage.setItem("Data",JSON.stringify(res))
    })
    const dadosJSON = JSON.parse(localStorage.getItem("Data"))

    colocarDadosNaTela(dadosJSON)
    
}
const dadosJSON = JSON.parse(localStorage.getItem("Data"))
console.log(dadosJSON)
colocarDadosNaTela(dadosJSON)
function buttonClick(){
    const city = document.querySelector("#input").value
    Buscar(city)
}