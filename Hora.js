function carregar() {
var msg = document.getElementById('msg');
var img  = document.getElementById('foto');
var data = new Date();
var hora = data.getHours();
var imagem = document.getElementById('imagem');
msg.innerHTML=`<p>Agora são ${hora} horas</p>` ;

if(hora<=1){
    document.body.style.background = ('#977bb4');
    msg.innerHTML=`<p>Agora é ${hora} hora</p>` ;
    msg.innerHTML += '<p><strong>Boa madrugada!</strong></p>'
    imagem.src= "imagens/noite.png";
} else if (hora<5){
    document.body.style.background = ('#977bb4');
    msg.innerHTML += '<p><strong>Boa madrugada!</strong></p>'
    img.innerHTML= '<img id="imagem" src="imagens/noite.png" alt="foto do dia"></img>'
} else if(hora<12){
    document.body.style.background = ('#697279');
    msg.innerHTML += '<p><strong>Bom dia!<!/strong></p>'
    //img.innerHTML= '<img id="imagem" src="imagens/manhã.png" alt="foto do dia"></img>'
    imagem.src= "imagens/manhã.png";
}else if(hora<18){
    document.body.style.background = ('#8d9db5');
    msg.innerHTML += '<p><strong>Boa tarde!</strong></p>'
    img.innerHTML= '<img id="imagem" src="imagens/tarde.png" alt="foto do dia"></img>'
} else {
    document.body.style.background = ('#977bb4');
    msg.innerHTML += '<p><strong>Boa noite!</strong></p>'
    img.innerHTML= '<img id="imagem" src="imagens/noite.png" alt="foto do dia"></img>'
}}