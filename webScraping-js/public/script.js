(async() => {
    // abrindo o arquivo json criado com a lista das imagens
    const response = await fetch('instagram.json');
    const data = await response.json();

    // formatar os dados para exibir no HTML
    var htmlList = data
    .map( ({src}) => `<li><img src=${src}></li>`)
    .join('');

    if( htmlList === "") {
        htmlList = "<p>Conta privada ou sem fotos!!<p/>"
    }
    console.log(htmlList)
    
    // adicionar os elementos no HTML

    document.querySelector('.container').innerHTML = htmlList;
})();