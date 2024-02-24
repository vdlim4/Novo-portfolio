//Texto automatico
window.addEventListener('load', function() {
    const spoilerText = document.querySelector('.sobre-spoiler')
    const text = "Me chamo Victor Diego de Lima, tenho 23 anos e sou apaixonado por tecnologia, desde criança adoro mexer no computador e aprender coisas novas sobre..."
    let indice = 0

    const intervalo = this.setInterval(function() {
        spoilerText.textContent += text[indice]
        indice++
        if (indice >= text.length) {
            clearInterval(intervalo)
        }
    }, 30)
})

//Swiper
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    }
})