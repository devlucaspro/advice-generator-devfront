let adviceNumber = document.getElementById("adviceNumber");
let randomAdvice = document.getElementById("randomAdvice");
let btnAdvice = document.getElementById("btnAdvice");

let adviceNumberRandom = [];

btnAdvice.addEventListener("click", advice);


function advice() {

    fetch("https://api.adviceslip.com/advice")
    .then((r) => r.json())
    .then((json) => {

        adviceNumberRandom = json;

        randomAdvice.innerHTML = adviceNumberRandom.slip.advice

        adviceNumber.innerHTML = `Advice #${adviceNumberRandom.slip.id}`

    })
    .catch(() => {
        randomAdvice.innerHTML = `Something is wrong, try later`

        adviceNumber.innerHTML = `Attention`
    })

}

console.log('\x1b[32m%s\x1b[0m', 'Bem vindo ao desafio feito pelo Lucas Ribeiro da Devfrontchallenges, aproveite os desafios e Boa sorte!');
console.log('\x1b[36m%s\x1b[0m', 'Para mais informações você pode acessar nossa comunidade no instagram: @devcodepro');