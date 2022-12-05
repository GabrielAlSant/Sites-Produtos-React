window.addEventListener('load', e => {
    postNews();
    "use strict";//restrito a funcionar em navegadores comES6 >
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./worker.js");
    }
}); 



let posicaoInicial
 const capturarLocalizacao = document.getElementById("localizacao")
 const  latitude = document.getElementById("latitude")
 const longitude = document.getElementById("longitude")

 const sucesso = (posicao) => {
    posicaoInicial = posicao
    latitude.innerHTML = posicaoInicial.coords.latitude
    longitude.innerHTML = posicaoInicial.coords.longitude
    const locations = document.getElementById("seila")
    locations.innerHTML = '<iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q='+ posicaoInicial.coords.latitude + "," +posicaoInicial.coords.longitude +'&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
   
 }

 const erro = (erro) =>{
    let errorMessage;
    switch(erro.code){
        case 0:
            errorMessage = "Erro desconhecido"
            break;
            case 1:
                errorMessage = "Erro desconhecido"
                break;
                case 2:
                    errorMessage = "Erro desconhecido"
                    break;
                    case 3:
                    errorMessage = "Erro desconhecido"
                    break;
    }
     console.log("ocorreu um erro " + errorMessage)
 }


 capturarLocalizacao.addEventListener("click", ()=>{
   navigator.geolocation.getCurrentPosition(sucesso,erro)
 })