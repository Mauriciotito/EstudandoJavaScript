function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 9 para testar as horas manualmente
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'manhã.jpg'
        document.body.style.background = '#EAEAAE'
    }
    else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'tarde.jpg'
        document.body.style.background = '#CD7F32'
    }
    else {
        //BOA NOITE!
        img.src = 'noite.jpg'
        document.body.style.background = '#236B8E'
    }
}