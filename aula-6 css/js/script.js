/* Arquivo JS + alterar CSS */

let titulo = document.querySelector('h1')
titulo.textContent = 'Ursinhos carinhosos'
titulo.innerHTML = 'Ursinhos carinhosos'
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'img/download.jpg')
imagem.setAttribute('width', '280px')

/* MANIPULAR CSS */
document.querySelector('h1').style.color = "black";
titulo.style.color = "black";
titulo.style.backgroundColor = "white";
titulo.style.borderBottom = "2px solid black";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius = "5px";
let im = document.querySelector('h2')
im.textContent = ''
let tit = document.querySelector('#tit')
tit.textContent = 'Ursinhos carinhosos'
let bran = document.querySelector('#ce')
bran.textContent = '"Os Ursinhos Carinhosos" é uma série animada que se originou nos anos 1980 como uma linha de brinquedos e posteriormente se expandiu para uma série de desenhos animados. A série gira em torno dos Ursinhos Carinhosos, criaturas fofas que vivem na nuvem mágica de Carinhópolis. Cada um dos Ursinhos tem uma marca especial em sua barriga que representa uma emoção ou qualidade positiva, como amor, alegria, coragem, entre outros.'

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'escura')
box[0].removeAttribute('class')

/////// MODOS DE COR ///////
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')

let btnRosa = document.querySelector('#btrosa')

let btnAzul = document.querySelector('#btazul')

let btnAma = document.querySelector('#btama')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)
btnRosa.addEventListener('click', modoRosa)
btnAzul.addEventListener('click', modoAzul)
btnAma.addEventListener('click', modoAma)


function modoDark() {
    event.preventDefault();
    imagem.setAttribute('src', 'img/roxo.jpg')
    document.querySelector('h1').style.color = "white";
    titulo.style.backgroundColor = "black";
    titulo.style.borderBottom = "2px solid black";
    console.log('modo dark')
    tela.classList.add("dark");
    tela.classList.remove("rosa");
    tela.classList.remove("light");
    tela.classList.remove("azul");
    tela.classList.remove("ama");
    let im = document.querySelector('h2')
    im.textContent = 'Share bear'
    let tit = document.querySelector('#tit')
    tit.textContent = 'Ursinhos carinhosos'
    let bran = document.querySelector('#ce')
    bran.textContent = 'Share Bear, também conhecida como Ursinha Compartilha, é uma das Ursinhas Carinhosas, reconhecida por sua pelagem roxa e sua marca em forma de coração na barriga, que representa a importância de compartilhar e se importar com os outros. Share Bear é retratada como uma ursinha amigável e generosa, sempre pronta para dividir o amor e os bons momentos com seus amigos. Ela é conhecida por sua natureza atenciosa e por sua vontade de ajudar os outros.'
}

function modoLight() {
    event.preventDefault();
    console.log('modo light')
    tela.classList.remove("dark");
    tela.classList.remove("rosa");
    tela.classList.remove("azul");
    tela.classList.remove("ama");
    tela.classList.add("light");
    imagem.setAttribute('src', 'img/download.jpg')
    document.querySelector('h1').style.color = "black";
    titulo.style.backgroundColor = "white";
    titulo.style.borderBottom = "2px solid black";
    let im = document.querySelector('h2')
    im.textContent = ''
    let tit = document.querySelector('#tit')
    tit.textContent = 'Ursinhos carinhosos'
    let bran = document.querySelector('#ce')
    bran.textContent = '"Os Ursinhos Carinhosos" é uma série animada que se originou nos anos 1980 como uma linha de brinquedos e posteriormente se expandiu para uma série de desenhos animados. A série gira em torno dos Ursinhos Carinhosos, criaturas fofas que vivem na nuvem mágica de Carinhópolis. Cada um dos Ursinhos tem uma marca especial em sua barriga que representa uma emoção ou qualidade positiva, como amor, alegria, coragem, entre outros.'

    
}

