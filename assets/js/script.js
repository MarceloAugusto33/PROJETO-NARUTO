let cardNaruto = document.querySelector('#naruto');
let cardSasuke = document.querySelector('#sasuke');
let cardSakura = document.querySelector('#sakura');
let cardKakashi = document.querySelector('#kakashi');
let cardMadara = document.querySelector('#madara');
let cardMinato = document.querySelector('#minato');

let img = document.querySelector('#personagem');
let nomePersonagem = document.querySelector('#nome-perso')
let descPersonagem = document.querySelector('#desc-perso')
let corpo = document.querySelector('#container-personagem')
let fimcorpo = document.querySelector('.fim-personagens')

let pointer = document.querySelector('.pointer')

let body = document.querySelector('body')

let links = document.querySelector("#sair")

function openNav(){
    document.querySelector('.overlay').style.width = "80%"
}
function closeNav(){
    document.querySelector('.overlay').style.width = "0%"
}

links.addEventListener('click',function(){
    setTimeout(function() {
        document.querySelector('.overlay').style.width = "0%"
    },200)
})

document.addEventListener('scroll',rolar);
function rolar() {
    let atual_posicao = window.scrollY;
    if (atual_posicao > 300){
        pointer.style.display = "flex"
    } else{
        pointer.style.display = "none"
    }
}

pointer.addEventListener('click',function() {
    location.href = "#"
})

cardNaruto.addEventListener('click',function() {
    img.setAttribute('src','assets/images/NARUTO-CORPOCOMPLETO.webp');
    nomePersonagem.textContent = "Naruto Uzumaki";
    nomePersonagem.style.color = "#FF6F00";
    descPersonagem.textContent = "O protagonista da série, conhecido por seu desejo de se tornar Hokage e por sua determinação inabalável. Ele possui uma natureza otimista e a habilidade de usar o chakra da raposa de nove caudas, Kurama.";
    fimcorpo.classList.add('fnaruto')
    fimcorpo.classList.remove('fsakura')
    fimcorpo.classList.remove('fsasuke')
    fimcorpo.classList.remove('fkakashi')
    fimcorpo.classList.remove('fmadara')
    fimcorpo.classList.remove('fminato')
    corpo.classList.remove('sasuke');
    corpo.classList.remove('sakura');
    corpo.classList.remove('kakashi');
    corpo.classList.remove('madara');
    corpo.classList.remove('minato');
    corpo.classList.add('naruto');
})
cardSasuke.addEventListener('click',function() {
    img.setAttribute('src','assets/images/SASUKE-CORPOCOMPLETO.webp');
    nomePersonagem.textContent = "Uchiha Sasuke";
    nomePersonagem.style.color = "#005CB2";
    descPersonagem.textContent = "Um dos últimos sobreviventes do clã Uchiha, rival de Naruto e amigo de infância. Ele busca vingança pela destruição de seu clã e passa por uma jornada de autodescoberta e redenção ao longo da série.";
    corpo.classList.remove('sakura');
    corpo.classList.remove('kakashi');
    corpo.classList.remove('madara');
    corpo.classList.remove('minato');
    corpo.classList.remove('naruto');
    corpo.classList.add('sasuke');
    fimcorpo.classList.remove('fnaruto')
    fimcorpo.classList.remove('fsakura')
    fimcorpo.classList.add('fsasuke')
    fimcorpo.classList.remove('fkakashi')
    fimcorpo.classList.remove('fmadara')
    fimcorpo.classList.remove('fminato')
})
cardSakura.addEventListener('click',function() {
    img.setAttribute('src','assets/images/SAKURA-CORPOCOMPLETO.webp');
    nomePersonagem.textContent = "Sakura Haruno";
    nomePersonagem.style.color = "#FF69B4 ";
    descPersonagem.textContent = "Uma kunoichi talentosa e membro do Time 7. Inicialmente focada em Sasuke, Sakura evolui como ninja, desenvolvendo suas habilidades médicas e se tornando uma forte e inteligente combatente";
    corpo.classList.remove('kakashi');
    corpo.classList.remove('madara');
    corpo.classList.remove('minato');
    corpo.classList.remove('naruto');
    corpo.classList.remove('sasuke');
    corpo.classList.add('sakura');
    fimcorpo.classList.remove('fnaruto')
    fimcorpo.classList.add('fsakura')
    fimcorpo.classList.remove('fsasuke')
    fimcorpo.classList.remove('fkakashi')
    fimcorpo.classList.remove('fmadara')
    fimcorpo.classList.remove('fminato')
})
cardKakashi.addEventListener('click',function() {
    img.setAttribute('src','assets/images/KAKASHI-CORPOCOMPLETO.webp')
    nomePersonagem.textContent = "Hatake Kakashi"
    nomePersonagem.style.color = "#02376b"
    descPersonagem.textContent = "O líder do Time 7, conhecido por sua máscara e por ser um mestre ninja. Ele é habilidoso em diversas técnicas, incluindo o Chidori e o Sharingan."
    corpo.classList.remove('sakura')
    corpo.classList.add('kakashi')
    corpo.classList.remove('madara')
    corpo.classList.remove('minato')
    corpo.classList.remove('naruto')
    corpo.classList.remove('sasuke')
    fimcorpo.classList.remove('fnaruto')
    fimcorpo.classList.remove('fsakura')
    fimcorpo.classList.remove('fsasuke')
    fimcorpo.classList.add('fkakashi')
    fimcorpo.classList.remove('fmadara')
    fimcorpo.classList.remove('fminato')
})
cardMadara.addEventListener('click',function() {
    img.setAttribute('src','assets/images/MADARA-CORPOCOMPLETO.webp')
    nomePersonagem.textContent = "Uchiha Madara"
    nomePersonagem.style.color = "#8B0000 "
    descPersonagem.textContent = "Um lendário shinobi e um dos antagonistas principais da série. Ele é conhecido por sua busca pelo poder e por seu papel fundamental na história dos clãs ninja."
    corpo.classList.remove('sakura')
    corpo.classList.remove('kakashi')
    corpo.classList.add('madara')
    corpo.classList.remove('minato')
    corpo.classList.remove('naruto')
    corpo.classList.remove('sasuke')
    fimcorpo.classList.remove('fnaruto')
    fimcorpo.classList.remove('fsakura')
    fimcorpo.classList.remove('fsasuke')
    fimcorpo.classList.remove('fkakashi')
    fimcorpo.classList.add('fmadara')
    fimcorpo.classList.remove('fminato')
})
cardMinato.addEventListener('click',function() {
    img.setAttribute('src','assets/images/MINATO-CORPOCOMPLETO.webp')
    nomePersonagem.textContent = "Namikaze Minato"
    nomePersonagem.style.color = "#FFD700  "
    descPersonagem.textContent = "O Quarto Hokage de Konoha e pai de Naruto. Ele é famoso por suas habilidades como ninja, especialmente por ser o usuário original da técnica do Rasengan e por ser conhecido como o Relâmpago Amarelo de Konoha."
    corpo.classList.remove('sakura')
    corpo.classList.remove('kakashi')
    corpo.classList.remove('madara')
    corpo.classList.add('minato')
    corpo.classList.remove('naruto')
    corpo.classList.remove('sasuke')
    fimcorpo.classList.remove('fnaruto')
    fimcorpo.classList.remove('fsakura')
    fimcorpo.classList.remove('fsasuke')
    fimcorpo.classList.remove('fkakashi')
    fimcorpo.classList.remove('fmadara')
    fimcorpo.classList.add('fminato')
})
