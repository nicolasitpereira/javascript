function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente! ')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/img.menininho.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/img.jovemho.jpg')
            } else if (idade < 50) {
                img.setAttribute('src','img/img.adulto.jpg')
            } else {
                img.setAttribute('src','img/img.idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/img.meninha.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/img.jovemmu.jpg')
            } else if (idade < 50) {
                img.setAttribute('src','img/img.adulta.jpg')
            } else {
                img.setAttribute('src','img/img.idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}