function modoRosa() {
    event.preventDefault();
    console.log('modo rosa')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("azul");
    tela.classList.remove("ama");
    tela.classList.add("rosa");
    imagem.setAttribute('src', 'img/rosa.jpg')
    document.querySelector('h1').style.color = "#d838ab";
    titulo.style.backgroundColor = "white";
    titulo.style.borderBottom = "2px solid pink";
    im.textContent = 'Cheer bear'
    let tit = document.querySelector('#tit')
    tit.textContent = 'Ursinhos carinhosos'
    let bran = document.querySelector('#ce')
    bran.textContent = 'Cheer Bear, ou Ursinha Carinhosa, é uma das Ursinhas Carinhosas, conhecida por sua pelagem rosa e sua marca em forma de arco-íris na barriga, que representa a alegria e o apoio emocional. Cheer Bear é retratada como uma ursinha vibrante e otimista, sempre pronta para levantar o ânimo de seus amigos e espalhar esperança e positividade ao seu redor.Cheer Bear desempenha um papel crucial na série "Os Ursinhos Carinhosos", sendo uma fonte constante de encorajamento e inspiração para o grupo. Ela é frequentemente vista incentivando seus amigos a acreditarem em si mesmos e a enfrentarem os desafios com confiança. Cheer Bear é uma verdadeira amiga, sempre disponível para oferecer apoio emocional e espalhar amor e carinho pelos corações dos outros Ursinhos e de todos que cruzam seu caminho.'

}

function modoAzul() {
    event.preventDefault();
    console.log('modo azul')
    tela.classList.remove("dark");
    tela.classList.remove("light"); 
    tela.classList.remove("rosa");
    tela.classList.remove("ama");
    tela.classList.add("azul");
    imagem.setAttribute('src', 'img/azul.jpg')
    document.querySelector('h1').style.color = "blue";
    titulo.style.backgroundColor = "white";
    titulo.style.borderBottom = "2px solid blue";
    let im = document.querySelector('h2')
    im.textContent = 'Bedtime bear'
    let tit = document.querySelector('#tit')
    tit.textContent = 'Ursinhos carinhosos'
    let bran = document.querySelector('#ce')
    bran.textContent = 'Bedtime Bear, ou Ursinho Soninho, é um dos Ursinhos Carinhosos, reconhecido por sua pelagem azul e sua marca em forma de coração na barriga, que representa a importância do descanso e do sono. Bedtime Bear é retratado como um ursinho calmo e tranquilo, sempre pronto para ajudar seus amigos a terem uma boa noite de sono e descanso adequado. Bedtime Bear desempenha um papel reconfortante na série "Os Ursinhos Carinhosos", promovendo a importância do autocuidado e do bem-estar. Ele é frequentemente visto incentivando seus amigos a cuidarem de si mesmos, descansarem o suficiente e relaxarem quando necessário. Bedtime Bear é uma presença reconfortante para todos os Ursinhos Carinhosos, oferecendo conselhos sábios e apoio amoroso para garantir que todos desfrutem de um sono tranquilo e revigorante.'
}

function modoAma() {
    event.preventDefault();
    console.log('modo amarelo')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("rosa");
    tela.classList.remove("azul");
    tela.classList.add("ama");
    imagem.setAttribute('src', 'img/amarelo.jpg')
    document.querySelector('h1').style.color = "#fcc215";
    titulo.style.backgroundColor = "white";
    titulo.style.borderBottom = "2px solid yellow";
    let im = document.querySelector('h2')
    im.textContent = 'Funshine bear'
    let tit = document.querySelector('#tit')
    tit.textContent = 'Ursinhos carinhosos'
    let bran = document.querySelector('#ce')
    bran.textContent = ' Funshine Bear, ou Ursinho Carinho, é um dos Ursinhos Carinhosos, reconhecido por sua pelagem amarela brilhante e sua marca em forma de sol na barriga, que representa a alegria e o otimismo. Funshine Bear é retratado como um ursinho animado e enérgico, sempre pronto para espalhar felicidade e diversão por onde passa. Funshine Bear desempenha um papel vital na série "Os Ursinhos Carinhosos", trazendo luz e positividade para o grupo. Ele é frequentemente visto encorajando seus amigos a olharem o lado bom da vida e a enfrentarem desafios com entusiasmo. Funshine Bear é um símbolo de otimismo e amizade, inspirando os outros Ursinhos a viverem suas vidas com alegria e coragem.'
}

/*
titulo.addEventListener('click', mudarId)
function mudarId() {
    titulo.id = 'titulo'
    console.log(titulo.id)
}
*/