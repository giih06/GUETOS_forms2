function toggle(e) {
    var elemento = document.getElementById(e);
    var display = window.getComputedStyle(elemento).display; // refere-se à propriedade CSS display de um elemento HTML
    var imagem = document.getElementById('icone-' + e);

    var expandIcon = "img/outline_expand_circle_down_white_24dp.png";
    var playIcon = "img/outline_play_circle_outline_white_24dp.png";

    if(imagem.src.endsWith(expandIcon)) { // 
        imagem.src = playIcon;
    } else {
        imagem.src = expandIcon;
    }
    
    if(display === "none") {
        elemento.style.display = 'block'; // display block
    } else {
        elemento.style.display = 'none'; // display none (recolhe o conteudo)
    }
}
