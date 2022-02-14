document.addEventListener('DOMContentLoaded', function () {
    const botao = document.querySelectorAll('button')
    const imagem = document.querySelector('img')
    const favicon = document.querySelector('#favicon')
    var isOn = {
        red: false,
        blue: false,
        yellow: false,
        purple: false,
        green: false,
        pink: false
    }

    const imagens = {
        off: "imagens/lampada.png",
        red: "imagens/lampada_vermelha.png",
        blue: "imagens/lampada_azul.png",
        yellow: "imagens/lampada_amarela.png",
        purple: "imagens/lampada_uv.png",
        green: "imagens/lampada_verde.png",
        pink: "imagens/lampada_rosa.png"
    }

    botao.forEach(button => button.style.backgroundColor = button.dataset.color)

    botao.forEach(button => button.onclick = () => {
        var btn = button.dataset.color
        if (btn == "red") {
            if (isOn.red) {
                imagem.src = imagens.off
                favicon.setAttribute("href", imagens.off)
                isOn.red = false
            } else {
                imagem.src = imagens.red
                favicon.setAttribute("href", imagens.red)
                isOn.red = true
                isOn.blue = false
                isOn.yellow = false
                isOn.purple = false
                isOn.green = false
                isOn.pink = false
            }
        } else if (btn == "blue") {
            if (isOn.blue) {
                imagem.src = imagens.off
                favicon.setAttribute("href", imagens.off)
                isOn.blue = false
            } else {
                imagem.src = imagens.blue
                favicon.setAttribute("href", imagens.blue)
                isOn.blue = true
                isOn.red = false
                isOn.yellow = false
                isOn.purple = false
                isOn.green = false
                isOn.pink = false
            }
        } else if (btn == "yellow") {
            if (isOn.yellow) {
                imagem.src = imagens.off
                favicon.setAttribute("href", imagens.off)
                isOn.yellow = false
            } else {
                imagem.src = imagens.yellow
                favicon.setAttribute("href", imagens.yellow)
                isOn.yellow = true
                isOn.red = false
                isOn.blue = false
                isOn.purple = false
                isOn.green = false
                isOn.pink = false
            }
        } else if (btn == "purple") {
            if (isOn.purple) {
                imagem.src = imagens.off
                favicon.setAttribute("href", imagens.off)
                isOn.purple = false
            } else {
                imagem.src = imagens.purple
                favicon.setAttribute("href", imagens.purple)
                isOn.purple = true
                isOn.red = false
                isOn.blue = false
                isOn.yellow = false
                isOn.green = false
                isOn.pink = false
            }
        } else if (btn == "green") {
            if (isOn.green) {
                imagem.src = imagens.off
                favicon.setAttribute("href", imagens.off)
                isOn.green = false
            } else {
                imagem.src = imagens.green
                favicon.setAttribute("href", imagens.green)
                isOn.green = true
                isOn.red = false
                isOn.blue = false
                isOn.yellow = false
                isOn.purple = false
                isOn.pink = false
            }
        } else if (btn == "pink") {
            if (isOn.pink) {
                imagem.src = imagens.off
                favicon.setAttribute("href", imagens.off)
                isOn.pink = false
            } else {
                imagem.src = imagens.pink
                favicon.setAttribute("href", imagens.pink)
                isOn.pink = true
                isOn.red = false
                isOn.blue = false
                isOn.yellow = false
                isOn.purple = false
                isOn.green = false
            }
        }
    })
})