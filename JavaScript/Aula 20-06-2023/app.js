const key = '5UTtOAJeIyv64asbhwObALmd3iXTBACe'

async function pesquisa() {
    // pega o valor do input
    const input = document.getElementById('cidade');
    const local = input.value;
    const promise = await fetch(`http://dataservice.accuweather.com/locations/v1/search?q=${local}&apikey=${key}`)
    const data = await promise.json();
    const city = data[0];
    console.log(city.Key);

    const promise2 = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${city.Key}?apikey=${key}`)
    const dataPrevisao = await promise2.json();
    const previsaoDoTempo = dataPrevisao[0]

    const {WeatherText, Temperature, LocalObservationDateTime} = previsaoDoTempo;
    console.log(Temperature.Metric.Value + ' ' + Temperature.Metric.Unit)
    console.log(WeatherText)
    new Date(LocalObservationDateTime).toLocaleDateString('pt-BR')
    data2 = new Date(LocalObservationDateTime).toLocaleDateString('pt-BR')
    console.log(data2)
}


// http://dataservice.accuweather.com/locations/v1/search?q=Londrina&apikey=5UTtOAJeIyv64asbhwObALmd3iXTBACe
// http://dataservice.accuweather.com/currentconditions/v1/44945?apikey=5UTtOAJeIyv64asbhwObALmd3iXTBACe