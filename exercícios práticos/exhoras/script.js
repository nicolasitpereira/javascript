function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`

    if (hora >= 0 && hora < 12) {
        img.src = 'img.manha.png'
        document.body.style.background = '#6a91f1'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'img.tarde.png'
        document.body.style.background = '#a35f07'
    } else {
        img.src = 'img.noite.png'
        document.body.style.background = ' #000d0f'
    }
}


