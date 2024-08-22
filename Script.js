const openCookie = document.querySelector("#buttonIMG")
const tryAgain = document.querySelector("#button2")
const modalWrapper = document.querySelector(".modal-wrapper")
const modalWrapper2 = document.querySelector(".modal-wrapper2")
const pModal2 = document.querySelector("#p-modal2") 
const messages = [
    "Hoje é um ótimo dia para começar algo novo!",
    "Você encontrará a felicidade onde menos espera.",
    "O sucesso está a caminho, continue se esforçando!",
    "Seu sorriso é a verdadeira razão da minha felicidade. Eu te amo, meu amor.",
    "Eu me apaixonei por você desde a primeira vez que te vi. Hoje, esse amor se transformou em respeito e confiança. Nunca vou deixar de te amar.",
    "Sua atitude positiva será recompensada.",
    "Acredite em si mesmo e em suas habilidades.",
    "Acredite no seu talento! Determinação é o que não falta! Toda a sorte do mundo!",
    "Mãe, pretendo esforçar-me toda a vida para retribuir muito do que você já meu deu.",
    "Sem você, a minha vida teria menos brilho. Eu te amo, meu amor.",
    "Prometo estar para sempre ao teu lado, meu amor. Eu te amo incondicionalmente.",
    "Nunca se esqueça que estarei sempre ao seu lado te apoiando, te guiando e, principalmente, te amando.",
    "Hoje eu conheço a verdadeira felicidade. E ela tem nome, sobrenome, endereço e um sorriso lindo. Eu te amo, meu amor.",


];
function hideToggle(){
    modalWrapper.classList.toggle("hide")
    modalWrapper2.classList.toggle("hide")
}

function randomMessage(){
    const randomIndex = Math.floor(Math.random() * messages.length)
    const message = messages[randomIndex]
    pModal2.innerText = (`${message}`)
}

openCookie.addEventListener("click", hideToggle)
openCookie.addEventListener("click", randomMessage)
tryAgain.addEventListener("click", hideToggle)