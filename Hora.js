function carregar() {
var msg = document.getElementById('msg');
var img  = document.getElementById('foto');
var data = new Date();
var hora = data.getHours();
msg.innerHTML=`<p>Agora são ${hora} horas</p>` ;

if(hora<=1){
    msg.innerHTML=`<p>Agora é ${hora} hora</p>` ;
    msg.innerHTML += '<p><strong>Madrugada</strong></p>'
    img.innerHTML= '<img id="imagem" src="imagens/noite.png" alt="foto do dia"></img>'
} else if (hora<5){
    msg.innerHTML += '<p><strong>Madrugada</strong></p>'
    img.innerHTML= '<img id="imagem" src="imagens/noite.png" alt="foto do dia"></img>'
} else if(hora<12){
    msg.innerHTML += '<p><strong>Manhã</strong></p>'
    img.innerHTML= '<img id="imagem" src="imagens/manhã.png" alt="foto do dia"></img>'
}else if(hora<18){
    msg.innerHTML += '<p><strong>Tarde</strong></p>'
    img.innerHTML= '<img id="imagem" src="imagens/tarde.png" alt="foto do dia"></img>'
} else {
    msg.innerHTML += '<p><strong>Noite</strong></p>'
    img.innerHTML= '<img id="imagem" src="imagens/noite.png" alt="foto do dia"></img>'
}}